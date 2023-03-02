import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { useValuePrice } from '../../contexts/Value';

export const CardResult = () => {
    const { value } = useValuePrice();
    const [getValue, setValue] = useState<{ Marca: string; Valor: string; AnoModelo: number }>()

    useEffect(() => {
        const valueLocal = localStorage.getItem('valuePrices')
        const valuePrice = JSON.parse(valueLocal ? valueLocal : '{}');

        const result = value ? value : valuePrice

        setValue(result)
    }, [])

    return (
        <Container>
            <h1>
                Tabela fipe: preço {getValue?.Marca} {getValue?.AnoModelo}
            </h1>
            <p className='value'>{getValue?.Valor}</p>
            <p className='description'>Este é o preço de compra do veiculo</p>
        </Container>
    )
}
