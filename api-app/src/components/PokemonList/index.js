import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { StyledList } from "./StyledPokemonList";

import PokemonCard from "../PokemonCard";

import Controls from "../Controls";

const PokemonList = (props) => {
    const { pokemon, page, perPage } = props;
    return (
        <StyledList>
            <Controls />
            {pokemon && (
                <div className="container">
                    {Object.keys(pokemon)
                        .slice(perPage * page, perPage + perPage * page)
                        .map((x, index) => (
                            <PokemonCard
                                key={pokemon[x].id}
                                pokemon={pokemon[x]}
                            />
                        ))}
                </div>
            )}
        </StyledList>
    );
};

const mapStateToProps = (state) => {
    return {
        ...state.pokemonList,
    };
};

export default connect(mapStateToProps, {})(PokemonList);
