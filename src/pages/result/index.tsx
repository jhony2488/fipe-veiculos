'use client';
import React from 'react';
import { Grid } from '@mui/material';
import {CardComponent} from '../../components/Card'
import { Wrap } from './styles';

// import { Container } from './styles';

const Result: React.FC = () => {

  return (
    <Wrap>
      <div className='content'>
        <CardComponent/>
      </div>
    </Wrap>
  );
};

export default Result;
