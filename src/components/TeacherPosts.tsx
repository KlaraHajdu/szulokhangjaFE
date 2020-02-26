import React, { useState, useEffect } from "react";
import { apiGet, teacherRecPostsRoute, teacherSalPostsRoute } from "../static/util/util";
import { TeacherSalary, TeacherRecommendation } from "../static/util/dataInterfaces";
import TeacherSalaryTile from "./TeacherSalaryTile";
import TeacherRecommendationTile from "./TeacherRecommendationTile";
import Typography from "@material-ui/core/Typography";

interface Props {}

const TeacherPosts: React.FC<Props> = (props) => {
    const [teacherSalaries, setteacherSalaries] = useState();
    const [teacherRecommendations, setteacherRecommendations] = useState();

    useEffect(() => {
        const fetch = (): void => {
            apiGet(teacherSalPostsRoute + "listall", (jsonresponse: TeacherSalary[]) => {
                setteacherSalaries(jsonresponse);
            });
            apiGet(teacherRecPostsRoute + "listall", (jsonresponse: TeacherRecommendation[]) => {
                setteacherRecommendations(jsonresponse);
            });
        };
        fetch();
    }, []);

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Tanárok mondták
            </Typography>
            <div className="tile is-parent">
                <div className="tile is-child">
                    <Typography variant="h6" gutterBottom>
                        Javaslatok
                    </Typography>
                    {teacherRecommendations &&
                        teacherRecommendations.map((recommendation: TeacherRecommendation) => {
                            return <TeacherRecommendationTile key={recommendation.id} post={recommendation} />;
                        })}
                </div>
                <div className="tile is-child">
                    <Typography variant="h6" gutterBottom>
                        Anyagi megbecsülés{" "}
                    </Typography>
                    {teacherSalaries &&
                        teacherSalaries.map((teacherSalary: TeacherSalary) => {
                            return <TeacherSalaryTile key={teacherSalary.id} post={teacherSalary} />;
                        })}
                </div>
            </div>
        </div>
    );
};

export default TeacherPosts;
