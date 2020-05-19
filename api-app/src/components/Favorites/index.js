import React from "react";
import { connect } from "react-redux";
import { StyledFavs } from "./StyledFavs";

import FavoriteCard from "../FavoriteCard";

const Favorites = (props) => {
  const { favorites, isOpen, accent } = props;
  return (
    <StyledFavs accent={accent} className={`header${isOpen ? " open" : ""}`}>
      <h2>FAVORITES</h2>
      {favorites && (
        <div className="container">
          {favorites.map((x) => (
            <FavoriteCard favorite={x} key={x.id} />
          ))}
        </div>
      )}
    </StyledFavs>
  );
};

const mapStateToProps = (state) => {
  const { favorites, isOpen } = state.favorites;
  const { accent } = state.settings;
  return { favorites, isOpen, accent };
};

export default connect(mapStateToProps, {})(Favorites);
