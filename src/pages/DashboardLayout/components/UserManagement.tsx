import React, { useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { FaEdit, FaTrash } from 'react-icons/fa';
import ModalAddUser from './ModalAddUser';
import { useUserStore } from '../../../stores/useUserStore';
import ModalEdit from './ModalEdit';

const UserManagement: React.FC = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const users = useUserStore((state) => state.users);
  const fetchUsers = useUserStore((state) => state.fetchUsers);
  const searchUsersByUsername = useUserStore((state) => state.searchUsersByUsername);
  const deleteUser = useUserStore((state) => state.deleteUser);
  const currentPage = useUserStore((state) => state.currentPage);
  const setCurrentPage = useUserStore((state) => state.setCurrentPage);
  const totalUsers = useUserStore((state) => state.totalUsers);

  const limit = 10;

  useEffect(() => {
    fetchUsers(limit, (currentPage - 1) * limit);
  }, [fetchUsers, currentPage]);

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleOpenEditModal = (userId: number) => {
    setSelectedUserId(userId);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedUserId(null);
    setIsEditModalOpen(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;
    setSearchQuery(username);
    searchUsersByUsername(username);
  };

  const handleDelete = (id: number) => {
    deleteUser(id);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4 justify-between">

      <h1 className="text-[20px] font-bold">USER MANAGEMENT</h1>
      <p className='text-[13px]'>Logoipsum {" "} <span className="font-bold">/Usermanagement</span></p>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search by username"
          className="p-2 border border-gray-300 rounded-lg w-1/3"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button onClick={handleOpenAddModal} className="ml-auto bg-blue-500 text-white p-2 rounded-lg">Add User</button>
      </div>
      <div className="overflow-x-auto h-screen">
        <table className="min-w-full bg-white border border-gray-200 mb-32">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Username</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Gender</th>
              <th className="text-left p-4">Last Update</th>
              <th className="text-left p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-100">
                <td className="p-4 flex items-center">
                  <img src={user.image} alt={user.firstName} className="w-10 h-10 rounded-full mr-3" />
                  {user.firstName} {user.lastName}
                </td>
                <td className="p-4">{user.username}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.gender}</td>
                <td className="p-4">{user.lastUpdate}</td>
                <td className="p-4">
                  <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className="flex items-center text-gray-500 hover:text-gray-700">
                      <BsThreeDots size={20}/>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute z-10 right-0 w-36 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                } group flex items-center px-4 py-2 text-sm`}
                                onClick={() => handleOpenEditModal(user.id)}
                              >
                                <FaEdit className="mr-3" />
                                Edit
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                } group flex items-center px-4 py-2 text-sm`}
                                onClick={() => handleDelete(user.id)}
                              >
                                <FaTrash className="mr-3" />
                                Delete
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between ">
          <span className="text-sm text-gray-600">Showing {users.length} of {totalUsers} User</span>
          <div className="flex space-x-1">
            {Array.from({ length: Math.ceil(totalUsers / limit) }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <ModalAddUser isOpen={isAddModalOpen} onClose={handleCloseAddModal} />
      {selectedUserId !== null && (
        <ModalEdit isOpen={isEditModalOpen} onClose={handleCloseEditModal} userId={selectedUserId} />
      )}
    </div>
  );
};

export default UserManagement;
