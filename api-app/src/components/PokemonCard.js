import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { styles } from "../data";

import { popup, favorites } from "../store/actions/";
const { setPopup } = popup;
const { addFavorite, removeFavorite } = favorites;

const PokemonCard = (props) => {
  const { addFavorite, removeFavorite, pokemon } = props;
  const {
    name,
    id,
    height,
    weight,
    sprites,
    abilities,
    stats,
    types
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
    <StyledCard onClick={handleClick}>
      <div className="title">
        <img src={sprites.front_default} />
        <div>
          <h2>
            {id}. {name}
          </h2>
          <div>
            <button onClick={handleAdd}>+</button>
            <button disabled>Favorite</button>
            <button onClick={handleRemove}>-</button>
          </div>
        </div>
      </div>
      <div className="content">
        <h4>Height: {height}</h4>
        <h4>Weight: {weight}</h4>
        <h4>
          {types.length === 1
            ? `Type: ${types[0].type.name}`
            : `Types: ${types[0].type.name}, ${types[1].type.name}`}
        </h4>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background-color: #ffffff99;
  width: 29%;
  border-radius: 15px 0 0 0;
  overflow: hidden;
  margin: 0 1.5% 20px;
  border: 1px solid black;
  box-shadow: 0 0 10px 3px black;
  .title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    background-color: ${styles.red};
    padding: 12px;
    border-bottom: 2px solid black;
    img {
      background-color: #FFF9;
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
        margin-top: 1vh;
      }
      & > div {
        button {
          padding: 3px 7px;
          font-size: 1rem;
          &:hover:not(:disabled) {
            background-color: grey;
            cursor: pointer;
          }
          &:disabled {
            color: black;
          }
        }
      }
    }
  }
  .content {
    padding: 12px;
  }
`;

export default connect(null, { setPopup, addFavorite, removeFavorite })(
  PokemonCard
);
