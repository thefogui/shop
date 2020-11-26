import styled from "styled-components";

import mountain from './../../static/img/mountain.jpg'


export const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    width: 40vw;
    height: 400px;

    box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
		0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
    border-radius: 5px;

    z-index: 2;

    .form-box {
        display: flex;
        align-items: center;
        background-color: var(--background-color);

        div {
            width: 100%;
            padding: 20px;
        }

        h2, h3 {
            text-align: center;
        }

        h2 {
            color: white;
            margin-bottom: 7px;
        }

        h3 {
            margin-bottom: 20px;
            font-size: 1.0rem;
        }

        h3, p, a, label {
            color: var(--font-gray);
        }

        form {
            display: grid;

            label{
                margin-bottom: 20px;
            }

            label {
                width: 100%;
                font-size: 0.7rem;

                input {
                    margin-top: 5px;
                    width: 100%;
                    padding: 10px 6px;
                    font-size: 0.9rem;

                    &:focus{
                        outline: none;
                    }
                }
            }

            button {
                width: 100%;
                padding: 10px 20px;
                font-size: 0.9rem;
                color: white;
                background-color: transparent;
                border: 2px solid white;
                margin-bottom: 5px;

                &:hover {
                    border: 2px solid var(--color-link);
                    background-color: var(--color-link);
                    color: white;
                    cursor: pointer;
                }
            }
        }

        p {
            font-size: 0.7rem;

        }

        a {
            color: var(--color-link);
            text-decoration: none;
            font-size: 0.7rem;

            &:hover {
                border-bottom: 1px solid var(--color-link);
            }
        }
    }

    .overlay {
        height: 100%;
        width: 100%;
        display: grid;
        place-items: center;
        position: relative;

        .path {
            display: grid;
            place-items: center;
            position: relative;

            .overlapping {
                position: relative;
                width: 100px;


                &::before, &::after {
                    content: "";
                    position: absolute;
                    background-color: transparent;
                    background-image: url(${ mountain });
                    width: 50%;
                    height: 50%;
                    z-index: 1;
                    background-size: 200%;
                    pointer-events: none;
                    user-select: none;
                }


                &::after{
                    bottom: 4px;
                    right: 0;
                    background-position: right bottom;
                }

                .border {
                    height: 100%;
                    width: 100%;
                    display: block;
                    top: 0;
                    position: absolute;
                    box-sizing: border-box;
                    border: 10px #F1A7F1 solid;
                    transform: rotate(45deg);
                }
            }

            img {
                width: 100px;
                height: 100px;
                box-shadow: 0 0 20px #bac3c3;
            }
        }
    }

    @media screen and (max-width: 1250px){
        display: flex;
        width: 400px;

        .form-box {
            width: 100%;
        }

        .overlay{
            display:none;
        }
    }



    @media screen and (max-width: 550px){
        display: flex;
        width: 90%;

        .form-box {
            width: 100%;
        }

        .overlay{
            display:none;
        }
    }

    @media (min-width: 551px) and (max-width: 768px) {
        width: 80%;

        .form-box {
            width: 100%;
        }
    }
`;