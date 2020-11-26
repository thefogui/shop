import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    place-items: center;
    justify-content: center;
    perspective: 1000px;

    .card-3D-effect-container {
        width: 40rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .card-3D-effect {
            transform-style: preserve-3d;
            min-height: 80vh;
            width: 35rem;
            border-radius: 30px;
            padding: 0rem 5rem;
            box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
            transform: rotateY(0deg);
            transition: none;

            .sneaker {
                min-height: 35vh;
                display: flex;
                justify-content: center;
                align-items: center;

                .circle {
                    position: absolute;
                    width: 15rem;
                    height: 15rem;
                    background-color: #f2cf07;
                    background-image: linear-gradient(315deg, #f2cf07 0%, #55d284 74%);
                    border-radius: 50%;

                    z-index: 1;
                }

                img {
                    width: 20rem;
                    z-index: 2;
                    transition: all 0.75s ease-out;
                }
            }

            .info {
                h1 {
                    font-size: 3rem;
                    transition: all 0.75s ease-out;
                }

                h3 {
                    font-size: 1.3rem;
                    padding: 2rem 0rem;
                    color: #585858;
                    font-weight: lighter;
                    transition: all 0.75s ease-out;
                }
            }

            .sizes {
                display: flex;
                justify-content: space-between;
                transition: all 0.75s ease-out;

                button {
                    padding: 0.5rem 1rem;
                    background: none;
                    border: none;
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
                    font-weight: bold;
                    color: #585858;
                    cursor: pointer;
                    border-radius: 0;

                    &:hover {

                    }
                }

                button.unavaliable {
                    background-color: #585858;
                    color: white;
                    cursor: not-allowed;
                }

                button.active {

                    background-color: #55d284;
                    color: white;
                }

            }

            .purchase {
                padding-top: 2rem;

                button {
                    width: 100%;
                    padding: 1rem 0rem;
                    border: none;
                    color: white;
                    cursor: pointer;
                    font-weight: bolder;
                    background: #55d284;
                    transition: all 0.75s ease-out;
                }
            }
        }
    }

`;
