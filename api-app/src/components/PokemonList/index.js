import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { StyledList } from "./StyledPokemonList";

import PokemonCard from "../PokemonCard";

import { pokemonList } from "../../store/actions";
const {
  fetchPokemonStart,
  fetchPokemonSuccess,
  fetchPokemonFailure,
  setUrl,
} = pokemonList;

const PokemonList = (props) => {
  const {
    fetchPokemonStart,
    fetchPokemonSuccess,
    fetchPokemonFailure,
    setUrl,
    pokemon,
    url,
  } = props;
  useEffect(() => {
    setUrl("venusaur");
  }, []);
  useEffect(() => {
    if (url) {
      fetchPokemonStart();
      axios
        .get(url)
        .then((res) => {
          setUrl("");
          if (!res.data.count) {
            fetchPokemonSuccess(res.data);
          }
        })
        .catch((err) => {
          fetchPokemonFailure(err);
        });
    }
  }, [url]);
  return (
    <StyledList>
      {pokemon && (
        <div className="container">
          {pokemon.map((x, index) => (
            <PokemonCard key={`${x.id}-${index}`} pokemon={x} index={index} />
          ))}
        </div>
      )}
    </StyledList>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.pokemonList
  };
};

export default connect(mapStateToProps, {
  fetchPokemonStart,
  fetchPokemonSuccess,
  fetchPokemonFailure,
  setUrl,
})(PokemonList);
