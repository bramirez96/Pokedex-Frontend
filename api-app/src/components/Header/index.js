import React from "react";
import { connect } from "react-redux";
import { StyledHeader } from "./StyledHeader";

import { header, favorites, settings } from "../../store/actions";
const { toggleOpen } = favorites;
const { openSettings } = settings;

const Header = (props) => {
  const { searchValue, updateSearch, toggleOpen, openSettings, accent } = props;
  return (
    <StyledHeader accent={accent}><h1>POKEMON</h1>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Search by Pokemon Name or ID..."
          value={searchValue}
          onChange={updateSearch}
        />
      </div>
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
  const { searchValue } = state.header;
  const { accent } = state.settings;
  return { searchValue, accent };
};

export default connect(mapStateToProps, {
  toggleOpen,
  openSettings,
  updateSearch: header.updateSearch,
})(Header);
