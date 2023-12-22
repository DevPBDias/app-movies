import styled from "styled-components";

export const ProfileContainer = styled.section`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: space-evenly;
    justify-items: center;
    align-items: center;
    margin-top: 6rem;

    img {
        width: 12rem;
        height: 12rem;
    }

    p {
        margin: .5rem auto;
        padding-block: .2rem;
        text-align: center;
    }
`;

export const ButtonsContainer = styled.section`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    justify-content: space-evenly;
    justify-items: center;
    align-items: center;
    gap: 4rem;
    margin-top: 3rem;
`;