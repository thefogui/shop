import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #ebebeb;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;

  .body {
    width: 100%;
    height: 80%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .footer{
    position: relative;
    height: 100%;
    padding: 10px;

    h1 {
      font-size: 1.0rem;
      padding-bottom: 10px;
    }

    p {
      font-size: 0.8rem;
      color: var(--font-gray);
    }

    span {
      position: absolute;
      right: 10px;
      top: 90px;
      font-size: 1.2rem;
    }
  }
`;

