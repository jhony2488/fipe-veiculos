import styled from 'styled-components';

export const Wrap = styled.div`

  background: ${({ theme }) => theme?.palette?.background?.default || '#F9F8F9'};
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  .content {
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 5px;
  }
`;
