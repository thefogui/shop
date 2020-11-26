import styled from "styled-components";


export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 70px;

    display: grid;
    place-items: center;

    font-family: 'Cedarville Cursive', cursive;

    z-index: 2;

    h1 {
        font-size: 3.5rem;
    }

    h1 a {
        text-decoration: none;
        color: black;
        transition-property: color;
        transition-duration: 1s;
        transition-timing-function: linear;
        transition-delay: 0.1s;

        &:hover {
            color: var(--color-link);
        }
    }
`;
