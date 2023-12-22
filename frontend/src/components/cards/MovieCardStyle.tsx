import styled from "styled-components";

export const MovieContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    gap: 0.3rem;
    position: relative;
    width: 10rem;
    height: 12rem;

    .banner {
        width: 100%;
        height: 100%;
    }

    p {
        height: 2rem;
        position: absolute;
        width: 100%;
        z-index: 1;
        bottom: 0;
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 2rem;
        text-align: center;
    }
`;

export const IconLike = styled.img`
        width: 20px;
        height: 20px;
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        display: ${(props) => (props.icon ? "none" : "")};
`