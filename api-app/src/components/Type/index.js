import styled from "styled-components";
import { styles } from "../../data";

export const Type = styled.span`
  background-color: ${(props) => styles.types[props.type]};
  font-family: "Patrick Hand", sans-serif;
  text-transform: uppercase;
  border-radius: 5px;
  color: white;
  text-shadow: 0 0 5px black;
  overflow: hidden;
  font-size: 85%;
  padding: 0 10px;
  border: 1px solid black;
`;
