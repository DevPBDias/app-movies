import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: space-evenly;
    justify-items: center;
    align-items: center;
    background-color: blanchedalmond;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    img {
        width: 50px;
        height: 50px;
    }
`;
