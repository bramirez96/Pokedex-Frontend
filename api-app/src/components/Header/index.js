import React from "react";
import { connect } from "react-redux";
import { StyledHeader } from "./StyledHeader";

import {favorites, settings } from "../../store/actions";

const Header = (props) => {
    const { toggleOpen, openSettings, accent } = props;
    return (
        <StyledHeader accent={accent}>
            {/* {error && <span class="error">{error}</span>} */}
            <h1>PokeDex</h1>
            {/* <form onSubmit={handleSubmit}>
                <input type="text" name="search" placeholder="Filter??" />
            </form> */}
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
    const { accent } = state.settings;
    return { accent };
};

export default connect(mapStateToProps, {
    toggleOpen: favorites.toggleOpen,
    openSettings: settings.openSettings,
})(Header);
