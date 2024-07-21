import React from 'react';
import logo from '../../assets/Vector.png';
import logo2 from '../../assets/logo_login.png';
import { useLoginValidation } from '../../validation';
import { Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/useAuthStore';

const Login: React.FC = () => {
  const { control, handleSubmit } = useLoginValidation();
  const { login, error } = useAuthStore((state) => ({
    login: state.login,
    error: state.error,
  }));
  const navigate = useNavigate();

  const onSubmit = async (data: { username: string; password: string }) => {
    await login(data.username, data.password);
    if (!error) {
      navigate('/');
    }
  };

  const onError = (errors: any) => {
    console.error(errors);
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="flex flex-col gap-[60px] bg-[#F5F6FA] w-[517px] h-full">
        <header className="flex mt-[56px] ml-[59px] mb-[100px] items-center gap-2">
          <img src={logo} alt="logo" className="w-[30px] h-[30px]" />
          <h1 className="text-[16px] text-black font-bold">Logoipsum</h1>
        </header>
        <section>
          <img src={logo2} alt="logo2" className="w-[454px] h-[399px]" />
          <div className="flex flex-col text-center max-w-[424px] max-h-[94px] gap-[8px] mx-auto">
            <h1 className="text-[24px] font-bold">Service</h1>
            <p className="text-[16px]">
              An expert team help you to analyze your political power. An expert team.
            </p>
          </div>
        </section>
        <footer className="ml-[49px] mb-8 mt-auto">
          <p>©2020 All Rights Reserved. PT Indonesia Indicator</p>
        </footer>
      </div>
      <form className="m-auto" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex flex-col gap-[8px] mb-[40px]">
          <h1 className="text-[29px] font-bold">Welcome to Logo Ipsum</h1>
          <div className="flex gap-2">
            <p className="text-[16px]">Don't have an account?</p>
            <p className="text-blue-500 text-[16px] font-bold">Sign Up</p>
          </div>
        </div>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <div className="flex flex-col mb-[20px] gap-[20px]">
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="username" className="block text-[16px] font-medium text-gray-900">
              Username*
            </label>
            <Controller
              name="username"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <input
                    type="text"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Username"
                    {...field}
                  />
                  {fieldState.error && (
                    <span className="text-red-500 text-sm">
                      {fieldState.error.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="password" className="block text-[16px] font-medium text-gray-900">
              Password*
            </label>
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    {...field}
                  />
                  {fieldState.error && (
                    <span className="text-red-500 text-sm">
                      {fieldState.error.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-[30px]">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-500">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-[#2161D5] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
