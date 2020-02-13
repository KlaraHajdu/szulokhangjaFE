import React from "react";
import { TeacherSalary } from "../static/util/dataInterfaces";
import { formatTimeStamp } from "../static/util/util";

interface Props {
  post: TeacherSalary;
}

const TeacherSalaryTile: React.FC<Props> = ({ post }) => {
  return (
    <div className="tile is-parent box  is-size-7">
      <div className="tile is-1 is-child">
        <p>{post.name}</p>
      </div>
      <div className="tile is-child is-3">
        <p>{post.workload}</p>
      </div>
      <div className="tile is-child is-4 has-text-left">
        <p>{post.experience}</p>
      </div>
      <div className="tile is-3 is-child has-text-centered">
        <p>{post.salary} HUF</p>
      </div>
    </div>
  );
};

export default TeacherSalaryTile;
