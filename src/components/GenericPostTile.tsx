import React from "react";
import { ParentPost } from "../static/util/dataInterfaces";

interface Props {
  post: ParentPost;
}

const GenericPostTile: React.FC<Props> = ({ post }) => {
  return (
    <div className="tile is-parent box notification">
      <div className="tile is-child">
        <p>{post.message}</p>
      </div>
      <div className="tile is-child">
        <p>{post.location}</p>
      </div>
      <div className="tile is-child">
        <p>{post.submissionDate}</p>
      </div>
    </div>
  );
};

export default GenericPostTile;
