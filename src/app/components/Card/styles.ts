import styled from 'styled-components'
import { Box, styled as MUIStyled } from '@mui/system'
import { PropsContainerTitle, PropsContainerButton, PropsContainerBox } from './types'

export const Container = styled.div`
width:100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const Wrapper = MUIStyled(Box)(({ isMobile }:PropsContainerBox ) => ({
  width: isMobile ? '90%' : '320px',
  backgroundColor: 'white',
  paddingTop: '32px',
  paddingBottom: '32px',
  paddingLeft: '24px',
  paddingRight: '24px',
  boxShadow: '-5px 20px 20px rgba(57, 57, 57, 0.07)',
  borderRadius: '16px',
}))

export const View = styled.div`
`

export const TouchableOpacity= styled.button`

`

export const ContainerTitle = styled.div<PropsContainerTitle>`
  display:flex;
  flex-direction: ${({ typeContainerTitle }) =>
    typeContainerTitle === 'horizontal' ? 'row' : 'column'};
  align-items: ${({ typeContainerTitle }) =>
    typeContainerTitle === 'horizontal' ? 'center' : 'flex-start'};
`

export const ContainerModalView = styled.div`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 28px;
`
export const ContainerButtons = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
`

export const ContainerButtonsVertical = styled.div`
margin-top: 48px;
`

export const ContainerButton = styled.div<PropsContainerButton>`
  display:flex;
  flex: ${({ typeContainerButton }) =>
    typeContainerButton === 'vertical' ? 'none' : '1'};
  margin-top: 16px;
`

export const ContainerButtonLeft = styled.div`
  display:flex;
  flex: 1;
  margin-top: 16px;
  margin-left: 4px;
`

export const ContainerButtonRight = styled.div`
  display:flex;
  flex: 1;
  margin-top: 16px;
  margin-right: 4px;
`

export const Title = styled.p<PropsContainerTitle>`
  font-family: 'Manrope';
  color: ${({ theme }) => theme?.palette?.grey['700'] || '#373942'};

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;

  letter-spacing: -0.1px;
  margin-left: ${({ typeContainerTitle }) =>
    typeContainerTitle === 'horizontal' ? '12px' : '0px'};
  margin-top: ${({ typeContainerTitle }) =>
    typeContainerTitle === 'horizontal' ? 'none' : '12px'};
`

export const Message = styled.p`
  font-family: 'Manrope';
  color: ${({ theme }) => theme?.palette?.grey['600'] || '#5C6170'};

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 22px;
  margin-bottom: 18px;
`
