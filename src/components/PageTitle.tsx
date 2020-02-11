import React, { ReactElement } from "react";
import NavBar from "./NavBar";
import logo from ".././logo2.png";

interface Props {}

function PageTitle(): ReactElement {
  return (
    <section className="hero is-small is-warning is-bold">
      <div className="hero-body">
        <img src={logo} className ="App-logo" alt="logo"  style={{width: 100, height: 100, position: 'absolute', right: 60, top:10}}/>
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
