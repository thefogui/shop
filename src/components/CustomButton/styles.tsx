import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    padding: 10px 20px;
    font-size: 0.9rem;
    color: white;
    background-color: transparent;
    border: 2px solid white;
    margin-bottom: 5px;

    &:hover, &:active {
        border: 2px solid var(--color-link);
        background-color: var(--color-link);
        color: white;
        cursor: pointer;
    }
`;
