import { FormControl, InputLabel } from '@mui/material';
import { Box, styled as MUIStyled } from '@mui/system';
import styled from 'styled-components';

export const Container = MUIStyled(Box)({
  legend: {
    display: 'none',
  },
});

export const Label = MUIStyled(InputLabel)(() => ({
  fontFamily: 'Roboto',
  fontSize: '0.75rem',
  fontWeight: 400,
  color: '#181925',

  display: 'block',
  marginBottom: 4,
}));

interface ControlFormProps {
  inputError?: string;
}

export const ControlForm = MUIStyled(FormControl)<ControlFormProps>(({ inputError,theme }) => ({
  border: 1,
  borderStyle: 'solid',
  borderColor: inputError ? '#F44336' :'#C2C4CD',
  borderRadius: 8,
  flexDirection: 'row',
  alignItems: 'center',
  paddingRight: '16px',
  paddingLeft: '16px',
  maxHeight: 50.8,

  div: {
    width: '100%',
  },

  fieldset: {
    border: 0,
  },
}));

export const SpanPlaceholder = styled.span`
  font-family: Roboto;
  font-size: 0.875rem;
  font-weight: 400;
  color: #C2C4CD;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  color: #f44336;
  font-family: Roboto;
  font-size: 0.7rem;
`;
