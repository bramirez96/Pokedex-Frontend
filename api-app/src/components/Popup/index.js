import React from "react";
import { connect } from "react-redux";
import { StyledPopup } from "./StyledPopup";

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

const mapStateToProps = (state) => {
  const { pokemon, isFetching } = state.popup;
  return {
    pokemon,
    isFetching,
  };
};

export default connect(mapStateToProps, {})(Popup);
