import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;

    .slide {
        height: 100%;
        width: 100%;
        font-family: 'Cosi';
        src: url("https://assets.codepen.io/3453673/CosiTimes-Light.woff") format("woff");
        font-weight: 200;
        font-style: normal;
        font-display: swap;

        img {
            visibility: visible;
        }
    }

    .content {
        width: 100%;
        height: 100%;
        padding: 5rem 4rem;
        position: relative;

        .season {
            font-weight: 200;
            font-size: 4rem;
            margin-top: 4%;
            text-transform: uppercase;
            display: -webkit-box;
            display: flex;
            -webkit-box-pack: center;
                    justify-content: center;
            position: relative;
            z-index: 5;

            span {
                opacity: 0;
                transition-duration: 0.5s;
            }

            span:nth-child(1) {
                -webkit-transform: translate(-300%, -3rem);
                        transform: translate(-300%, -3rem);
            }

            span:nth-child(2) {
                -webkit-transform: translate(-200%, -3rem);
                transform: translate(-200%, -3rem);
            }

            span:nth-child(3) {
                -webkit-transform: translate(-100%, -3rem);
                        transform: translate(-100%, -3rem);
            }

            span:nth-child(4) {
                -webkit-transform: translate(100%, -3rem);
                    transform: translate(100%, -3rem);
            }

            span:nth-child(5) {
                -webkit-transform: translate(200%, -3rem);
                    transform: translate(200%, -3rem);
            }

            span:nth-child(6) {
                -webkit-transform: translate(300%, -3rem);
                    transform: translate(300%, -3rem);
            }
        }
    }

    .more {
        -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
        -webkit-transform: rotate(-90deg);
                transform: rotate(-90deg);
        -webkit-transform-origin: 0 100%;
                transform-origin: 0 100%;
        position: absolute;
        top: 50%;
        left: 10%;
        text-transform: uppercase;
        transition-duration: 0.5s;
    }

    .more + .more {
        -webkit-transform: rotate(90deg);
                transform: rotate(90deg);
        -webkit-transform-origin: 100% 100%;
                transform-origin: 100% 100%;
        right: 10%;
        left: auto;
        transition-duration: 0.5s;
    }

    img {
        width: 100%;
        vertical-align: middle;
        -o-object-fit: cover;
            object-fit: cover;
        position: absolute;
        -webkit-clip-path: inset(0%);
                clip-path: inset(0%);
        top: 0;
        left: 0;
        border: 0px solid white;
        transition-duration: 0.5s;
    }

    .number {
        font-weight: 200;
        position: absolute;
        bottom: 10%;
        right: 18%;
        font-size: 6rem;
        opacity: 0;
        -webkit-transform: translateY(5rem);
               transform: translateY(5rem);
        display: -webkit-box;
        display: flex;
        transition-duration: 1s;

        span {
            display: block;
            -webkit-transform: rotateY(180deg);
                    transform: rotateY(180deg);
            opacity: 0;
            transition-duration: 1s;
        }

        span + span {
            -webkit-transform: rotateY(180deg);
                    transform: rotateY(180deg);
            transition-duration: 1s;
        }
    }

    .slide:hover {
        cursor: pointer;

        .content {
            .season {
                visibility: visible;
                z-index: 6;

                span {
                    opacity: 1;
                    transition-duration: 0.5s;
                }

                span:nth-child(1) {
                    -webkit-transform: translate(-250%, -1rem);
                            transform: translate(-250%, -1rem);
                }

                span:nth-child(2) {
                    -webkit-transform: translate(-150%, -1rem);
                    transform: translate(-150%, -1rem);
                }

                span:nth-child(3) {
                    -webkit-transform: translate(-50%, -1rem);
                            transform: translate(-50%, -1rem);
                }

                span:nth-child(4) {
                    -webkit-transform: translate(50%, -1rem);
                        transform: translate(50%, -1rem);
                }

                span:nth-child(5) {
                    -webkit-transform: translate(150%, -1rem);
                        transform: translate(150%, -1rem);
                }

                span:nth-child(6) {
                    -webkit-transform: translate(250%, -1rem);
                        transform: translate(250%, -1rem);
                }
            }
        }

        img {
            width: 100%;
            height: 100%;
            z-index: 1;
            border: 6rem solid transparent;
            transition-duration: 0.5s;
        }

        .more {
            transition-duration: 0.5s;

            span {
                opacity: 1;
                transition-duration: 0.5s;
            }
        }

        .number {
            opacity: 1;
            -webkit-transform: translateY(-5rem);
                    transform: translateY(-5rem);
            transition-duration: 1s;
            z-index: 6;

            span {
                opacity: 1;
                -webkit-transform: rotateY(360deg);
                    transform: rotateY(360deg);
                color: white;
                transition-duration: 1s;
            }

            span + span {
                -webkit-transform: rotateY(-360deg);
                transform: rotateY(-360deg);
                transition-duration: 1s;
            }
        }
    }

    @media(max-width: 1330px) {
        .slide:hover {
            img {
                width: 100%;
                height: 100%;
                z-index: 1;
                border: 5rem solid transparent;
                transition-duration: 0.5s;

                border-left: 8rem solid transparent;
                border-right: 8rem solid transparent;
            }
        }
    }

    @media(max-width: 560px) {
        .slide:hover {
            img {
                width: 100%;
                height: 100%;
                z-index: 1;
                border: 5rem solid transparent;
                transition-duration: 0.5s;

                border-left: 6rem solid transparent;
                border-right: 6rem solid transparent;
            }
        }
    }
`;
