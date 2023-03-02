import React from 'react';
import Image from 'next/image'
import { Container } from './styles';
import { Button } from '@mui/material';
import imagePage404 from '../../assets/imgs/404.svg';

const Page404: React.FC = () => {
  return (
    <Container>
      <div className='container-image'>
        <Image src={imagePage404} alt='' />
      </div>
      <div className='container-return-login-or-home'>
        <div className='container-return-login-or-home-content'>
          <h1>Não encontramos a página que você pesquisou, mas você pode voltar ao início</h1>
          <Button variant='contained' onClick={() => (window.location.href = '/')}>
            Voltar para o início
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Page404;
