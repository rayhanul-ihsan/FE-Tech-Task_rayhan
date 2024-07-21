import React, { useState, useEffect } from 'react';
import { IAddUser } from '../../../interface/interface';
import { useUserStore } from '../../../stores/useUserStore';

interface ModalEditProps {
  isOpen: boolean;
  onClose: () => void;
  userId: number;
}

const ModalEdit: React.FC<ModalEditProps> = ({ isOpen, onClose, userId }) => {
  const [formData, setFormData] = useState<IAddUser>({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    username: '',
    age: 0,
  });
  const getUserById = useUserStore((state) => state.getUserById);
  const updateUser = useUserStore((state) => state.updateUser);

  useEffect(() => {
    if (isOpen) {
      getUserById(userId).then((user) => {
        if (user) {
          setFormData({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            gender: user.gender,
            username: user.username,
            age: user.age,
          });
        }
      });
    }
  }, [isOpen, userId, getUserById]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUser(userId, formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      id="crud-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300 bg-opacity-50"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow">
        <div className="flex items-center justify-between p-4 md:p-5 mb-[-16px]">
          <div className="flex flex-col">
            <h3 className="text-[22px] font-semibold text-[#44566C]">User Management</h3>
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
        <form className="p-4 md:p-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">
                First Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="block w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Input First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">
                Last Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="block w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Input Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                Username<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="block w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Input Username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Input Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">
                Gender<span className="text-red-600">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                className="block w-full p-2 border border-gray-300 rounded-lg"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="" className="text-gray-400">Choose Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900">
                Age<span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="block w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Input Age"
                value={formData.age}
                onChange={handleChange}
              />
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

export default ModalEdit;
