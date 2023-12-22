import styled from "styled-components";

export const MovieContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin-top: 1rem;
    gap: 0.3rem;
    position: relative;
    width: 10rem;
    height: 12rem;

    img {
        width: 10rem;
        height: 12rem;
    }

    p {
        height: 2rem;
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 25%;
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 2rem;
        padding-inline: .3rem;
    }
`;