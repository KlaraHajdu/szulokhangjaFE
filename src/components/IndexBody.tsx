import React, { useContext, Fragment } from "react";
import HungaryCountyMap from "./HungaryCountyMap";
import { ParentPostContext } from "./ParentPostProvider";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";

interface Props {}

const IndexBody: React.FC<Props> = () => {
    const [parentPosts, setParentPosts] = useContext(ParentPostContext);

    return (
        <Fragment>
            <Paper>
                <HungaryCountyMap />
            </Paper>
            {parentPosts &&
                parentPosts.map((post: any) => {
                    return (
                        <Typography variant="h6" key={post.id}>
                            {post.message}
                        </Typography>
                    );
                })}
        </Fragment>
    );
};

export default IndexBody;
