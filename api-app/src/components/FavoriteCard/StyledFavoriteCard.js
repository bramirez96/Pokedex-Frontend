import styled from "styled-components";

export const StyledCard = styled.div`
    padding: 13px 10px 13px 20px;
    border: 1px solid black;
    box-shadow: 0 0 5px black;
    background-color: ${(props) => props.accent};
    color: white;
    margin-bottom: 1.5vh;
    display: flex;
    flex-flow: row nowrap;
    img,
    .sprite {
        max-height: 70px;
        margin-right: 10px;
    }
    div {
        flex-grow: 1;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        h3 {
            font-size: 1.5rem;
            font-weight: 600;
            text-transform: capitalize;
            margin: 7px 0;
        }
        .buttons {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            button {
                padding: 5px;
                text-align: center;
                font-family: "Ubuntu", sans-serif;
                color: ${(props) => props.accent};
                font-weight: 500;
                text-transform: capitalize;
                background: none;
                cursor: pointer;
                img {
                    height: 20px;
                }
            }
        }
    }
`;
