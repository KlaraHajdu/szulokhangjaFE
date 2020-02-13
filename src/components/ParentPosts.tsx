import React, { useEffect, useState } from "react";
import { apiGet, parentPostsRoute } from "../static/util/util";
import { ParentPost } from "../static/util/dataInterfaces";
import GenericPostTile from "./ParentPostTile";
import TitleTile from "./TitleTile";
import ParentPostTile from "./ParentPostTile";

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
    <div className="tile is-4 is-parent is-vertical">
      <TitleTile title="Szülők" />
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
