import create from 'zustand';
import axios from 'axios';
import { IUser } from '../interface/interface';

interface UserState {
  users: IUser[];
  totalUsers: number;
  currentPage: number;
  fetchUsers: (limit?: number, skip?: number) => void;
  searchUsersByUsername: (username: string) => void;
  addUser: (user: Omit<IUser, 'id' | 'image' | 'lastUpdate'>) => void;
  deleteUser: (id: number) => void;
  getUserById: (id: number) => Promise<IUser | null>;
  updateUser: (id: number, user: Partial<IUser>) => void;
  setCurrentPage: (page: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  totalUsers: 0,
  currentPage: 1,
  fetchUsers: async (limit = 10, skip = 0) => {
    try {
      const response = await axios.get(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
      set({ users: response.data.users, totalUsers: response.data.total });
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  },
  searchUsersByUsername: async (username: string) => {
    try {
      const response = await axios.get(`https://dummyjson.com/users/search?q=${username}`);
      set({ users: response.data.users });
    } catch (error) {
      console.error('Failed to search users:', error);
    }
  },
  addUser: async (user) => {
    try {
      const response = await axios.post('https://dummyjson.com/users/add', user, {
        headers: { 'Content-Type': 'application/json' },
      });
      set((state) => ({ users: [...state.users, response.data] }));
    } catch (error) {
      console.error('Failed to add user:', error);
    }
  },
  deleteUser: async (id: number) => {
    try {
      await axios.delete(`https://dummyjson.com/users/${id}`);
      set((state) => ({
        users: state.users.filter((user) => user.id !== id),
      }));
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  },
  getUserById: async (id: number) => {
    try {
      const response = await axios.get(`https://dummyjson.com/users/${id}`);
      return response.data;
    } catch (error) {
      console.error('Failed to get user:', error);
      return null;
    }
  },
  updateUser: async (id: number, user: Partial<IUser>) => {
    try {
      const response = await axios.put(`https://dummyjson.com/users/${id}`, user, {
        headers: { 'Content-Type': 'application/json' },
      });
      set((state) => ({
        users: state.users.map((u) => (u.id === id ? response.data : u)),
      }));
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  },
  setCurrentPage: (page: number) => set({ currentPage: page }),
}));
