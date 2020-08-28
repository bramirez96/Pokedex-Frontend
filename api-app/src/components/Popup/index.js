import React from "react";
import { connect } from "react-redux";
import { StyledPopup } from "./StyledPopup";

import { popup } from "../../store/actions";

const Popup = (props) => {
    const { pokemon, closePopup } = props;
    const {
        name,
        sprites: { front_default },
    } = pokemon;
    const { isFetching } = props;

    const closeWindow = (e) => {
        e.preventDefault();
        closePopup();
    };

    return (
        <StyledPopup>
            <div className="window">
                <h5>
                    {isFetching && "Loading data..."}
                    {!isFetching && name}
                </h5>
                {!isFetching && <img src={front_default} alt="" />}
                <button onClick={closeWindow}>CLOSE</button>
            </div>
        </StyledPopup>
    );
};

const mapStateToProps = (state) => {
    const { pokemon, isFetching } = state.popup;
    return {
        pokemon,
        isFetching,
    };
};

export default connect(mapStateToProps, {
    closePopup: popup.closePopup,
})(Popup);
