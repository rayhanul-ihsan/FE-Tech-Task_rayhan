import React from "react";
import { Controller } from "react-hook-form";
import { IAddUser } from "../../../interface/interface";
import { useModalAddUserValidation } from "../../../validation";
import { useUserStore } from '../../../stores/useUserStore';

interface ModalAddUserProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAddUser: React.FC<ModalAddUserProps> = ({ isOpen, onClose }) => {
  const { control, handleSubmit, formState: { errors } } = useModalAddUserValidation();
  const addUser = useUserStore((state) => state.addUser);

  const onSubmit = (data: IAddUser) => {
    const newUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      gender: data.gender,
      username: data.username,
      age: data.age,
    };
    
    addUser(newUser);
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div
      id="crud-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300 bg-opacity-50"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow ">
        <div className="flex items-center justify-between p-4 md:p-5 mb-[-16px]">
          <div className="flex flex-col">
            <h3 className="text-[22px] font-semibold text-[#44566C]">
              User Management
            </h3>
            <p className="text-[#8697A8] text-[13px]">
              If you need more info, please check Project Guidelines.
            </p>
          </div>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <form className="p-4 md:p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                First Name<span className="text-red-600">*</span>
              </label>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    id="firstName"
                    className={`block w-full p-2 border ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg`}
                    placeholder="Input First Name"
                    {...field}
                  />
                )}
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">{errors.firstName.message}</span>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Last Name<span className="text-red-600">*</span>
              </label>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    id="lastName"
                    className={`block w-full p-2 border ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg`}
                    placeholder="Input Last Name"
                    {...field}
                  />
                )}
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">{errors.lastName.message}</span>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Username<span className="text-red-600">*</span>
              </label>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    id="username"
                    className={`block w-full p-2 border ${
                      errors.username ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg`}
                    placeholder="Input Username"
                    {...field}
                  />
                )}
              />
              {errors.username && (
                <span className="text-red-500 text-sm">{errors.username.message}</span>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email<span className="text-red-600">*</span>
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    type="email"
                    id="email"
                    className={`block w-full p-2 border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg`}
                    placeholder="Input Email"
                    {...field}
                  />
                )}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Gender<span className="text-red-600">*</span>
              </label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <select
                    id="gender"
                    className={`block w-full p-2 border ${
                      errors.gender ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg`}
                    {...field}
                  >
                    <option value="" className="text-gray-400">
                      Choose Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                )}
              />
              {errors.gender && (
                <span className="text-red-500 text-sm">{errors.gender.message}</span>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="age"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Age<span className="text-red-600">*</span>
              </label>
              <Controller
                name="age"
                control={control}
                render={({ field }) => (
                  <input
                    type="number"
                    id="age"
                    className={`block w-full p-2 border ${
                      errors.age ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg`}
                    placeholder="Input Age"
                    {...field}
                  />
                )}
              />
              {errors.age && (
                <span className="text-red-500 text-sm">{errors.age.message}</span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-end p-4 md:p-5">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAddUser;
