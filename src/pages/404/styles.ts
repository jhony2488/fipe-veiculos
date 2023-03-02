import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-columns: 1fr 1fr;
.container-return-login-or-home , .container-image{
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
}

.container-image {
  background: #F9F8F9;
}
.container-return-login-or-home {
  background: #FFFFFF;
}
.container-return-login-or-home-content{
  width: 50%;
  display: grid;
  justify-items: center;
  h1{
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;

    text-align: center;
    letter-spacing: -0.15px;

    color: #373942;
    margin-bottom: 48px;
  }
  button{
    background: #E54D2E;
    border-radius: 8px;
    width: 100%;
    height: 56px;
    border:none;
    color: white;
  }
  button:hover{
    transform: scale(1.2);
    transition: 3s;
  }
}

@media (max-width: 1080px) {
  .container-return-login-or-home , .container-image{
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
  }
  grid-template-columns: 1fr;
  .container-image {
    background: #FFFFFF;
    img{
      width: 100%;
    }
  }

  .container-return-login-or-home-content{
    width: 80%;
    h1{
      margin-bottom: 32px;
    }
  }
}

@media (min-width: 480px) and (max-width: 1080px) {
  grid-template-columns: 1fr;
  .container-image {
    background: #FFFFFF;
    img{
      width: 50%;
    }
  }

  .container-return-login-or-home-content{
    width: 80%;
  }
}
`
