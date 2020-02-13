import React, { useState, useEffect } from "react";
import { apiGet, teacherPostsRoute } from "../static/util/util";
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
        teacherPostsRoute + "salariesall",
        (jsonresponse: TeacherSalary[]) => {
          setteacherSalaries(jsonresponse);
        }
      );
      apiGet(
        teacherPostsRoute + "recommendationall",
        (jsonresponse: TeacherRecommendation[]) => {
          setteacherRecommendations(jsonresponse);
        }
      );
    };
    fetch();
  }, []);

  return (
    <div className="tile is-parent is-vertical">
      <TitleTile title="Tanárok" />
      <div className="tile is-parent box">
        <div className="tile is-child">
          <TitleTile title="Fizetés" />
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
        <div className="tile is-child">
          <TitleTile title="Javaslat" />
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
      </div>
    </div>
  );
};

export default TeacherPosts;
