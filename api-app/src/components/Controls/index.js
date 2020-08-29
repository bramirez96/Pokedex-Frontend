import React, { useState } from "react";
import StyledControls from "./StyledControls";
import { connect } from "react-redux";

import { pokemonList } from "../../store/actions/index";
import { useEffect } from "react";

const Controls = (props) => {
    const [field, setField] = useState(props.page + 1);
    useEffect(() => {
        setField(props.page + 1);
    }, [props.page]);
    const clickNext = (e) => {
        e.preventDefault();
        props.nextPage();
    };
    const clickPrev = (e) => {
        e.preventDefault();
        props.prevPage();
    };
    const handleField = (e) => {
        e.preventDefault();
        console.log("CHANGE", e.target.value);
        setField(e.target.value);
    };
    const handlePage = (e) => {
        e.preventDefault();
        let newPage = e.target.pageInput.value - 1;
        console.log("SUBMIT", newPage);
        if (
            !isNaN(parseInt(newPage)) &&
            newPage > 0 &&
            newPage <= props.maxPage
        ) {
            props.setPage(newPage);
        } else {
            setField(props.page + 1);
        }
    };
    return (
        <StyledControls>
            <button onClick={clickPrev}>&#9664;</button>
            <form onSubmit={handlePage}>
                <span>
                    <b>Page:&nbsp;</b>
                </span>
                <input
                    name="pageInput"
                    type="text"
                    value={field}
                    onChange={handleField}
                />
                <span>&nbsp;/ {props.maxPage + 1}</span>
            </form>
            <button onClick={clickNext}>&#9654;</button>
        </StyledControls>
    );
};

export default connect(
    (state) => ({
        maxPage: state.pokemonList.maxPage,
        page: state.pokemonList.page,
    }),
    {
        nextPage: pokemonList.nextPage,
        prevPage: pokemonList.prevPage,
        setPage: pokemonList.setPage,
    }
)(Controls);
