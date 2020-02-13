import React, { ReactElement } from "react";

interface Props {}

function NavBar(): ReactElement {
  return (
    <div className="container has-text-centered">
      <div className="buttons">
        <button className="button is-medium " style={{ display: "inline" }}>
          <strong>Szülő vagyok</strong>
        </button>
        <button className="button is-medium " style={{ display: "inline" }}>
          <strong>Tanár vagyok</strong>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
