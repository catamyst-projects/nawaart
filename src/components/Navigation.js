import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import logout from "../redux/actions/logout";

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  text-transform: uppercase;
  font-size: 1.5em;
  font-family: "Catamaran";
  font-weight: 700;
  letter-spacing: 0.1em;
  margin: 0;
  li {
    margin: 0 20px;
    cursor: pointer;
  }
  a {
    color: black;
    text-decoration: none;
  }
`;

const Navigation = ({ isAuthenticated, handleLogout }) => {
  return (
    <NavigationStyled>
      <Link to="/">
        <img src="/nawaart-logo.svg" alt="nawaart" />
      </Link>
      <Links>
        <li>
          <Link to="/artists">Artists</Link>
        </li>
        <li>
          <Link to="/artworks">Artworks</Link>
        </li>
        <li>
          <Link to="/stories">Stories</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {isAuthenticated && (
          <li>
            <span onClick={() => handleLogout()}>Logout</span>
          </li>
        )}
      </Links>
    </NavigationStyled>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: () => dispatch(logout()),
  };
};

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool,
  handleLogin: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
