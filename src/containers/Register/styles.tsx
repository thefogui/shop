import styled from 'styled-components';

import bg from './../../static/img/fashion.jpg'

export const Container = styled.div`
    display: grid;
    place-items: center;
    width: 100vw;
    height: 100vh;

    background: url(${ bg }) 0% 0% / cover;

    .a, .b {
        position: absolute;
        fill: white;
        z-index: 1;
    }

    .a {
        bottom: 0;
    }

    .b {
        top: 0;
    }
`;
