import React from "react";
import { connect } from "react-redux";
import { StyledCard } from "./StyledFavoriteCard";

import { favorites, pokemonList } from "../../store/actions";
const { removeFavorite } = favorites;
const { setUrl } = pokemonList;

const FavoriteCard = (props) => {
  const { favorite, removeFavorite, accent, setUrl } = props;
  const { name, sprites } = favorite;
  return (
    <StyledCard accent={accent}>
      <span
        className="close"
        onClick={() => {
          removeFavorite(favorite);
        }}
      >
        &times;
      </span>
      <img src={sprites.front_default} alt="" />
      <div>
        <h3>{name}</h3>
        <div className="buttons">
          <button
            onClick={() => {
              setUrl(name);
            }}
          >
            Open
          </button>
        </div>
      </div>
    </StyledCard>
  );
};

const mapStateToProps = (state) => {
  const { accent } = state.settings;
  return {
    ...state,
    accent,
  };
};

export default connect(mapStateToProps, { setUrl, removeFavorite })(
  FavoriteCard
);
