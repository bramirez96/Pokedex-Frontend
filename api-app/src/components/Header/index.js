import React from "react";
import { connect } from "react-redux";
import { StyledHeader } from "./StyledHeader";

import { header, favorites, settings } from "../../store/actions";
const { sendSearch, handleInput } = header;
const { toggleOpen } = favorites;
const { openSettings } = settings;

const Header = (props) => {
  const {
    searchValue,
    isFetching,
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
      {/* {error && <span class="error">{error}</span>} */}
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
      <span className="button left" onClick={toggleOpen}>
        Favorites
      </span>
      <span className="button right" onClick={openSettings}>
        Settings
      </span>
    </StyledHeader>
  );
};

const mapStateToProps = (state) => {
  const { searchValue, isFetching } = state.header;
  const { accent } = state.settings;
  return { searchValue, isFetching, accent };
};

export default connect(mapStateToProps, {
  toggleOpen,
  sendSearch,
  handleInput,
  openSettings,
})(Header);
