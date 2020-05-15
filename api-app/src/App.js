import React, { useEffect } from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import Favorites from "./components/Favorites";
import Settings from "./components/Settings";
import { favorites, settings } from "./store/actions";
const { setFavorites } = favorites;
const { setSettings } = settings;

const App = (props) => {
  const { favorites, setFavorites, background, accent, setSettings } = props;
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
  const readSettings = () => {
    try {
      return window.localStorage.getItem("pokeAppSettings")
        ? JSON.parse(window.localStorage.getItem("pokeAppSettings"))
        : {};
    } catch (e) {
      console.log(e);
    }
  };
  const storeSettings = () => {
    const mySettings = { bg: background, acc: accent };
    try {
      window.localStorage.setItem(
        "pokeAppSettings",
        JSON.stringify(mySettings)
      );
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    // Read in data from localStorage
    setFavorites(readFavorites());
    setSettings(readSettings());
  }, []);
  useEffect(() => {
    storeFavorites();
  }, [favorites]);
  useEffect(() => {
    storeSettings();
  }, [background, accent]);
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
  const { background, accent } = state.settings;
  return { favorites, background, accent };
};

export default connect(mapStateToProps, { setFavorites, setSettings })(App);
