import styled from 'styled-components';

export const Container = styled.div`
    width: 21vw;
    height: 600px;

    display: grid;
    place-items: center;
    padding: 20px;

    box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
		0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
    border-radius: 5px;

    background-color: var(--background-color);

    z-index: 3;

    h3, p, a, label, span {
        color: var(--font-gray);
    }

    form {

        h2 {
            margin-bottom: 20px;
            color: white;
        }

        label {
            width: 100%;
            font-size: 0.7rem;
            text-transform: uppercase;

            input {
                margin-top: 5px;
                width: 100%;
                padding: 10px 6px;
                font-size: 0.9rem;
                margin-bottom: 20px;

                &:focus{
                    outline: none;
                }
            }
        }

        .checkBoxSection {
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-size: 0.7rem;

            input[type=checkbox] {
                padding: 5px;

                &:checked {
                    background-color: var(--background-color);
                }
            }
        }

        button {
            margin-top: 20px;
        }
    }

    a {
        color: var(--color-link);
        text-decoration: none;
        font-size: 0.7rem;

        &:hover {
            border-bottom: 1px solid var(--color-link);
        }
    }

    .error {
        color: var(--font-error);
    }

    @media screen and (min-width: 1000px) and (max-width: 1366px) {
        display: flex;
        width: 400px;

        .form-box {
            width: 100%;
        }
    }

    @media screen and (max-width: 1000px){
        display: flex;
        width: 400px;

        .form-box {
            width: 100%;
        }
    }

    @media screen and (max-width: 550px){
        display: flex;
        width: 90%;

        .form-box {
            width: 100%;
        }
    }

    @media (min-width: 551px) and (max-width: 768px) {
        width: 80%;

        .form-box {
            width: 100%;
        }
    }

`;
