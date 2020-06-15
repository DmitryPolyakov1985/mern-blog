import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          MERN Blog
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-article">
                Add Article
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;

// Main Navbar container
const NavbarContainer = styled.nav`
  background: var(--dark-green);

  .navbar-brand {
    color: #e3e3e3;
    &:focus {
      color: #e3e3e3;
    }
    &:hover {
      color: #d5d5d5;
    }
    &:active {
      color: #a5a5a5;
    }
  }
  .nav-link {
    color: #fff !important;
    &:hover {
      background: var(--light-green);
    }
  }
`;
