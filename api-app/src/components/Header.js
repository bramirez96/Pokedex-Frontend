import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { header, pokemonList, favorites, settings } from "../store/actions";
import { styles } from "../data";
const { sendSearch, handleInput } = header;
const { setUrl } = pokemonList;
const { toggleOpen } = favorites;
const { openSettings } = settings;

const Header = (props) => {
  const {
    searchValue,
    isFetching,
    error,
    handleInput,
    sendSearch,
    setUrl,
    toggleOpen,
    openSettings,
    accent,
  } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    sendSearch();
    setUrl(searchValue);
  };
  return (
    <StyledHeader accent={accent}>
      {error && <span class="error">{error}</span>}
      <h1>POKEMON</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter Pokemon Name or ID..."
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
      <span className="button right" onClick={toggleOpen}>
        FAVORITES
      </span>
      <span className="button left" onClick={openSettings}>
        SETTINGS
      </span>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  font-family: "Ubuntu", sans-serif;
  height: 15vh;
  min-height: 100px;
  background-color: #00000066;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  position: relative;
  top: 0;
  left: 0;
  span.button {
    position: absolute;
    top: 40%;
    padding: 10px;
    background-color: ${(props) => props.accent};
    cursor: pointer;
    &.left {
      left: 20px;
    }
    &.right {
      right: 20px;
    }
  }
  .error {
    position: absolute;
    bottom: 2vh;
    right: 4%;
    color: white;
  }
  h1 {
    margin-bottom: 1vh;
  }
  input {
    font-family: "Ubuntu", sans-serif;
    padding: 10px;
  }
  input[name="submit"] {
    background-color: ${(props) => props.accent};
    color: white;
    cursor: pointer;
    &:hover {
      background-color: ;
    }
  }
`;

const mapStateToProps = (state) => {
  const { searchValue, isFetching } = state.header;
  const { error } = state.pokemonList;
  const { accent } = state.settings;
  return { searchValue, isFetching, error, accent };
};

export default connect(mapStateToProps, {
  toggleOpen,
  sendSearch,
  handleInput,
  setUrl,
  openSettings,
})(Header);
