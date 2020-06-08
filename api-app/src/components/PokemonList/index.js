import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { StyledList } from "./StyledPokemonList";

import PokemonCard from "../PokemonCard";
import Popup from "../Popup";

import { pokemon } from "../../store/actions";
import Navigation from "./Navigation";

const PokemonList = (props) => {
  const { pokemon, isFetching } = props;
  useEffect(() => {
    props.fetchNewPokemon();
  }, []);
  return (
    <StyledList>
      {isFetching && <h1>Loading Pokemon...</h1>}
      <Navigation />
      {pokemon && (
        <div className="container">
          {pokemon.map((x, index) => (
            <PokemonCard key={index} pokemon={x} index={index} />
          ))}
        </div>
      )}
      {/* {poppedOut && <Popup />} */}
    </StyledList>
  );
};

const mapStateToProps = (state) => {
  const { page, limit, filtered } = state.pokemon;
  return {
    pokemon: filtered
      ? filtered.slice((page - 1) * limit, page * limit)
      : filtered,
    isFetching: state.pokemon.isFetching,
  };
};

export default connect(mapStateToProps, {
  fetchNewPokemon: pokemon.fetchPokemon,
})(PokemonList);
