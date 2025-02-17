import axios from 'axios';

const API_URL = 'http://localhost:4000/api/auth';

export const registerAPI = async (details: { username: string; email: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/register`, details, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data; // Devuelve la respuesta del servidor
  } catch (error) {
    // Solución para manejar el tipo 'unknown'
    if (axios.isAxiosError(error)) {
      throw error.response ? error.response.data : new Error('Error en la solicitud');
    } else {
      throw new Error('Error desconocido');
    }
  }
};
