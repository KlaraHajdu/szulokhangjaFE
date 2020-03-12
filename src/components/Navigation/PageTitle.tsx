import React, { ReactElement } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

interface Props {}

function PageTitle(): ReactElement {
    return <NavBar />;
}

export default PageTitle;
