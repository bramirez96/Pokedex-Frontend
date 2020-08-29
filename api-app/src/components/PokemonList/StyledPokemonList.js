import styled from "styled-components";

export const StyledList = styled.section`
    margin-bottom: 5vh;
    position: relative;
    .container {
        display: flex;
        align-content: flex-start;
        flex-flow: row wrap;
    }
    .loadMessage {
        font-family: "Ubuntu", sans-serif;
        font-size: 1rem;
        color: white;
        background: #0009;
        padding: 11px 20px;
        margin: 0 10%;
        border-radius: 100px;
        text-align: center;
        font-weight: 700;
    }
`;
