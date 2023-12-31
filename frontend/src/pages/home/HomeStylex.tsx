import styled from "styled-components";

export const BtnsContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: space-evenly;
    justify-items: center;
    align-items: center;
    margin-top: 2rem;
`;

export const MovieCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin-block: 2rem 6rem;
    width: 100%;
    justify-content: space-evenly;
    justify-items: center;
    align-items: center;
`;