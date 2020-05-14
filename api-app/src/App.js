import React, { useEffect } from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import Favorites from "./components/Favorites";
import Settings from "./components/Settings";
import { favorites, settings } from "./store/actions";
const { setFavorites } = favorites;

const App = (props) => {
  const { favorites, setFavorites, background } = props;
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
    <StyledApp className="App" bg={background}>
      <Header />
      <div className="container">
        <PokemonList />
        <Favorites />
        <Settings />
      </div>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  background: url(${(props) => props.bg}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  & > .container {
    position: relative;
    padding: 20px 3%;
    flex-grow: 1;
  }
`;

const mapStateToProps = (state) => {
  const { favorites } = state.favorites;
  const { background } = state.settings;
  return { favorites, background };
};

export default connect(mapStateToProps, { setFavorites })(App);
