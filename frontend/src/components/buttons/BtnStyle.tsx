import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 100%;
    justify-items: center;
    align-items: center;
    margin-top: 5rem;
    gap: 0.3rem;

    img {
        width: 1.5rem;
        height: 1.5rem;
    }

    input {
        height: 2rem;
        width: 60%;
        border-radius: 4px;

        &::placeholder {
            font-size: 1rem;
            text-align: center;
        }
    }
`;

export const Button = styled.button`
    height: 2.5rem;
    line-height: 1.5rem;
    font-size: 1rem;
    padding: 0.5rem;
`;

