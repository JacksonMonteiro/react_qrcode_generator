import { text } from "stream/consumers";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 2.5rem;
`;

export const Description = styled.p`
    font-size: 1.25rem;
`;

export const Input = styled.textarea.attrs((props) => ({
    rows: 35,
    value: props.value
}))`
    resize: vertical;
    font-size: 1rem;
    color: #000;
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
    font-size: 1rem;
    border-bottom: 2px solid #163635;
`;

