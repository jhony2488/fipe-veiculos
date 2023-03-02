import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  height: 200px;
  display: grid;
  justify-items: center;
  align-items: center;
  text-align: center;
  background: blue;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  @media (max-width: 600px) {
    width: 90%;
    height: 100%;
  }
  .value {
    background: green;
    padding: 10px;
    border-radius: 100px;
    width: 40%;
  }
`;
