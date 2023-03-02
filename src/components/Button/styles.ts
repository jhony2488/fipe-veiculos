import styled from 'styled-components';
import { ButtonProps } from './types';

export const ButtonTouch = styled.button<ButtonProps>`
  width: 100%;
  background-color: ${({ disabled, loading, typeColor, theme }) => {
    if (typeColor === 'secondary' || typeColor === 'orange') {
      return 'rgba(57, 57, 57, 0.0)';
    }

    if (disabled && loading === false) {
      return theme.palette?.primary?.dark;
    }
    return theme.palette?.primary?.main;
  }};
  color: ${({ disabled, loading, typeColor, theme }) => {
    if (typeColor === 'secondary') {
      return theme?.palette?.grey['600'] || '#5C6170';
    } else if (typeColor === 'primary') {
      return 'white';
    } else if (disabled && loading === false) {
      return theme.palette?.grey['400'] || '#A4A7B4';
    }
    return theme.palette?.grey['600'] || '#5C6170';
  }};
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  border: 1px solid
    ${({ typeColor, theme }) => {
      if (typeColor === 'secondary') {
        return theme?.palette?.grey['300'] || '#C2C4CD';
      }

      if (typeColor === 'orange') {
        return theme?.palette?.primary?.main || '#E54D2E'
      }

      return 'transparent';
    }};

  border-radius: 8px;

  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.1);
    transition: 1.5s;
    cursor: pointer;
  }
`;
