import axios from 'axios';

const plataformaApi = axios.create({
  baseURL: process.env.urlPlataform,
  responseType: 'json',
})

export default plataformaApi;