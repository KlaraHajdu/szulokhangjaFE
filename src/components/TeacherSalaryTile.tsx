import React from "react";
import { TeacherSalaries } from "../static/util/dataInterfaces";

interface Props {
  post: TeacherSalaries;
}

const TeacherSalaryTile: React.FC<Props> = ({ post }) => {
  return (
    <div className="tile is-parent box notification">
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
        <p>{post.submissionDate}</p>
      </div>
    </div>
  );
};

export default TeacherSalaryTile;
