import React from "react";
import { connect } from "react-redux";
import { StyledPopup } from "./StyledPopup";

import { popup, favorites } from "../../store/actions";
import { Type } from "../Type";
import { getHeight, getWeight } from "../../utils";

var statNames = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SP ATK",
    "special-defense": "SP DEF",
    speed: "SPD",
};

const Popup = (props) => {
    const {
        pokemon,
        isFavorite,
        closePopup,
        addFavorite,
        removeFavorite,
    } = props;
    const {
        name,
        sprites: { front_default },
    } = pokemon;
    const { accent } = props;

    const closeWindow = (e) => {
        e.preventDefault();
        closePopup();
    };

    const addFav = (e) => {
        e.preventDefault();
        addFavorite(pokemon);
    };
    const remFav = (e) => {
        e.preventDefault();
        removeFavorite(pokemon);
    };

    return (
        <StyledPopup onClick={closeWindow} accent={accent}>
            <div className="window" onClick={(e) => e.stopPropagation()}>
                <div className="title">
                    <div>
                        <img className="sprite" src={front_default} alt="" />
                    </div>
                    <div className="grow">
                        <h2>
                            {name}
                            {isFavorite ? (
                                <button onClick={remFav}>
                                    <img
                                        src={require("../../data/icons/favon.png")}
                                    />
                                </button>
                            ) : (
                                <button onClick={addFav}>
                                    <img
                                        src={require("../../data/icons/favoff.png")}
                                    />
                                </button>
                            )}
                        </h2>
                        <button className="close" onClick={closeWindow}>
                            &times;
                        </button>
                    </div>
                </div>
                <div className="mid">
                    <h3>Abilities</h3>
                    {pokemon.abilities.map((a, i) => {
                        return (
                            <div className="ability" key={i}>
                                <div className="name">{a.name}:</div>
                                <div className="effect">{a.effect}</div>
                            </div>
                        );
                    })}
                </div>
                <div className="content">
                    <div className="info">
                        <div className="types">
                            {pokemon.types.map((x, i) => {
                                return (
                                    <Type type={x.type.name} key={i}>
                                        {x.type.name}
                                    </Type>
                                );
                            })}
                        </div>
                        <div>
                            <div className="height">
                                <b>Height:&nbsp;</b>
                                {getHeight(pokemon.height)}
                            </div>
                            <div className="weight">
                                <b>Weight:&nbsp;</b>
                                {getWeight(pokemon.weight)}
                            </div>
                        </div>
                    </div>
                    <div className="stats">
                        <h4>Base Stats</h4>
                        {pokemon.stats.map((x, i) => {
                            return (
                                <div className="stat" key={i}>
                                    <span>{statNames[x.stat.name]}</span>
                                    <span>{x.base_stat}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </StyledPopup>
    );
};

const mapStateToProps = (state) => {
    const { pokemon } = state.popup;
    const { accent } = state.settings;
    const isFavorite = state.pokemonList.pokemon[pokemon.id].isFavorite;
    return {
        accent,
        pokemon,
        isFavorite,
    };
};

export default connect(mapStateToProps, {
    closePopup: popup.closePopup,
    addFavorite: favorites.addFavorite,
    removeFavorite: favorites.removeFavorite,
})(Popup);
