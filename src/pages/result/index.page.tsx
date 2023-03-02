
import React from 'react';
import {CardResult} from '../../components/CardResult';
import { Wrap } from './styles';

// import { Container } from './styles';

const Result: React.FC = () => {

  return (
    <Wrap>
      <div className='content'>
        <CardResult/>
      </div>
    </Wrap>
  );
};

export default Result;
