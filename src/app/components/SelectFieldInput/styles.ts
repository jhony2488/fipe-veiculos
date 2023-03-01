import { FormControl, InputLabel } from '@mui/material'
import { Box, styled as MUIStyled } from '@mui/system'
import styled from 'styled-components'

export const Container = MUIStyled(Box)({
  legend: {
    display: 'none',
  }
})

export const Label = MUIStyled(InputLabel)(({ theme }) => ({
  fontFamily: 'Roboto',
  fontSize: '0.75rem',
  fontWeight: 400,
  color: theme.palette.grey[800],

  display: 'block',
  marginBottom: 4,
}))

interface ControlFormProps {
  inputError?: string;
}


export const ControlForm = MUIStyled(FormControl)<ControlFormProps>(({ theme, inputError }) => ({
  border: 1,
  borderStyle: 'solid',
  borderColor: inputError ? '#F44336'  : theme.palette.grey['300'],
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
  }
}))

export const SpanPlaceholder = styled.span`
  font-family: 'Manrope';
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.grey['300']};
`

export const ErrorMessage = styled.span`
  position: absolute;
  color: #F44336;
  font-family: 'Manrope';
  font-size: 0.7rem;
`
