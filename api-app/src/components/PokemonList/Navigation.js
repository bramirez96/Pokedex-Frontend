import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { pokemon } from "../../store/actions";

const StyledNav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  button {
  }
  .dots {
    overflow: hidden;
    flex-grow: 1;
  }
  .num {
    padding: 10px;
    &.active {
      color: red;
    }
  }
`;

const Navigation = (props) => {
  const { numPages, page, limit, next, prev, setPage } = props;
  const nextHandler = (e) => {
    e.preventDefault();
    next();
  };
  const prevHandler = (e) => {
    e.preventDefault();
    prev();
  };
  const pageHandler = (e) => {
    if (!isNaN(e.target.value)) {
      setPage(e.target.value);
    }
  };
  return (
    <StyledNav>
      <button className="left" onClick={prevHandler}>
        &lt;
      </button>
      <span className={`num${page === 1 ? " active" : ""}`}>1</span>
      {page === 2 && <span className="num active">2</span>}

      <label>
        Page:
        <input type="text" name="page" value={page} onChange={pageHandler} />
      </label>

      {page === numPages - 1 && <span className="num active">{page}</span>}
      <span className={`num${page === numPages ? " active" : ""}`}>
        {numPages}
      </span>
      <button className="right" onClick={nextHandler}>
        &gt;
      </button>
    </StyledNav>
  );
};

const mapStateToProps = (state) => {
  const { page, limit, count } = state.pokemon;
  return {
    count,
    numPages: Math.ceil(count / limit),
    page,
    limit,
  };
};

export default connect(mapStateToProps, {
  next: pokemon.nextPage,
  prev: pokemon.prevPage,
  setPage: pokemon.setPage,
})(Navigation);
