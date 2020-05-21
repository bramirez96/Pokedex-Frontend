import styled from "styled-components";

export const StyledHeader = styled.header`
  font-family: "Ubuntu", sans-serif;
  height: 15vh;
  min-height: 100px;
  background-color: #0009;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  position: relative;
  top: 0;
  left: 0;
  span.button {
    position: absolute;
    top: 30%;
    height: 40%;
    padding: 10px 20px;
    background-color: ${(props) => props.accent};
    cursor: pointer;
    font-family: "Ubuntu", sans-serif;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    &.left {
      left: 3%;
    }
    &.right {
      right: 3%;
    }
  }
  .error {
    position: absolute;
    bottom: 2vh;
    right: 4%;
    color: white;
  }
  h1 {
    margin-bottom: 1vh;
  }
  input {
    font-family: "Ubuntu", sans-serif;
    padding: 10px;
  }
  input[name="submit"] {
    background-color: ${(props) => props.accent};
    color: white;
    cursor: pointer;
    &:hover {
      background-color: ;
    }
  }
`;
