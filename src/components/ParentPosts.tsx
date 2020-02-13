import React, { useEffect, useState } from "react";
import { apiGet, parentPostsRoute } from "../static/util/util";
import { ParentPost } from "../static/util/dataInterfaces";
import GenericPostTile from "./ParentPostTile";

interface Props {}

const ParentPosts: React.FC<Props> = () => {
  const [parentPosts, setParentPosts] = useState();

  useEffect(() => {
    const fetch = (): void => {
      apiGet(parentPostsRoute + "all", (jsonResponse: any) => {
        setParentPosts(jsonResponse);
      });
    };
    fetch();
  }, []);

  return (
    <div className="tile is-parent is-vertical box">
      {parentPosts &&
        parentPosts.map((parentPost: ParentPost) => {
          return <GenericPostTile key={parentPost.id} post={parentPost} />;
        })}
    </div>
  );
};

export default ParentPosts;
