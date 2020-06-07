import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyledCard } from "./StyledPokemonCard";
import { Type } from "../Type";
import { getHeight, getWeight } from "../../utils";

import { popup, favorites, pokemon as xyzz } from "../../store/actions";
const { setPopup } = popup;
const { addFavorite, removeFavorite } = favorites;

const PokemonCard = (props) => {
  const {
    index,
    addFavorite,
    removeFavorite,
    accent,
    pokemon,
    favorites,
    getInfo,
  } = props;
  const {
    url,
    name,
    id,
    height,
    weight,
    sprites,
    abilities,
    stats,
    types,
  } = pokemon;
  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addFavorite(pokemon);
  };
  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    removeFavorite(pokemon);
  };
  useEffect(() => {
    // Pull new info and store it in state
    if (url && !id) {
      getInfo(url);
    }
  }, []);
  return pokemon.id ? (
    <StyledCard accent={accent}>
      {/* <span className="ui pop">POP</span> */}
      <div className="title">
        <img src={sprites.front_default} alt="" />
        <div>
          <h2>
            {id}. {name}
          </h2>
          <div>
            <button onClick={handleAdd} title="Add as Favorite">
              +
            </button>
            <button onClick={handleRemove} title="Remove Favorite">
              -
            </button>
          </div>
        </div>
      </div>
      <div className="content">
        <h4>
          <b>Height:&nbsp;</b>
          {getHeight(height)}
        </h4>
        <h4>
          <b>Weight:&nbsp;</b>
          {getWeight(weight)}
        </h4>
        <h4>
          {types.length === 1 ? (
            <>
              <Type type={types[0].type.name}>{types[0].type.name}</Type>
            </>
          ) : (
            <>
              <Type type={types[0].type.name}>{types[0].type.name}</Type>{" "}
              <Type type={types[1].type.name}>{types[1].type.name}</Type>
            </>
          )}
        </h4>
      </div>
    </StyledCard>
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => {
  const { accent } = state.settings;
  const { favorites } = state.favorites;
  return { accent };
};

export default connect(mapStateToProps, {
  setPopup,
  addFavorite,
  removeFavorite,
  getInfo: xyzz.getInfo,
})(PokemonCard);
