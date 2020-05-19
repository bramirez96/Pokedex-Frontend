import styled from "styled-components";

export const StyledFavs = styled.div`
  font-family: "Ubuntu", sans-serif;
  width: 22%;
  position: absolute;
  top: 0;
  height: 100%;
  left: -22%;
  transition: 1s left;
  transition-timing-function: ease-in-out;
  background-color: #0006;
  text-shadow: 0 0 10px black;

  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  &.open {
    left: 0;
  }
  h2 {
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
