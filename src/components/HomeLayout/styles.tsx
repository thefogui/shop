import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding-top: 7vh;
    grid-template-areas:
      "one one two two"
      "one one three four";

    .item1 {
      grid-area: one;
    }

    .item2 {
      grid-area: two;
    }

    .item3 {
      grid-area: three;
    }

    .item4 {
      grid-area: four;
    }

    @media(max-width: 1330px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: auto;
      overflow-y: hidden;

      .box {
        width: 100%;
        height: 50vh;
      }
    }
`;
