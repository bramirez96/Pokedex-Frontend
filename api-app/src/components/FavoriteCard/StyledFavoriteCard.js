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
  position: relative;
  .close {
    position: absolute;
    top: 0;
    right: 6px;
    font-size: 1.3rem;
    text-shadow: none;
    cursor: pointer;
    &:hover {
      text-shadow: 0 0 10px black;
    }
  }
  img {
    max-height: 70px;
    margin-right: 10px;
  }
  div {
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      text-transform: capitalize;
      margin: 7px 0 3px;
    }
    .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      button {
        margin-right: 5px;
        width: 50%;
        text-align: center;
        font-family: "Ubuntu", sans-serif;
        color: ${(props) => props.accent};
        font-weight: 500;
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          background-color: #aaa;
        }
      }
    }
  }
`;
