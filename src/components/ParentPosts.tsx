import React, { useEffect, useContext } from "react";
import { apiGet, parentPostsRoute } from "../static/util/util";
import { ParentPost } from "../static/util/dataInterfaces";
import TitleTile from "./TitleTile";
import ParentPostTile from "./ParentPostTile";
import { ParentPostContext } from "./ParentPostProvider";

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
    }, [parentPosts]);

    return (
        <div className="tile is-4 is-parent is-vertical">
            <TitleTile title="Szülők mondták" />
            <div className="tile is-child">
                <TitleTile title="Észrevételek" />
                {parentPosts &&
                    parentPosts.map((parentPost: ParentPost) => {
                        return <ParentPostTile key={parentPost.id} post={parentPost} />;
                    })}
            </div>
        </div>
    );
};

export default ParentPosts;
