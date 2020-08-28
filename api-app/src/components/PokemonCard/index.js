import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyledCard } from "./StyledPokemonCard";
import { Type } from "../Type";
import { getHeight, getWeight } from "../../utils";

import { popup, favorites, pokemonList } from "../../store/actions";
const { setPopup } = popup;
const { addFavorite, removeFavorite } = favorites;
const { removePokemon } = pokemonList;

const PokemonCard = (props) => {
    const {
        addFavorite,
        removeFavorite,
        accent,
        pokemon,
        removePokemon,
        index,
        favorites,
    } = props;
    const {
        name,
        id,
        height,
        weight,
        sprites,
        types,
        isFavorite,
    } = pokemon;

    useEffect(() => {
        // This ensures that the correct state is set for isFavorite
        if (favorites.some((x) => id === x.id)) {
            addFavorite(pokemon);
        }
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        props.setPopup(props.pokemon);
    };
    const handleAdd = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addFavorite(pokemon);
    };
    const handleRemove = (e) => {
        e.preventDefault();
        e.stopPropagation();
        removeFavorite(pokemon);
    };
    return (
        <StyledCard accent={accent}>
            <span
                className="ui close"
                onClick={() => {
                    removePokemon(index);
                }}
            >
                &times;
            </span>
            <div className="title">
                <img src={sprites.front_default} alt="" />
                <div>
                    <h2>
                        {id}. {name}
                    </h2>
                    <div>
                        {!isFavorite ? (
                            <button onClick={handleAdd} title="Add as Favorite">
                                <img
                                    src={require("../../data/icons/favoff.png")}
                                />
                            </button>
                        ) : (
                            <button
                                onClick={handleRemove}
                                title="Remove Favorite"
                            >
                                <img
                                    src={require("../../data/icons/favon.png")}
                                />
                            </button>
                        )}
                        <button onClick={handleClick}>
                            <img src={require("../../data/icons/popout.png")} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="content">
                <h4>
                    <b>Height:&nbsp;</b>
                    {getHeight(height)}
                </h4>
                <h4>
                    <b>Weight:&nbsp;</b>
                    {getWeight(weight)}
                </h4>
                <h4>
                    {types.length === 1 ? (
                        <>
                            <Type type={types[0].type.name}>
                                {types[0].type.name}
                            </Type>
                        </>
                    ) : (
                        <>
                            <Type type={types[0].type.name}>
                                {types[0].type.name}
                            </Type>{" "}
                            <Type type={types[1].type.name}>
                                {types[1].type.name}
                            </Type>
                        </>
                    )}
                </h4>
            </div>
        </StyledCard>
    );
};

const mapStateToProps = (state) => {
    const { accent } = state.settings;
    const { favorites } = state.favorites;
    return { accent, favorites };
};

export default connect(mapStateToProps, {
    setPopup,
    addFavorite,
    removeFavorite,
    removePokemon,
})(PokemonCard);
