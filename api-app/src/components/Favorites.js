import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { favorites } from "../store/actions";
const { setFavorites, removeFavorite } = favorites;

const Favorites = (props) => {
  const { favorites, isFetching, setFavorites } = props;
  const readFavorites = () => {
    try {
      return window.localStorage.getItem("favorites")
        ? JSON.parse(window.localStorage.getItem("favorites"))
        : [];
    } catch (e) {
      return [];
    }
  };
  const storeFavorites = () => {
    try {
      window.localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    // Read in data from localStorage
    setFavorites(readFavorites());
  }, []);
  useEffect(() => {
    storeFavorites();
  }, [favorites]);
  return (
    <StyledFavs>
      <h2>FAVORITES</h2>
      {favorites && favorites.map((x) => x.name + " ")}
    </StyledFavs>
  );
};
const StyledFavs = styled.div``;

const mapStateToProps = (state) => {
  const { favorites, isFetching } = state.favorites;
  return { favorites, isFetching };
};

export default connect(mapStateToProps, { setFavorites, removeFavorite })(
  Favorites
);
