import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Popup = (props) => {
  const { name } = props.pokemon;
  const { front_default } = props.pokemon.sprites;
  const { isFetching } = props;
  return (
    <StyledPopup>
      <h5>
        {isFetching && "Loading data..."}
        {!isFetching && name}
      </h5>
      {!isFetching && <img src={front_default} alt="" />}
    </StyledPopup>
  );
};

const StyledPopup = styled.div``;

const mapStateToProps = (state) => {
  const { pokemon, isFetching } = state.popup;
  return {
    pokemon,
    isFetching
  };
};

export default connect(mapStateToProps, {})(Popup);
