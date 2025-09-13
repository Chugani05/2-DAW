import { defineStore } from 'pinia';
import { ref } from 'vue';
import { loginAPI, registerAPI } from '../api/auth';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null);
  const username = ref(null);

  const login = async (credentials: { email: string; password: string }) => {
    const response = await loginAPI(credentials);
    token.value = response.token;
    username.value = response.user;
    localStorage.setItem('token', response.token);
  };

  const register = async (details: { username: string; email: string; password: string }) => {
    console.log("registrar a: ",  JSON.stringify(details))
    await registerAPI(details);
  };

  const logout = () => {
    token.value = null;
    username.value = null;
    localStorage.removeItem('token');
  };

  return { token, username, login, register, logout };
});
