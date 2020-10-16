import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Aside = styled.aside`
  height: calc(100% - 100px);
  width: 320px;
  padding: 36px;
  background: #15b1fd;

  border-radius: 15px 0 0 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;

    h4 {
      font-weight: 700;
      margin-bottom: 16px;
    }

    span {
      margin-bottom: 8px;
    }
  }

  .adress {
    strong {
    }
  }
`;

export const Content = styled.div`
  height: calc(100% - 100px);
  padding: 36px;
  border-radius: 0 15px 15px 0;

  background: #c3c3c3;
`;

export const Title = styled.header`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 8px;
  }
`;
