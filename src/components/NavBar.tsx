import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {}

function NavBar(): ReactElement {
    return (
        <div className="container is-size-5 has-text-weight-bold">
            <nav>
                <div className="buttons navbar-end has-text-grey-dark">
                    <Link to="/parent-post" className="navbar-item ">
                        <strong>Szülő vagyok</strong>
                    </Link>
                    <Link to="/teacher-post" className="navbar-item">
                        <strong>Tanár vagyok</strong>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
