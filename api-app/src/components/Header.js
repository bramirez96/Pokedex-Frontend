import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { header, pokemonList } from "../store/actions";
const { sendSearch, handleInput } = header;
const { setUrl } = pokemonList;

const Header = (props) => {
  const {
    searchValue,
    isFetching,
    error,
    handleInput,
    sendSearch,
    setUrl
  } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    sendSearch();
    setUrl(searchValue);
  };
  return (
    <StyledHeader>
      {error && <span class="error">{error}</span>}
      <h1>POKEMON</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={searchValue}
          onChange={handleInput}
        />
        <input
          type="submit"
          name="submit"
          value="Search"
          disabled={isFetching}
        />
      </form>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 15vh;
  background-color: #00000066;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  position: relative;
  .error {
    position: absolute;
    bottom: 2vh;
    right: 4%;
    color: white;
  }
`;

const mapStateToProps = (state) => {
  const { searchValue, isFetching } = state.header;
  const { error } = state.pokemonList;
  return { searchValue, isFetching, error };
};

export default connect(mapStateToProps, { sendSearch, handleInput, setUrl })(
  Header
);
