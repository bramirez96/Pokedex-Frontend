import React from "react";
import { connect } from "react-redux";
import { StyledSettings, Button } from "./StyledSettings";

import { styles } from "../../data";

import { settings } from "../../store/actions";
const { setBG, setAccent } = settings;

const Settings = (props) => {
    const { setOpen, setBG, setAccent, accent } = props;

    return (
        <StyledSettings
            accent={accent}
            className={`header${setOpen ? " open" : ""}`}
        >
            <h2>SETTINGS</h2>
            <div>
                <h3>Set Background</h3>
                {styles.bg.map((bg, i) => {
                    return (
                        <Button
                            key={i}
                            color={accent}
                            onClick={() => {
                                setBG(bg.url);
                            }}
                        >
                            {bg.name}
                        </Button>
                    );
                })}
            </div>
            <div>
                <h3>Set Accent</h3>
                {styles.colors.map((color, i) => {
                    return (
                        <Button
                            key={i}
                            color={color.hex}
                            onClick={() => {
                                setAccent(color.hex);
                            }}
                        >
                            {color.name}
                        </Button>
                    );
                })}
            </div>
        </StyledSettings>
    );
};

const mapStateToProps = (state) => {
    const { setOpen, accent } = state.settings;
    return { setOpen, accent };
};

export default connect(mapStateToProps, { setAccent, setBG })(Settings);
