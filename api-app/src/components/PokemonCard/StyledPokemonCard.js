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
  .close {
    position: absolute;
    right: 9px;
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
    img {
      background-color: #fff;
      margin-right: 6%;
      box-shadow: 0 0 5px 1px #000;
      border: 1px solid black;
      border-radius: 10px 0 0 0;
    }
    & > div {
      display: flex;
      flex-flow: column-reverse nowrap;
      justify-content: flex-start;
      h2 {
        text-transform: capitalize;
        color: white;
        font-size: 2em;
      }
      & > div {
        button {
          color: white;
          font-family: "Ubuntu", sans-serif;
          font-size: 2em;
          background: none;
          margin-right: 10px;
          font-weight: 900;
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
    h4 {
      font-size: 1.5em;
      font-weight: 400;
      span {
        font-weight: 900;
      }
    }
  }
`;
