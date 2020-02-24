import React, { ReactElement } from "react";

interface Props {}

function NavBar(): ReactElement {
  return (
    <div className="container is-size-5 has-text-weight-bold">
      <nav>
        <div className="buttons navbar-end has-text-grey-dark">
          <a className="navbar-item ">
            <strong>Szülő vagyok</strong>
          </a>
          <a className="navbar-item ">
            <strong>Tanár vagyok</strong>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
