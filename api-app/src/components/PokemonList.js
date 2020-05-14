import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import styled from "styled-components";

import PokemonCard from "./PokemonCard";
import Popup from "./Popup";

import { pokemonList } from "../store/actions";
const {
  fetchPokemonStart,
  fetchPokemonSuccess,
  fetchPokemonFailure,
  setUrl
} = pokemonList;

const PokemonList = (props) => {
  const {
    fetchPokemonStart,
    fetchPokemonSuccess,
    fetchPokemonFailure,
    setUrl,
    isFetching,
    pokemon,
    poppedOut,
    url
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
          fetchPokemonSuccess(res.data);
        })
        .catch((err) => {
          fetchPokemonFailure({
            status: err.response.status,
            message: err.response.data
          });
        });
    }
  }, [url]);
  return (
    <StyledList>
      {!isFetching && pokemon && (
        <div className="container">
          {pokemon.map((x, i) => (
            <PokemonCard key={i} pokemon={x} />
          ))}
        </div>
      )}
      {isFetching && <div className="loading">Loading your pokemon...</div>}
      {poppedOut && <Popup />}
    </StyledList>
  );
};

const StyledList = styled.section`
  padding: 20px;
  .container {
    display: flex;
    align-content: flex-start;
  }
`;

const mapStateToProps = (state) => {
  return {
    ...state.pokemonList,
    poppedOut: state.popup.poppedOut
  };
};

export default connect(mapStateToProps, {
  fetchPokemonStart,
  fetchPokemonSuccess,
  fetchPokemonFailure,
  setUrl
})(PokemonList);
