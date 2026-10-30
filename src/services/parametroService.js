import api from './AxiosInstance';

const parametroService = {
  async listar() {
    const response = await api.get('/parametros');
    return response.data;
  },

  async buscar(chave) {
    const response = await api.get(`/parametros/${encodeURIComponent(chave)}`);
    return response.data;
  },

  async atualizar(chave, valor) {
    const response = await api.put(`/parametros/${encodeURIComponent(chave)}`, { valor });
    return response.data;
  },

  async atualizarVarios(parametros) {
    const response = await api.put('/parametros', { parametros });
    return response.data;
  },
};

export default parametroService;
