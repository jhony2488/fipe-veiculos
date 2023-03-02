import styled from 'styled-components';
import { Box, styled as MUIStyled } from '@mui/system';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Wrapper = MUIStyled(Box)(() => ({
  width: '90%',
  backgroundColor: 'white',
  paddingTop: '32px',
  paddingBottom: '32px',
  paddingLeft: '24px',
  paddingRight: '24px',
  boxShadow: '-5px 20px 20px rgba(57, 57, 57, 0.07)',
  borderRadius: '16px',
}));

export const Division = styled.div`
  width: 100%;
  height: 10px;
`;
