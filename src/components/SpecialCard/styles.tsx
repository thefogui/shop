import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 350px;
  height: 700px;
  border-radius: 10px;
  background-color: #F3F3F3;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);

  margin-top: 8vh;

  .title{
      display: flex;
      justify-content: space-between;
      padding: 30px 20px;

      .brand {
          font-size: 1.2rem;
          font-weight: bold;
      }

      .icon svg {
          font-size: 1.2rem;
      }
  }

  .body {
        .image-container {
            display: flex;
            justify-content: center;
            position: relative;

            .circle {
                width: 320px;
                position: absolute;
                height: 320px;
                background-color: white;
                border-radius: 50%;
                z-index: 1;
            }

            .image img {
                position: relative;
                width: 320px;
                z-index: 4;
            }
        }

        .description {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1 {
                text-align: center;
                margin: 20px 0px;
                margin-top: 50px;
            }

            .text {
                align-self: center;
                text-align: center;
                width: 80%;
                font-size: 0.8rem;
                color: var(--font-gray);
            }
        }
    }

    .footer {
        position: absolute;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        bottom: 20px;
        padding: 0 20px;

        .action-buttons {
            align-self: center;
            width: 8px;
            height: 8px;

            background: black;
            border-radius: 50%;

            box-shadow:
                15px 0 0 gray,
                30px 0 0 gray;
        }

        .text {
            align-self: center;
            text-transform: uppercase;
            font-size: 0.6rem;
            font-weight: 900;
            letter-spacing: 2px;
        }

        .icon {
            display: flex;
            justify-content: flex-end;
        }

        .icon svg {
            font-size: 1.4rem;
            align-self: center;
            padding: 0;
            margin: 0;
        }
    }
`;
