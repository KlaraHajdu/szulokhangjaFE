import React from "react";
import { TeacherRecommendation } from "../static/util/dataInterfaces";
import { formatTimeStamp } from "../static/util/util";

interface Props {
  post: TeacherRecommendation;
}

const TeacherRecommendationTile: React.FC<Props> = ({ post }) => {
  return (
    <div className="tile is-parent box notification is-size-7">
      <div className="tile is-child">
        <p>{post.name}</p>
      </div>
      <div className="tile is-child">
        <p>{post.recommendation}</p>
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

export default TeacherRecommendationTile;
