import React from 'react';

const Header = (props) => {
  return (

    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">Employee Directory</a>
      <form
        className="form-inline"
        onSubmit={props.handleFormSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={props.handleInputChange} />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>

  );
};

export default Header;