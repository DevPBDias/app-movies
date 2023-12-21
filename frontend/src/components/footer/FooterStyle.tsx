import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    height: 5rem;
    justify-content: space-evenly;
    justify-items: center;
    align-items: center;
    background-color: blanchedalmond;
    position: fixed;
    bottom: 0;
    right: 0;

    a {
        display: flex;
        flex-flow: column nowrap;
        justify-items: center;
        align-items: center;
    }

    img {
        width: 32px;
        height: 32px;
    }

    p {
        color: black;
    }
`;
