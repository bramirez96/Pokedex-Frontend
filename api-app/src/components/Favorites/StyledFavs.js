import styled from "styled-components";

export const StyledFavs = styled.div`
    z-index: 25;
    font-family: "Ubuntu", sans-serif;
    width: 50%;
    position: absolute;
    top: 15vh;
    height: 85vh;
    left: -50%;
    transition: 1s left;
    transition-timing-function: ease-in-out;
    background-color: #0009;
    text-shadow: 0 0 10px black;

    overflow: scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        left: -100%;
        padding-top: 10px;
    }
    &.open {
        left: 0;
    }
    h2 {
        @media screen and (max-width: 500px) {
            text-align: center;
        }
        text-align: left;
        color: white;
        font-size: 2rem;
        padding: 20px 10%;
        text-decoration: underline;
        text-decoration-color: ${(props) => props.accent};
    }
    & > .container {
        padding: 0 10% 20px;
    }
`;
