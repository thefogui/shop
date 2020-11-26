import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    place-items: center;

    .intro-info {
        width: 80%;
        display: grid;
        place-items: center;

        h1 {
            text-transform: uppercase;
            font-weight: bold;
            font-family: 'Cosi';
            src: url("https://assets.codepen.io/3453673/CosiTimes-Light.woff") format("woff");
            font-style: normal;
            font-display: swap;
            font-size: 4rem;
        }

        p {
            width: 40ch;
            margin-top: 30px;
            color: var(--font-gray);
            font-size: 1.2rem;
            text-align: center;
        }
    }
`;
