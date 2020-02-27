import React from "react";
import { TeacherSalary } from "../static/util/dataInterfaces";
import { formatTimeStamp } from "../static/util/util";

interface Props {
  post: TeacherSalary;
}

const TeacherSalaryTile: React.FC<Props> = ({ post }) => {
  return (
    <div className="tile is-parent box is-vertical is-size-7">
      <div
        className="tile is-parent  is-size-7"
        style={{ backgroundColor: "rgba(201, 38, 38, 0.8)" }}
      >
        <div className="tile is-child">
          <p>{post.location}</p>
        </div>
        <div className="tile is-child">
          <p>{formatTimeStamp(post.submissionDate).format("YYYY.MM.DD")}</p>
        </div>
      </div>
      <div className="tile is-parent is-size-7">
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
    </div>
  );
};

export default TeacherSalaryTile;
