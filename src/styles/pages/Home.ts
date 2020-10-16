import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Aside = styled.aside`
  height: 1400px;
  width: 320px;
  margin: 40px 0 40px 36px;
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
`;

export const Content = styled.div`
  min-height: 1400px;
  margin: 40px 36px 40px 0;
  max-width: 700px;
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

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 40px 0 16px;
    font-size: 24px;
  }

  p {
    line-height: 24px;
    margin-top: 16px;
  }

  li {
    display: flex;
    align-items: center;
    list-style: none;

    img {
      width: 40px;
      margin-right: 8px;
    }
  }

  .formation {
    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      strong {
        margin-bottom: 4px;
      }

      span {
        margin-bottom: 24px;
      }
    }
  }
`;

export const Experiences = styled.div`
  margin-top: 16px;

  display: flex;
  flex-direction: column;

  li {
    margin-top: 16px;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #7519c1;

    cursor: pointer;
  }

  p {
    margin-top: 8px;
  }
`;
