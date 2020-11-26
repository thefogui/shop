import styled from 'styled-components';

export const Container = styled.div`
  width: 25%;
  height: 100vh;
  padding-top: 10vh;
  display: flex;
  justify-content: center;
  position: fixed;

  .filter-controls {
      width: 80%;
      height: auto;

      .filter {
        padding: 10px;
        padding-left: 20px;
        border-bottom: 1px solid #ebebeb;

        .title {
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;

            h1 {
                text-transform: uppercase;
                font-size: 0.8rem;
            }

            svg {
                transition-duration: 0.5s;
            }
        }

        .content {
            display: none;

            ul {
                list-style: none;
                padding-top: 20px;
                padding-left: 20px;

                li {
                    padding-bottom: 5px;
                }
            }
        }

        &:hover {
          cursor: pointer;
        }

        &.active {
            .title {
                svg {
                    transform: rotate(90deg);
                    transition-duration: 0.5s;
                }
            }

            .content {
                display: block;
            }
        }
      }
  }
`;
