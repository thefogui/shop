import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: background-color .2s ease-out, box-shadow .2s ease-out;

    .description {
        position: absolute;
        top: 25px;
        left: 25px;

        h1 {
            font-size: 1.4rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 600;
        }

        h2 {
            font-size: 1.2rem;
            font-weight: normal;
        }
    }

    .image-container {
        position: absolute;
        bottom: -12px;
        right: 0;
        width: 60%;
        height: 60%;

        img {
            width: 100%;
            height: 100%;
        }
    }

    @media(max-width: 1330px) {
        .image-container {
            position: absolute;
            right: 0;
            width: auto;

            img {
                width: 300px;
                height: 100%;
            }
        }
    }

    @media(min-width: 1331px) {
        &:hover {
            .image-container {
                width: 50%;
                height: 50%;
                overflow: hidden;
            }
        }
    }
`;
