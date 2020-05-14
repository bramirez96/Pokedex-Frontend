import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { styles } from "../data";

import FavoriteCard from "./FavoriteCard";

const Favorites = (props) => {
  const { favorites, isOpen } = props;
  return (
    <StyledFavs className={`header${isOpen ? " open" : ""}`}>
      <h2>FAVORITES</h2>
      {favorites && (
        <div className="container">
          {favorites.map((x) => (
            <FavoriteCard favorite={x} />
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
  right: -22%;
  transition: 1s right;
  transition-timing-function: ease-in-out;
  background-color: #0006;
  &.open {
    right: 0;
  }
  h2 {
    color: white;
    font-size: 2rem;
    padding: 20px;
    text-align: right;
  }
  & > .container {
    padding: 0 10% 20px;
  }
`;

const mapStateToProps = (state) => {
  const { favorites, isOpen } = state.favorites;
  return { favorites, isOpen };
};

export default connect(mapStateToProps, {})(Favorites);
