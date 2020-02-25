import React, { ReactElement } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

interface Props {}

function PageTitle(): ReactElement {
    return (
        <section className="hero is-small is-warning is-bold">
            <div className="hero-body">
                <div className="tile is-parent">
                    <Link to="/" className="tile is-child is-1">
                        <figure className="image is-64x64">
                            <img src={require("../logo2.png")} alt="logo" />
                        </figure>
                    </Link>
                    <div className="tile is-3 is-child">
                        <h1 className="title is-size-2 has-text-weight-bold">Szülők hangja</h1>
                    </div>
                </div>
                <div className="hero-bottom">
                    <NavBar />
                </div>
            </div>
        </section>
    );
}

export default PageTitle;
