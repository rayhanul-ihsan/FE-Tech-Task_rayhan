import create from 'zustand';
import axios from 'axios';

interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  refreshToken: string;
}

interface AuthState {
  user: User | null;
  error: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  error: null,
  login: async (username, password) => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });
      const { token, refreshToken, ...user } = response.data;
      set({ user: { ...user, token, refreshToken }, error: null });
    } catch (error: any) {
      set({ error: error.response?.data?.message || 'Login failed' });
    }
  },
  logout: () => {
    set({ user: null, error: null });
  },
}));
