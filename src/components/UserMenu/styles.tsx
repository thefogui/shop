import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    background: #f9f9f9;
    position: absolute!important;
    right: 20px;
    z-index: 100;
    color:  rgb(54,57,63);
    border: 1px solid var(--font-gray);


    &::after {
        content: " ";
        display: block;
        right: 0;
        height: 0;
        top:-10px;
        width: 0;
        position: absolute;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #f9f9f9;
    }

    .user-toggle-info {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        place-items: center;
        padding: 10px 0;
        border-bottom: 1px solid var(--font-gray);

        .user-toggle-image {
            width: 50px;
            height: 50px;
            background-image: url("https://images.unsplash.com/photo-1594025889028-281de148329e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            border-radius: 50%;
        }

        h3 {
            vertical-align: middle;
            margin: 0;
            font-weight: normal;
            line-height: normal;
            font-size: 15px;
            padding-left:20px;
        }

        button {
            width: 30%;
            border: 1px solid rgb(54,57,63);
            color: rgb(54,57,63);

            &:hover {
                color: white;
                border: 1px solid var(--color-link);
            }
        }
    }

    .user-toggle-actions{
        width: 100%;

        ul {
            width: 100%;

            li {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                padding: 10px 10px;

                button {
                    margin-left: 10px;
                    border: none;
                    background-color: transparent;

                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
`;
