import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { favorites, pokemonList } from "../store/actions";
const { removeFavorite } = favorites;
const { setUrl } = pokemonList;

const FavoriteCard = (props) => {
  const { favorite, removeFavorite, accent, setUrl } = props;
  const { name, sprites } = favorite;
  return (
    <StyledCard accent={accent}>
      <img src={sprites.front_default} alt="" />
      <div>
        <h3>{name}</h3>
        <div className="buttons">
          <button
            onClick={() => {
              removeFavorite(favorite);
            }}
          >
            Remove
          </button>
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

const StyledCard = styled.div`
  padding: 13px 10px 13px 20px;
  border: 1px solid black;
  box-shadow: 0 0 5px black;
  background-color: ${(props) => props.accent};
  color: white;
  margin-bottom: 1.5vh;
  display: flex;
  flex-flow: row nowrap;
  img {
    max-height: 70px;
    margin-right: 10px;
  }
  div {
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 10px;
      text-transform: capitalize;
    }
    .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      button {
        margin-right: 5px;
        width: 50%;
        text-align: center;
        font-family: "Ubuntu", sans-serif;
        color: ${(props) => props.accent};
        font-weight: 500;
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          background-color: #aaa;
        }
      }
    }
  }
`;

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
