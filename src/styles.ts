import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
    gap: 1rem;
`;

export const Button = styled.button`
    color: #fff;
    background-color: #163665;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    outline: none;
    border-radius: 1.25rem;
    cursor: pointer;
`;
