import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { settings } from "../store/actions";
const { setBG, setAccent } = settings;

const Settings = (props) => {
  const { setOpen, setBG, setAccent } = props;

  return (
    <StyledSettings className={`header${setOpen ? " open" : ""}`}>
      <h1>SETTINGS</h1>
      <div>
        <button
          onClick={() => {
            setBG("water");
          }}
        >
          Water
        </button>
        <button
          onClick={() => {
            setBG("grass");
          }}
        >
          Grass
        </button>
        <button
          onClick={() => {
            setBG("fire");
          }}
        >
          Fire
        </button>
        <button
          onClick={() => {
            setBG();
          }}
        >
          Black
        </button>
      </div>
      <div>
        <h3>Set Accent</h3>
        <button
          onClick={() => {
            setAccent("red");
          }}
        >
          Red
        </button>
        <button
          onClick={() => {
            setAccent("blue");
          }}
        >
          Blue
        </button>
        <button
          onClick={() => {
            setAccent("yellow");
          }}
        >
          Yellow
        </button>
        <button
          onClick={() => {
            setAccent("black");
          }}
        >
          Black
        </button>
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
  left: -22%;
  transition: 1s left;
  transition-timing-function: ease-in-out;
  background-color: #0006;
  color: white;
  &.open {
    left: 0;
  }
`;

const mapStateToProps = (state) => {
  const { setOpen } = state.settings;
  return { setOpen };
};

export default connect(mapStateToProps, { setAccent, setBG })(Settings);
