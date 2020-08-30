import styled from "styled-components";

export const StyledPopup = styled.div`
    position: fixed;
    height: 85vh;
    width: 100%;
    top: 15vh;
    left: 0;
    z-index: 20;
    background: #0009;
    font-family: "Ubuntu", sans-serif;

    .window {
        position: absolute;
        left: 25%;
        top: 9vh;
        width: 50%;
        background: white;
        border-radius: 15px;
        border: 1px solid black;
        display: flex;
        flex-flow: column nowrap;
        @media screen and (max-width: 500px) {
            width: 95%;
            left: 2.5%;
            top: 2.5vh;
        }
        @media screen and (max-width: 900px) {
            width: 75%;
            left: 12.5%;
        }
        .title {
            position: relative;
            border-radius: 14px 14px 0 0;
            background-color: ${(props) => props.accent};
            padding: 15px;
            display: flex;
            flex-flow: row nowrap;
            color: white;
            .sprite {
                background-color: white;
                border-radius: 12px 0 0 0;
                border: 1px solid black;
                box-shadow: 0 0 10px black;
                -moz-box-shadow: 0 0 10px black;
                margin-right: 15px;
            }
            div {
                font-size: 1.25em;
                text-transform: capitalize;
                display: flex;
                flex-flow: column-reverse nowrap;
                &.grow {
                    flex-grow: 1;
                }
            }
            button {
                margin-left: 10px;
                background: none;
                cursor: pointer;
                img {
                    height: 20px;
                }
            }
            .close {
                position: absolute;
                color: white;
                top: 5px;
                right: 10px;
                background: none;
                font-size: 1.5em;
                &:hover {
                    text-shadow: 0 0 7px black;
                    cursor: pointer;
                }
            }
        }
        .mid {
            padding: 5px 15px;
            h3 {
                text-align: center;
                border-bottom: 1px solid black;
                margin: 0 20% 10px;
                padding: 0 20px 3px;
            }
            .ability {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                margin-bottom: 5px;
                .name {
                    text-transform: capitalize;
                    font-weight: 700;
                    text-decoration: underline;
                    min-width: 30%;
                    font-size: 1em;
                }
                .effect {
                    font-size: 0.85em;
                }
            }
        }
        .content {
            padding: 5px 15px 15px;
            flex-grow: 1;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            div {
                h4 {
                    border-bottom: 1px solid black;
                    margin-bottom: 5px;
                    text-align: center;
                    padding-bottom: 5px;
                }
                &.info {
                    width: 47.5%;
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: center;
                    align-items: center;
                    .types {
                        display: flex;
                        flex-flow: row nowrap;
                        justify-content: space-around;
                        margin-bottom: 10px;
                        span:first-of-type {
                            margin-right: 5px;
                        }
                    }
                    .height {
                        margin-bottom: 10px;
                    }
                }
                &.stats {
                    width: 47.5%;
                    .stat {
                        padding: 0 10%;
                        display: flex;
                        flex-flow: row nowrap;
                        justify-content: space-between;
                    }
                }
            }
        }
    }
`;
