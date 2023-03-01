import React from 'react'
import {CircularProgress, CircularProgressProps} from '@mui/material';
import { Container } from './styles'

const Loading=({...props}: CircularProgressProps)=> {
  return (
    <Container>
      <CircularProgress {...props} />
    </Container>
  )
}

export default Loading;
