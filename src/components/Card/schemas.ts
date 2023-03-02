import * as yup from 'yup';

export const selectsSchemas = yup.object().shape({
  marca: yup.string().required('Campo Obrigatório'),
  modelo: yup.string().required('Campo Obrigatório'),
  ano: yup.string().required('Campo Obrigatório'),
});
