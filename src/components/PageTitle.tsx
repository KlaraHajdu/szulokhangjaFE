import React, { ReactElement } from "react";
import NavBar from "./NavBar";

interface Props {}

function PageTitle(): ReactElement {
  return (
    <section className="hero is-small is-warning is-bold">
      <div className="hero-head">
        <nav className="navbar">
          <div className="navbar-end">
            <span>
              <img
                src={require("../logo2.png")}
                className="image is-64x64"
                alt="logo"
              />
            </span>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="container">
          <h1 className="title">Szülők hangja</h1>
          <p>{"\n"}</p>
          <h6 className="subtitle is-6">
            <p>A gyermekeink jobb oktatást, </p>
            <p>a tanárok nagyobb megbecsülést,</p>
            <p>az iskolák több forrást érdemelnek!</p>
          </h6>
          <NavBar />
        </div>
      </div>
    </section>
  );
}

export default PageTitle;
