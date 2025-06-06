import api from './api';

export const getAllLocations = async () => {
  try {
    const response = await api.get('/locais');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar locais:', error);
    return [];
  }
};
