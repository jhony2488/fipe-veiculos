import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useMediaQuery } from 'react-responsive';
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
    const [loadingButton, setLoadingButton] = useState(false)

    const isMobile = useMediaQuery({ query: '(max-width: 400px)' });

    const { handleSubmit, handleChange, values, touched, errors, setFieldValue } = useFormik({
        initialValues: {
            marca: '',
            modelo: '',
            ano: '',
        },
        validationSchema: selectsSchemas,
        onSubmit: (values) => {
            //
        },
    });

    return (

        <Card variant="outlined">
            <Container>
                <Wrapper isMobile={isMobile}>
                    <form onSubmit={handleSubmit}>
                        <SelectFieldInput
                            name='marca'
                            value={values.marca}
                            label='Marca'
                            placeholder='Marca'
                            options={['Isento', 'Não isento']}
                            onChange={handleChange}
                            error={touched.marca ? errors.marca : ''}
                        />
                        <SelectFieldInput
                            name='modelo'
                            value={values.modelo}
                            label='Modelo'
                            placeholder='Inscrição estadual'
                            options={['Isento', 'Não isento']}
                            onChange={handleChange}
                            error={touched.modelo ? errors.modelo : ''}
                        />
                        {values.modelo != '' && values.modelo != null && values.modelo != undefined ? <SelectFieldInput
                            name='ano'
                            value={values.ano}
                            label='Ano'
                            placeholder='Ano'
                            options={['Isento', 'Não isento']}
                            onChange={handleChange}
                            error={touched.ano ? errors.ano : ''}
                        /> : <></>}
                        <Button
                            disabled={!(values.modelo != '' && values.modelo != null && values.modelo != undefined && values.marca !='')}
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
