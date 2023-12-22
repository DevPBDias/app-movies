import styled from "styled-components";

export const BtnBox = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: space-evenly;
    justify-items: center;
    align-items: center;
    margin-top: 4rem;
`;

export const FavoritesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin-block: 2rem 6rem;
    width: 100%;
    justify-content: space-evenly;
    justify-items: center;
    align-items: center;
    margin-bottom: 6rem;
`;