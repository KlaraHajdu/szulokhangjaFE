import React, { ReactElement } from "react";

interface Props {}

function NavBar(): ReactElement {
  return (
    <div className="hero-foot">
      <nav
        className="tabs is-boxed"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="">
                <strong>Szülők</strong>
              </a>
              <a>
                <strong>Tanárok</strong>
              </a>
              <a>
                <strong>Tanárok</strong>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
