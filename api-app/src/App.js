import React, { useEffect } from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import Favorites from "./components/Favorites";
import Settings from "./components/Settings";
import { favorites, settings } from "./store/actions";
import Popup from "./components/Popup";
import { APP_LOADED } from "./store/actions/pokemonList";
import { action } from ".";
const { setFavorites } = favorites;
const { setSettings } = settings;

const App = (props) => {
    const {
        favorites,
        setFavorites,
        background,
        accent,
        setSettings,
        poppedOut,
    } = props;
    const readFavorites = () => {
        try {
            return window.localStorage.getItem("favorites")
                ? JSON.parse(window.localStorage.getItem("favorites"))
                : [];
        } catch (e) {
            return [];
        }
    };
    const storeFavorites = () => {
        try {
            window.localStorage.setItem("favorites", JSON.stringify(favorites));
        } catch (e) {
            console.log(e);
        }
    };
    const readSettings = () => {
        try {
            return window.localStorage.getItem("pokeAppSettings")
                ? JSON.parse(window.localStorage.getItem("pokeAppSettings"))
                : {};
        } catch (e) {
            console.log(e);
        }
    };
    const storeSettings = () => {
        const mySettings = { bg: background, acc: accent };
        try {
            window.localStorage.setItem(
                "pokeAppSettings",
                JSON.stringify(mySettings)
            );
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        // Read in data from localStorage
        action(APP_LOADED);
        setFavorites(readFavorites());
        setSettings(readSettings());
    }, [setFavorites, setSettings]);
    useEffect(() => {
        storeFavorites();
    }, [favorites]);
    useEffect(() => {
        storeSettings();
    }, [background, accent]);
    return (
        <StyledApp className="App" bg={background}>
            <Header />
            <Favorites />
            <Settings />
            <div className="container">
                <PokemonList />
                {poppedOut && <Popup />}
            </div>
        </StyledApp>
    );
};

const StyledApp = styled.div`
    background: url(${(props) => props.bg}) no-repeat center center fixed;
    background-size: cover;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    & > .container {
        position: relative;
        padding: 20px 3%;
        flex-grow: 1;
        overflow-y: scroll;
        overflow-x: hidden;
        max-height: 85vh;
        max-width: 100vw;
    }
`;

const mapStateToProps = (state) => {
    const { favorites } = state.favorites;
    const { background, accent } = state.settings;
    const { poppedOut } = state.popup;
    return { favorites, background, accent, poppedOut };
};

export default connect(mapStateToProps, { setFavorites, setSettings })(App);
