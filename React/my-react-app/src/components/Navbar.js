import React from "react";
import propTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.LogoName}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.t1}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.t2}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.t3}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.scrollBar}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
    LogoName: propTypes.string.isRequired,
    t1: propTypes.string,
    t2: propTypes.string,
    t3: propTypes.string,
    scrollBar: propTypes.string,
  }
  
Navbar.defaultProps = {
    LogoName : "Set Title Name",
    t1 : "About",
    t2 : "title 2",
    t3 : "Contact",
    scrollBar : "Others"
}