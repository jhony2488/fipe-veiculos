
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Container, ControlForm, Label, SpanPlaceholder } from './styles';
import { SelectInputProps, optionProps } from './interface';

export const SelectFieldInput: React.FC<SelectInputProps> = ({
    label,
    onChange,
    options,
    value,
    name,
    placeholder,
}) => {

    const handleChange = (event: SelectChangeEvent) => {
        onChange(event);
    };

    return (
        <div>
            <Container sx={{ minWidth: 280 }}>
                <Label id={label}>{label}</Label>
                <ControlForm sx={{ minWidth: 280 }}>
                    <Select
                        name={name}
                        labelId={label}
                        id={label}
                        displayEmpty
                        value={value}
                        onChange={handleChange}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                                return <SpanPlaceholder>{placeholder}</SpanPlaceholder>;
                            }
                            return typeof options[0] === 'string' ? value : options?.filter((item:{codigo: number | string;}) => item.codigo == value)[0].nome;
                        }}
                    >
                        <MenuItem value='' aria-hidden>
                            <SpanPlaceholder>{placeholder}</SpanPlaceholder>
                        </MenuItem>

                        {typeof options[0] === 'string' ? options?.map((option: string) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        )) :
                            options ? options?.map((option: optionProps, index:number) => (
                                <MenuItem key={index} value={option.codigo}>
                                    {option.nome}
                                </MenuItem>
                            )) : <></>
                        }
                    </Select>
                </ControlForm>
            </Container>
        </div>
    );
};
