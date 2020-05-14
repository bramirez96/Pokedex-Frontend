import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { styles } from "../data";

import { favorites, header } from "../store/actions";
const { removeFavorite } = favorites;
const { setUrl } = header;

const FavoriteCard = (props) => {
  const { favorite, removeFavorite, accent } = props;
  const { name, sprites } = favorite;
  return (
    <StyledCard accent={accent}>
      <img src={sprites.front_default} />
      <div>
        <h3>{name}</h3>
        <button
          onClick={() => {
            removeFavorite(favorite);
          }}
        >
          REMOVE
        </button>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  padding: 13px 20px;
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
    align-items: flex-start;
    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 10px;
      text-transform: capitalize;
    }
    button {
      padding: 5px 10px;
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
