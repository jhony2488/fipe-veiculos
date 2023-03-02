
import React from 'react';
import {CardComponent} from '../../components/Card'
import { Wrap } from './styles';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Wrap>
      <div className='content'>
        <CardComponent/>
      </div>
    </Wrap>
  );
};

export default Home;
