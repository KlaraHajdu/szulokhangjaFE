import React from "react";
import { TeacherSalary } from "../static/util/dataInterfaces";
import { formatTimeStamp } from "../static/util/util";

interface Props {
  post: TeacherSalary;
}

const TeacherSalaryTile: React.FC<Props> = ({ post }) => {
  return (
    <div className="tile is-parent box notification is-size-7">
      <div className="tile is-child">
        <p>{post.name}</p>
      </div>
      <div className="tile is-child">
        <p>{post.workload}</p>
      </div>
      <div className="tile is-child">
        <p>{post.experience}</p>
      </div>
      <div className="tile is-child">
        <p>{post.salary}</p>
      </div>
      <div className="tile is-child">
        <p>{formatTimeStamp(post.submissionDate).format("YYYY.MM.DD")}</p>
      </div>
    </div>
  );
};

export default TeacherSalaryTile;
