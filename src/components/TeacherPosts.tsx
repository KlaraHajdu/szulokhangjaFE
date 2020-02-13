import React, { useState, useEffect } from "react";
import { apiGet, teacherPostsRoute } from "../static/util/util";
import { TeacherSalaries } from "../static/util/dataInterfaces";
import TeacherSalaryTile from "./TeacherSalaryTile";

interface Props {}

const TeacherPosts: React.FC<Props> = () => {
  const [teacherSalaries, setteacherSalaries] = useState();

  useEffect(() => {
    const fetch = (): void => {
      apiGet(teacherPostsRoute + "salariesall", (jsonresponse: any) => {
        setteacherSalaries(jsonresponse);
      });
    };
    fetch();
  }, []);

  return (
    <div className="tile is-parent is-vertical box">
      {teacherSalaries &&
        teacherSalaries.map((teacherSalary: TeacherSalaries) => {
          return (
            <TeacherSalaryTile key={teacherSalary.id} post={teacherSalary} />
          );
        })}
    </div>
  );
};

export default TeacherPosts;
