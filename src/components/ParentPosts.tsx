import React, { useEffect, useContext } from "react";
import { apiGet, parentPostsRoute } from "../static/util/util";
import { ParentPost } from "../static/util/dataInterfaces";
import ParentPostTile from "./ParentPostTile";
import { ParentPostContext } from "./ParentPostProvider";
import Typography from "@material-ui/core/Typography";

interface Props {}

const ParentPosts: React.FC<Props> = () => {
    const [parentPosts, setParentPosts] = useContext(ParentPostContext);

    useEffect(() => {
        const fetch = (): void => {
            apiGet(parentPostsRoute + "listall", (jsonResponse: any) => {
                setParentPosts(jsonResponse);
            });
        };
        fetch();
    }, [setParentPosts]);

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Szülők mondták
            </Typography>
            <div className="tile is-child">
                {parentPosts &&
                    parentPosts.map((parentPost: ParentPost) => {
                        return <ParentPostTile key={parentPost.id} post={parentPost} />;
                    })}
            </div>
        </div>
    );
};

export default ParentPosts;
