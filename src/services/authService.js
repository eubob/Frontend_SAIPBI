import api from './AxiosInstance';

const authService = {
  async me() {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

export default authService;
