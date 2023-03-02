
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
            <Container sx={{ minWidth: 315 }}>
                <Label id={label}>{label}</Label>
                <ControlForm fullWidth >
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
                            return value;
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
                            options ? options?.map((option: optionProps) => (
                                <MenuItem key={option} value={option.codigo}>
                                    {option.nome}
                                </MenuItem>
                            )): <></>
                        }
                    </Select>
                </ControlForm>
            </Container>
        </div>
    );
};
