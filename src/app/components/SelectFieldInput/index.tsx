import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Container, ControlForm, ErrorMessage, Label, SpanPlaceholder } from './styles';
import { SelectInputProps } from './interface';

export const SelectFieldInput: React.FC<SelectInputProps> = ({
  label,
  onChange,
  options,
  value,
  name,
  placeholder,
  error
}) => {

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event);
  };

  return (
    <div>
    <Container sx={{ minWidth: 315 }}>
      <Label id={label}>{label}</Label>
      <ControlForm fullWidth inputError={error}>
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

          {options?.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </ControlForm>
    </Container>
    <ErrorMessage>
      {error}
    </ErrorMessage>
    </div>
  );
};
