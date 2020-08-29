import styled from "styled-components";

const StyledControls = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin: 0 10% 20px;
    background-color: #0009;
    padding: 10px 20px;
    border-radius: 100px;
    button {
        font-family: "Ubuntu", sans-serif;
        color: white;
        background: none;
        font-size: 1rem;
        cursor: pointer;
    }
    form {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        input {
            font-family: "Ubuntu", sans-serif;
            color: white;
            background: none;
            font-size: 1rem;
            width: 2rem;
            text-align: center;
            border-bottom: 1px solid white;
        }
        span {
            font-family: "Ubuntu", sans-serif;
            color: white;
            background: none;
            font-size: 1rem;
        }
    }
`;

export default StyledControls;
