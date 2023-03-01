import axios from 'axios';

const plataformaApi = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_PLATAFORMA_URL,
  responseType: 'json',
})

export default plataformaApi;