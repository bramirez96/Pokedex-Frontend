import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { StyledList } from "./StyledPokemonList";

import PokemonCard from "../PokemonCard";
import Popup from "../Popup";

import { pokemon } from "../../store/actions";

const PokemonList = (props) => {
  const { pokemon, isFetching } = props;
  useEffect(() => {
    props.fetchNewPokemon();
  }, []);
  return (
    <StyledList>
      {isFetching && <h1>Loading Pokemon...</h1>}
      {pokemon && (
        <div className="container">
          {pokemon.map((x, index) => (
            <PokemonCard
              key={`${x.id}-${index}`}
              pokemon={x}
              index={index}
            />
          ))}
        </div>
      )}
      {/* {poppedOut && <Popup />} */}
    </StyledList>
  );
};

const mapStateToProps = (state) => {
  const { list, page, limit } = state.pokemon;
  return {
    pokemon: list ? list.slice((page - 1) * limit, page * limit) : list,
    isFetching: state.pokemon.isFetching,
  };
};

export default connect(mapStateToProps, {
  fetchNewPokemon: pokemon.fetchPokemon,
})(PokemonList);
