import React from "react";
import { ParentPost } from "../static/util/dataInterfaces";
import { formatTimeStamp } from "../static/util/util";

interface Props {
  post: ParentPost;
}

const ParentPostTile: React.FC<Props> = ({ post }) => {
  return (
    <div className="tile is-parent box  is-size-7">
      <div className="tile is-child">
        <p>{post.message}</p>
      </div>
      <div className="tile is-child">
        <p>{post.location}</p>
      </div>
      <div className="tile is-child">
        <p>{formatTimeStamp(post.submissionDate).format("YYYY.MM.DD")}</p>
      </div>
    </div>
  );
};

export default ParentPostTile;
