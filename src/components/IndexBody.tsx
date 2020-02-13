import React, { useEffect, useState } from "react";
import { apiGet, parentPostsRoute } from "../static/util/util";
import GenericPostTile from "./GenericPostTile";
import { ParentPost } from "../static/util/dataInterfaces";

interface Props {}

const IndexBody: React.FC<Props> = () => {
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
    <div className="container box">
      {parentPosts &&
        parentPosts.map((parentPost: ParentPost) => {
          return <GenericPostTile key={parentPost.id} post={parentPost} />;
        })}
    </div>
  );
};

export default IndexBody;
