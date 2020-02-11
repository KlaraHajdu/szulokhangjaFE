import React, { ReactElement } from "react";
import NavBar from "./NavBar";

interface Props {}

function PageTitle(): ReactElement {
  return (
    <section className="hero is-small is-success is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Szülők hangja</h1>
          <h2 className="subtitle">
            Ide jön a rövid szöveg az oldal céljáról.
          </h2>
        </div>
      </div>
      <NavBar />
    </section>
  );
}

export default PageTitle;
