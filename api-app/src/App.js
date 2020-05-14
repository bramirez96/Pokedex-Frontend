import React, { useEffect } from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import Favorites from "./components/Favorites"

import { bg } from "./data/";

const App = (props) => {
  useEffect(() => {}, []);
  return (
    <StyledApp className="App">
      <Header />
      <PokemonList />
      <Favorites />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  background: url(${bg.grass}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
`;

export default connect(null, {})(App);
