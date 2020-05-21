import React from "react";
import { connect } from "react-redux";
import { StyledCard } from "./StyledPokemonCard";
import { Type } from "../Type";
import { getHeight, getWeight } from "../../utils";

import { popup, favorites, pokemonList } from "../../store/actions";
const { setPopup } = popup;
const { addFavorite, removeFavorite } = favorites;
const { removePokemon } = pokemonList;

const PokemonCard = (props) => {
  const {
    addFavorite,
    removeFavorite,
    accent,
    pokemon,
    favorites,
    removePokemon,
    index,
  } = props;
  const {
    name,
    id,
    height,
    weight,
    sprites,
    abilities,
    stats,
    types,
  } = pokemon;
  const handleClick = (e) => {
    e.preventDefault();
    props.setPopup(props.pokemon);
  };
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
  return (
    <StyledCard accent={accent}>
      <span
        className="ui close"
        onClick={() => {
          removePokemon(index);
        }}
      >
        &times;
      </span>
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
  removePokemon,
})(PokemonCard);
