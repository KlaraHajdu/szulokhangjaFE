import React, { useContext, Fragment } from "react";
import HungaryCountyMap from "./HungaryCountyMap";
import { ParentPostContext } from "./ParentPostProvider";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";

interface Props {}

const IndexBody: React.FC<Props> = () => {
    return (
        <Fragment>
            <Paper>
                <HungaryCountyMap />
            </Paper>
        </Fragment>
    );
};

export default IndexBody;
