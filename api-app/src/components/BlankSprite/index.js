import React from "react";
import styled from "styled-components";

const SpriteFiller = styled.div`
    font-family: "Ubuntu", sans-serif;
    min-height: 96px;
    min-width: 96px;
    span {
        color: #999;
        font-size: 4em;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 96px;
        width: 96px;
    }
`;

const BlankSprite = () => {
    return (
        <SpriteFiller className="sprite">
            <span>?</span>
        </SpriteFiller>
    );
};

export default BlankSprite;
