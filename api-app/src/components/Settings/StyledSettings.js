import styled from "styled-components";

export const StyledSettings = styled.div`
  font-family: "Ubuntu", sans-serif;
  width: 22%;
  position: absolute;
  top: 0;
  height: 100%;
  right: -22%;
  transition: 1s right;
  transition-timing-function: ease-in-out;
  background-color: #0006;
  color: white;
  text-shadow: 0 0 10px black;
  &.open {
    right: 0;
  }
  h2 {
    text-align: right;
    font-size: 2rem;
    padding: 20px 10%;
    text-decoration: underline;
    text-decoration-color: ${(props) => props.accent};
  }
  & > div {
    padding: 0 10% 20px;
    text-align: right;
    h3 {
      margin-bottom: 2vh;
      text-decoration: underline;
      text-decoration-color: ${(props) => props.accent};
    }
    button {
      font-size: 1rem;
      font-family: "Ubuntu", sans-serif;
      cursor: pointer;
      color: white;
      padding: 6px 9px;
      box-shadow: 0 0 10px 1px black;
      margin: 5px;
      border: 1px solid black;
      text-transform: capitalize;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
`;
