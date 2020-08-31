import React from "react";
import { connect } from "react-redux";
import { StyledCard } from "./StyledFavoriteCard";

import { favorites, popup } from "../../store/actions";
import BlankSprite from "../BlankSprite";
const { removeFavorite } = favorites;

const FavoriteCard = (props) => {
    const { favorite, removeFavorite, setPopup, accent } = props;
    const { name, sprites } = favorite;
    return (
        <StyledCard accent={accent}>
            {sprites.front_default ? (
                <img src={sprites.front_default} alt="" />
            ) : (
                <BlankSprite />
            )}
            <div>
                <h3>{name}</h3>
                <div className="buttons">
                    <button
                        onClick={() => {
                            setPopup(favorite);
                        }}
                    >
                        <img
                            src={require("../../data/icons/popout.png")}
                            alt="Open Details"
                        />
                    </button>
                    <button
                        onClick={() => {
                            removeFavorite(favorite);
                        }}
                    >
                        <img
                            src={require("../../data/icons/favon.png")}
                            alt="Remove Favorite"
                        />
                    </button>
                </div>
            </div>
        </StyledCard>
    );
};

const mapStateToProps = (state) => {
    const { accent } = state.settings;
    return {
        ...state,
        accent,
    };
};

export default connect(mapStateToProps, {
    removeFavorite,
    setPopup: popup.setPopup,
})(FavoriteCard);
