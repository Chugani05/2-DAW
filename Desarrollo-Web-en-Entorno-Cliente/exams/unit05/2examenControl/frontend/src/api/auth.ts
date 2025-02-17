import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginAPI = async (credentials: { email: string; password: string }) => {
  const response = await apiClient.post('/auth/login', credentials);
  return response.data;
};

export const registerAPI = async (details: { username: string; email: string; password: string }) => {
  try {
    console.log('Datos enviados a /auth/register:', details);

    await apiClient.post('/auth/register', details);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error en el backend:', error.response?.data);
      throw error.response?.data || new Error('Error en la solicitud');
    }
    throw new Error('Error desconocido');
  }
};
