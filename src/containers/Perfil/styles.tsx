import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #1f253d;

    .box {
        padding-top: 80px;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto auto auto;
        grid-template-areas:
            "a a a"
            "b c d"
            "b c e";
        gap: 20px;
    }

    .top-bar {
        grid-area: a;
        width: 100%;
        background-color: #394264;
        border-radius: 5px;
        overflow: hidden;

        ul {
            display: flex;
            list-style: none;

            li {
                padding: 20px 20px;
                display: flex;
                place-items: center;
                color: white;
                border-bottom: 2px solid transparent;

                svg {
                    color: var(--font-gray);
                }

                span {
                    padding-left: 10px;
                }

                &:hover {
                    cursor: pointer;
                    background: #50597b;
                    border-bottom: 2px solid var(--color-link);

                    svg {
                        color: white;
                    }
                }
            }
        }
    }

    .menu-box {
        grid-area: b;
        height: auto;
        background-color: #394264;
        border-radius: 5px;
        overflow: hidden;

        .head {
            display: flex;
            place-items: center;
            background-color: var(--color-link);
            height: 3.5rem;

            h1 {
                width: 100%;
                font-size: 1.3rem;
                text-align: center;
                color: white;
                text-transform: uppercase;
            }
        }

        .body {
            height: 100%;
        }

        ul {
            display: flex;
            flex-direction: column;
            height: 100%;

            li {
                width: 100%;
                height: 4rem;
                display: flex;
                place-items: center;
                color: white;
                border-top: 1px solid #1f253d;
                padding: 0 20px;

                svg {
                    color: var(--font-gray);
                }

                span {
                    padding-left: 10px;
                }

                &:hover {
                    cursor: pointer;
                    background: #50597b;

                    svg {
                        color: white;
                    }
                }
            }
        }
    }

    .profile {
        grid-area: c;
        height: auto;
        background-color: #394264;
        border-radius: 5px;
        display: grid;
        place-items: center;

        .big-ptofile-picture {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            border: 5px solid #50597b;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .profile-description {
            width: 210px;
            margin: 0 auto;
            text-align: center;
            color: var(--font-gray);
        }
    }

    .newsletter {
        grid-area: d;
        width: auto;
        background-color: #394264;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        justify-content: space-between;
        height: 100%;

        h1 {
            width: 100%;
            text-align: center;
            text-transform: uppercase;
            font-size: 1.2rem;
        }

        label {
            width: 100%;
            margin-bottom: 10px;
            display: flex;
            place-items: center;
            position: relative;
            font-size: 1.4rem;
            color: white;

            svg {
                position: absolute;
                left: 10px;
            }

            input {
                width: 100%;
                padding: 15px;
                padding-left: 40px;
                background: #50597b;
                color: white;
                border: 1px solid #394264;
                font-size: 1.1rem;

                &:active, &:focus {
                    outline: none
                }
            }
        }

        button {
            padding: 12px;
            width: 60%;
            margin-right: auto;
            margin-left: auto;
            font-size: 1.2rem;
            background: var(--color-link);
            color: white;
            border: 1px solid var(--color-link);

            &:hover {
                cursor: pointer;
                color: var(--color-link);
                background-color: transparent;
            }
        }
    }

    h1 {
        color: white;
        font-size: 1.5rem;
    }

    .socials {
        grid-area: e;
        display: grid;
        gap: 20px;
        height: 100%;

        .social {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            display: grid;
            grid-template-columns: 20% 80%;
            align-items: center;
            color: white;
            overflow: hidden;

            div {
                display: grid;
                place-items: center;
                height: 100%;

                svg {
                    font-size: 2rem;
                }
            }

            span {
                text-transform: uppercase;
                padding: 12px;
                font-weight: bold;
            }

            &:hover {
                cursor: pointer;
            }
        }

        .facebook {
            div {
                background-color: #1a4e95;
            }

            background-color: #3468af;

            &:hover {
                div {
                    background-color: #3468af;
                }

                background-color: #1a4e95;
            }
        }

        .twitter {
            div {
                background-color: #35aadc;
            }

            background-color: #4fc4f6;

            &:hover {
                div {
                    background-color: #4fc4f6;
                }

                background-color: #35aadc;
            }
        }
    }
`;
