import React, { useState, useEffect } from "react";
import {
  apiGet,
  teacherRecPostsRoute,
  teacherSalPostsRoute
} from "../static/util/util";
import {
  TeacherSalary,
  TeacherRecommendation
} from "../static/util/dataInterfaces";
import TeacherSalaryTile from "./TeacherSalaryTile";
import TitleTile from "./TitleTile";
import TeacherRecommendationTile from "./TeacherRecommendationTile";

interface Props {}

const TeacherPosts: React.FC<Props> = () => {
  const [teacherSalaries, setteacherSalaries] = useState();
  const [teacherRecommendations, setteacherRecommendations] = useState();

  useEffect(() => {
    const fetch = (): void => {
      apiGet(
        teacherSalPostsRoute + "listall",
        (jsonresponse: TeacherSalary[]) => {
          setteacherSalaries(jsonresponse);
        }
      );
      apiGet(
        teacherRecPostsRoute + "listall",
        (jsonresponse: TeacherRecommendation[]) => {
          setteacherRecommendations(jsonresponse);
        }
      );
    };
    fetch();
  }, []);

  return (
    <div className="tile is-parent is-vertical">
      <TitleTile title="Tanárok mondták" />
      <div className="tile is-parent">
        <div className="tile is-child">
          <TitleTile title="Javaslatok" />
          {teacherRecommendations &&
            teacherRecommendations.map(
              (recommendation: TeacherRecommendation) => {
                return (
                  <TeacherRecommendationTile
                    key={recommendation.id}
                    post={recommendation}
                  />
                );
              }
            )}
        </div>
        <div className="tile is-child">
          <TitleTile title="Fizetések" />
          {teacherSalaries &&
            teacherSalaries.map((teacherSalary: TeacherSalary) => {
              return (
                <TeacherSalaryTile
                  key={teacherSalary.id}
                  post={teacherSalary}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TeacherPosts;
