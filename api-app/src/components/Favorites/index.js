import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import FavoriteCard from "../FavoriteCard";

const Favorites = (props) => {
  const { favorites, isOpen, accent } = props;
  return (
    <StyledFavs accent={accent} className={`header${isOpen ? " open" : ""}`}>
      <h2>FAVORITES</h2>
      {favorites && (
        <div className="container">
          {favorites.map((x) => (
            <FavoriteCard favorite={x} key={x.id} />
          ))}
        </div>
      )}
    </StyledFavs>
  );
};
const StyledFavs = styled.div`
  font-family: "Ubuntu", sans-serif;
  width: 22%;
  position: absolute;
  top: 0;
  height: 100%;
  left: -22%;
  transition: 1s left;
  transition-timing-function: ease-in-out;
  background-color: #0006;
  text-shadow: 0 0 10px black;
  &.open {
    left: 0;
  }
  h2 {
    text-align: left;
    color: white;
    font-size: 2rem;
    padding: 20px 10%;
    text-decoration: underline;
    text-decoration-color: ${(props) => props.accent};
  }
  & > .container {
    padding: 0 10% 20px;
  }
`;

const mapStateToProps = (state) => {
  const { favorites, isOpen } = state.favorites;
  const { accent } = state.settings;
  return { favorites, isOpen, accent };
};

export default connect(mapStateToProps, {})(Favorites);
