import React, { useContext } from "react";
import HungaryCountyMap from "./HungaryCountyMap";
import { ParentPostContext } from "./ParentPostProvider";
import Typography from "@material-ui/core/Typography";

interface Props {}

const IndexBody: React.FC<Props> = () => {
    const [parentPosts, setParentPosts] = useContext(ParentPostContext);

    return (
        <div>
            <HungaryCountyMap />
            {parentPosts &&
                parentPosts.map((post: any) => {
                    return (
                        <Typography variant="h6" key={post.id}>
                            {post.message}
                        </Typography>
                    );
                })}
        </div>
    );
};

export default IndexBody;
