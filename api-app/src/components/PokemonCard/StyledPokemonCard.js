import styled from "styled-components";

export const StyledCard = styled.div`
    background-color: #ffffff99;
    width: 29%;
    border-radius: 15px;
    overflow: hidden;
    margin: 0 3% 20px 0;
    border: 1px solid black;
    box-shadow: 0 0 10px 3px black;
    font-family: "Ubuntu", sans-serif;
    position: relative;
    .ui {
        &.close {
            right: 9px;
        }
        &.pop {
            right: 30px;
            font-size: 18px;
            line-height: 26px;
        }
        position: absolute;
        top: 5px;
        font-size: 1.5rem;
        font-family: "Ubuntu", sans-serif;
        cursor: pointer;
        color: white;
        &:hover {
            text-shadow: 0 0 10px black;
        }
    }
    .title {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        background-color: ${(props) => props.accent};
        padding: 12px;
        border-bottom: 1px solid black;
        & > img,
        & > .sprite {
            background-color: #fff;
            margin-right: 6%;
            box-shadow: 0 0 5px 1px #000;
            border: 1px solid black;
            border-radius: 10px 0 0 0;
            max-height: 96px;
            @media screen and (max-width: 1000px) {
                max-height: 70px;
            }
            @media screen and (max-width: 800px) {
                max-height: 50px;
            }
            @media screen and (max-width: 650px) {
                max-height: 40px;
            }
        }
        & > div {
            display: flex;
            flex-flow: column-reverse nowrap;
            justify-content: flex-start;
            h2 {
                text-transform: capitalize;
                color: white;
                font-size: 1.4em;
                @media screen and (max-width: 1000px) {
                    font-size: 1.2em;
                }
                @media screen and (max-width: 800px) {
                    font-size: 1em;
                }
                @media screen and (max-width: 650px) {
                    font-size: 0.8em;
                }
            }
            & > div {
                button {
                    color: white;
                    font-family: "Ubuntu", sans-serif;
                    font-size: 1em;
                    background: none;
                    margin-right: 10px;
                    font-weight: 900;
                    width: 20px;
                    &:hover {
                        cursor: pointer;
                        text-shadow: 0 0 10px black;
                    }
                }
            }
        }
    }
    .content {
        padding: 12px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        h4 {
            font-size: 1em;
            font-weight: 400;
            margin-bottom: 1vh;
        }
    }
`;
