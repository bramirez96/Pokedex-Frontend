import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { styles } from "../../data";

import { settings } from "../../store/actions";
const { setBG, setAccent } = settings;

const Settings = (props) => {
  const { setOpen, setBG, setAccent, accent } = props;

  return (
    <StyledSettings
      accent={accent}
      className={`header${setOpen ? " open" : ""}`}
    >
      <h2>SETTINGS</h2>
      <div>
        <h3>Set Background</h3>
        {styles.bg.map((bg) => {
          return (
            <Button
              color={accent}
              onClick={() => {
                setBG(bg.url);
              }}
            >
              {bg.name}
            </Button>
          );
        })}
      </div>
      <div>
        <h3>Set Accent</h3>
        {styles.colors.map((color) => {
          return (
            <Button
              color={color.hex}
              onClick={() => {
                setAccent(color.hex);
              }}
            >
              {color.name}
            </Button>
          );
        })}
      </div>
    </StyledSettings>
  );
};

const StyledSettings = styled.div`
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
const Button = styled.button`
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
`;

const mapStateToProps = (state) => {
  const { setOpen, accent } = state.settings;
  return { setOpen, accent };
};

export default connect(mapStateToProps, { setAccent, setBG })(Settings);
