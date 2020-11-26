import styled from 'styled-components';


export const Container = styled.div`
    z-index: 20;

    header {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        position: fixed;
        background-color: var(--background-color);
        width: 100%;
        height: 70px;

        z-index: 10;
    }

    div {
        position: relative;

        h1 {
            font-size: 2rem;

            align-self: auto;

            a {
                color: white;
            }
        }
    }

    @media(min-width: 851px) {
        .ham-menu {
            display: none;
        }
    }

    @media(max-width: 850px) {
        display: grid;
        grid-template-columns: repeat(3, auto);

        .nav-menu {
            position: absolute;
            width: auto;
            height: 100vh;
            display: grid;
            place-items: center;
            transform-origin: 0% 0%;
            transform: translate(-100%, 0);
            transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);

            ul {
                height: 30%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }
        }

        .ham-menu {
            visibility: visible;
            display: flex;
            flex-direction: column;
            justify-content: center;

            input {
                position: absolute;
                left: 20px;
                display: block;
                width: 40px;
                height: 32px;
                cursor: pointer;

                opacity: 0;
                z-index: 12;

                -webkit-touch-callout: none;
            }

            span {
                display: block;
                width: 33px;
                height: 4px;
                margin-bottom: 5px;
                position: relative;
                left: 20px;
                background: #cdcdcd;
                border-radius: 3px;
                z-index: 11;
                transform-origin: 4px 0px;
                transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
                cursor: pointer;

                span:first-child {
                    transform-origin: 0% 0%;
                }

                &:nth-last-child(2) {
                    transform-origin: 0% 100%;
                }
            }

            input:checked ~ span {
                opacity: 1;
                transform: rotate(45deg) translate(-4px, -16px);
                background: #232323;
            }

            input:checked ~ span:nth-last-child(3) {
                opacity: 0;
                transform: rotate(0deg) scale(0.2, 0.2);
            }

            input:checked ~ span:nth-last-child(2) {
                transform: rotate(-45deg) translate(-4px, 16px);
            }

            input:checked ~ header .nav-menu {
                transform: none;
            }
        }
    }
`;

export const Search = styled.div`
    position: relative;
    display: flex;
    width: auto;
    align-items: center;
    height: 70px;

    input[type="text"] {
        border: 0;
        width: 35vw;
        height: 70%;
        padding: 10px 15px;
        background: white;
        border-radius: 3px;
        box-shadow: 0px 8px 15px rgba(#4B4848, 0.1);
        font-size: 1.0rem;
        transition: all 0.4s ease;

        &:focus {
            outline: none;
            box-shadow: 0px 9px 20px rgba(#4B4848, 0.3);

            + .icons-container {
                .icon-close {
                    opacity: 1;
                    transform: translateX(0);
                }

                .icon-search {
                    opacity: 0;
                    transform: translateX(200%);
                }
            }
        }
    }

    .icons-container {
        position: absolute;
        top: 20px;
        right: 10px;
        width: 35px;
        height: 35px;

        overflow: hidden;
    }

    .icon-search {
        position: relative;
        top: 5px;
        left: 8px;
        width: 50%;
        height: 50%;
        opacity: 1;
        border-radius: 50%;
        border: 3px solid var(--color-link);
        transition: opacity 0.25s ease, transform 0.43s cubic-bezier(0.694,  0.048, 0.335, 1.000);

        &::after{
            content: "";
            position: absolute;
            bottom: -9px;
            right: -2px;
            width: 4px;
            border-radius: 3px;
            -webkit-transform: rotate(-45deg);
                    transform: rotate(-45deg);
            height: 10px;
            background-color: var(--color-link);
        }
    }

    .icon-close {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 75%;
        height: 75%;
        opacity: 0;
        cursor: pointer;
        transform: translateX(-200%);
        border-radius: 50%;
        transition: opacity 0.25s ease, transform 0.43s cubic-bezier(0.694,  0.048, 0.335, 1.000);

        &::before {
            content: "";
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            border: 2px solid transparent;
            border-top-color: var(--color-link);
            border-left-color: var(--color-link);
            border-bottom-color: var(--color-link);
            transition: opacity 0.2s ease;
        }

        .x-up {
            position: relative;
            width: 100%;
            height: 50%;

            &::before {
                content: "";
                position: absolute;
                bottom: 2px;
                left: 3px;
                width: 50%;
                height: 2px;
                background-color: var(--color-link);
                transform: rotate(45deg);
            }

            &::after {
                content: "";
                position: absolute;
                bottom: 2px;
                right: 0px;
                width: 50%;
                height: 2px;
                background-color: var(--color-link);
                transform: rotate(-45deg);
            }
        }

        .x-down {
            position: relative;
            width: 100%;
            height: 50%;

            &::before {
                content: "";
                position: absolute;
                top: 5px;
                left: 4px;
                width: 50%;
                height: 2px;
                background-color: var(--color-link);
                transform: rotate(-45deg);
            }

            &::after {
                content: "";
                position: absolute;
                top: 5px;
                right: 1px;
                width: 50%;
                height: 2px;
                background-color: var(--color-link);
                transform: rotate(45deg);
            }
        }
    }
`;

export const Navbar = styled.div`
    height: 70px;

    ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        list-style: none;
        width: 100%;
        height: 100%;
    }

    ul li {
        display: grid;
        place-items: center;
        height: 100%;
        padding: 0 20px;

        .user-toggle {
            height: 100%;
            color: white;
            display: grid;
            place-items: center;

            .user-toggle-button {
                display: flex;
                height: 100%;
                place-items: center;
                justify-content: space-between;

                .user-image {
                    width: 40px;
                    height: 40px;
                    background-image: url("https://images.unsplash.com/photo-1594025889028-281de148329e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center center;
                    border-radius: 50%;
                }

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }


    ul li a {
        width: 100%;
        text-decoration: none;
        font-size: 1.0rem;
        transition: top .3s ease-out;
        -webkit-transition: top .3s ease-out;
        color: gray;
        border-bottom: 1px solid transparent;

        &:hover {
            color: var(--color-link);
            border-bottom: 1px solid var(--color-link);
            cursor: pointer;
        }

        svg {
            width: 100%;
        }

        .count {
            position: absolute;
            top: -10px;
            display: grid;
            place-items: center;
            left: 5px;
            background-color: var(--color-link);
            height: 22px;
            width: 22px;
            line-height: 22px;
            margin-left: 8px;
            font-size: 12px;
            border-radius: 50%;
            color: white;
        }
    }
`;
