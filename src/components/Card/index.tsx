
import React, { useState, useEffect, useCallback } from 'react';
import { useFormik } from 'formik';
import { useMediaQuery } from 'react-responsive';
import { useValuePrice, ValueContext } from '../../contexts/Value';
import api from '../../services/api';
import {
    Card,
} from '@mui/material';
import Button from '../Button'
import { SelectFieldInput } from '../SelectFieldInput'
import { selectsSchemas } from './schemas'

import {
    Container,
    Wrapper,
} from './styles';

export const CardComponent = () => {
    const [loadingButton, setLoadingButton] = useState(false);
    const [optionsMarca, setOptionsMarca] = useState([]);
    const [optionsModelos, setOptionsModelos] = useState([]);
    const [optionsAnos, setOptionsAnos] = useState([]);

    const { setValuePrice, value } = useValuePrice();

    const { handleSubmit, handleChange, values, touched, errors, setFieldValue } = useFormik({
        initialValues: {
            tipoVeiculo: 'carro',
            marca: '',
            modelo: '',
            ano: '',
        },
        validationSchema: selectsSchemas,
        onSubmit: (values) => {
            getValue({ marca: values.marca, tipoVeiculo: values.tipoVeiculo, modelos: values.modelo, anos: values.ano })
        },
    });

    const getMarcas = useCallback(async ({ tipoVeiculo }) => {
        if (tipoVeiculo) {
            setFieldValue('marca', '')
            setFieldValue('modelo', '')
            setFieldValue('ano', '')
            const { data, status } = await api.get(`/${tipoVeiculo}/marcas`);
            if (status === 200) {
                setOptionsMarca(data)
            }
        }
    }, [values.tipoVeiculo]);
    const getModelos = useCallback(async ({ marca, tipoVeiculo }) => {
        if (tipoVeiculo && marca) {
            setFieldValue('modelo', '')
            setFieldValue('ano', '')
            const { data, status } = await api.get(`/${tipoVeiculo}/marcas/${marca}/modelos`);

            if (status === 200) {
                if (data.modelos) {
                    setOptionsModelos(data.modelos);
                }
                else {
                    setOptionsModelos(data);
                }
            }
        }
    }, []);

    const getAnos = useCallback(async ({ marca, tipoVeiculo, modelos }) => {
        if (tipoVeiculo && marca && modelos) {
            setFieldValue('ano', '')
            const { data, status } = await api.get(`/${tipoVeiculo}/marcas/${marca}/modelos/${modelos}/anos`);
            if (status === 200) {
                setOptionsAnos(data)
            }
        }
    }, []);

    const getValue = useCallback(async ({ marca, tipoVeiculo, modelos, anos }) => {
        setLoadingButton(true)
        const { data, status } = await api.get(`/${tipoVeiculo}/marcas/${marca}/modelos/${modelos}/anos/${anos}`);

        if (status == 404) {
            alert('Valor não encontrado');
        }
        if (status == 200) {
            localStorage.setItem('valuePrices', JSON.stringify(data))
            setValuePrice(data);
        }

        setLoadingButton(false);
    }, []);

    useEffect(() => {
        getMarcas({ tipoVeiculo: values.tipoVeiculo })
    }, []);

    useEffect(() => {
        getModelos({ marca: values.marca, tipoVeiculo: values.tipoVeiculo });
    }, [values.marca]);

    useEffect(() => {
        getAnos({ marca: values.marca, tipoVeiculo: values.tipoVeiculo, modelos: values.modelo });
    }, [values.modelo]);

    useEffect(() => {
        if (values.modelo != '' && values.modelo != null && values.modelo != undefined && values.marca != '' && values.ano != '') {
            window.location.href = "/result"
        }
    }, [value]);

    return (
        <Card variant="outlined">
            <Container>
                <Wrapper>
                    <form onSubmit={handleSubmit}>
                        <SelectFieldInput
                            name='tipoVeiculo'
                            value={values.tipoVeiculo}
                            label='Tipo Veiculo'
                            placeholder='Tipo Veiculo'
                            options={['carros', 'motos', 'caminhoes']}
                            onChange={handleChange}
                            error={touched.tipoVeiculo ? errors.tipoVeiculo : ''}
                        />
                        <SelectFieldInput
                            name='marca'
                            value={values.marca}
                            label='Marca'
                            placeholder='Marca'
                            options={optionsMarca || []}
                            onChange={handleChange}
                            error={touched.marca ? errors.marca : ''}
                        />
                        {values.marca != '' && values.marca != null && values.marca != undefined
                            ? <SelectFieldInput
                                name='modelo'
                                value={values.modelo}
                                label='Modelo'
                                placeholder='Modelos'
                                options={optionsModelos || []}
                                onChange={handleChange}
                                error={touched.modelo ? errors.modelo : ''}
                            /> : <></>
                        }
                        {values.modelo != '' && values.modelo != null && values.modelo != undefined ? <SelectFieldInput
                            name='ano'
                            value={values.ano}
                            label='Ano'
                            placeholder='Ano'
                            options={optionsAnos || []}
                            onChange={handleChange}
                            error={touched.ano ? errors.ano : ''}
                        /> : <></>}
                        <Button
                            disabled={!(values.modelo != '' && values.modelo != null && values.modelo != undefined && values.marca != '' && values.ano != '')}
                            loading={loadingButton}
                            text={'Consultar preço'}
                            type={'submit'}
                            typeColor={'primary'}
                        />
                    </form>
                </Wrapper>
            </Container>
        </Card>

    );
};
