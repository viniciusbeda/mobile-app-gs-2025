import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // ajuste para IP da máquina se rodar em dispositivo físico

const eventService = {
  getEventos: async () => {
    const response = await axios.get(`${API_BASE_URL}/eventos`);
    return response.data;
  },

  getEventoById: async (id) => {
    const response = await axios.get(`${API_BASE_URL}/eventos/${id}`);
    return response.data;
  },

  createEvento: async (evento) => {
    const response = await axios.post(`${API_BASE_URL}/eventos`, evento);
    return response.data;
  },

  updateEvento: async (id, evento) => {
    const response = await axios.put(`${API_BASE_URL}/eventos/${id}`, evento);
    return response.data;
  },

  deleteEvento: async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/eventos/${id}`);
    return response.data;
  },
};

export default eventService;
