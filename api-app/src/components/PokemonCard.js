import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { styles } from "../data";

import { popup, favorites } from "../store/actions/";
const { setPopup } = popup;
const { addFavorite, removeFavorite } = favorites;

const PokemonCard = (props) => {
  const { addFavorite, removeFavorite, accent, pokemon } = props;
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
    <StyledCard accent={accent} onClick={handleClick}>
      <div className="title">
        <img src={sprites.front_default} />
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
          <span>Height:</span> {height}
        </h4>
        <h4>
          <span>Weight:</span> {weight}
        </h4>
        <h4>
          {types.length === 1 ? (
            <>
              <span>Type:</span> {types[0].type.name}
            </>
          ) : (
            <>
              <span>Types:</span> {types[0].type.name}, {types[1].type.name}
            </>
          )}
        </h4>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background-color: #ffffff99;
  width: 29%;
  border-radius: 15px;
  overflow: hidden;
  margin: 0 3% 20px 0;
  border: 1px solid black;
  box-shadow: 0 0 10px 3px black;
  font-family: "Ubuntu", sans-serif;
  .title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    background-color: ${(props) => props.accent};
    padding: 12px;
    border-bottom: 1px solid black;
    img {
      background-color: #fff;
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
        font-size: 2em;
      }
      & > div {
        button {
          color: white;
          font-family: "Ubuntu", sans-serif;
          font-size: 2em;
          background: none;
          margin-right: 10px;
          font-weight: 900;
          &:hover {
            cursor: pointer;
            text-shadow: 0 0 10px black;
          }
        }
      }
    }
  }
  .content {
    padding: 12px;
    h4 {
      font-size: 1.5em;
      font-weight: 400;
      span {
        font-weight: 900;
      }
    }
  }
`;
const mapStateToProps = (state) => {
  const { accent } = state.settings;
  return { accent };
};

export default connect(mapStateToProps, {
  setPopup,
  addFavorite,
  removeFavorite,
})(PokemonCard);
