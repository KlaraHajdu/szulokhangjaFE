import React, { useState, useEffect, useContext } from "react";
import { apiGet, teacherRecPostsRoute, teacherSalPostsRoute } from "../static/util/util";
import { TeacherSalary, TeacherRecommendation } from "../static/util/dataInterfaces";
import TeacherSalaryTile from "./TeacherSalaryTile";
import TeacherRecommendationTile from "./TeacherRecommendationTile";
import Typography from "@material-ui/core/Typography";
import { TeacherFilterContext } from "./TeacherFilterProvider";

interface Props {}

const TeacherPosts: React.FC<Props> = props => {
    const [teacherSalaries, setteacherSalaries] = useState();
    const [teacherRecommendations, setteacherRecommendations] = useState();

    const [teacherFilters, setTeacherFilters] = useContext(TeacherFilterContext);

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

    let allTypePosts: any = [];

    for (let key in teacherSalaries) {
        if (teacherFilters.salary === true) allTypePosts.push(teacherSalaries[key]);
    }

    for (let key in teacherRecommendations) {
        if (teacherFilters.recommendation === true) allTypePosts.push(teacherRecommendations[key]);
    }

    return (
        <React.Fragment>
            <Typography variant="h5">Tanárok mondták</Typography>
            {teacherRecommendations &&
                teacherSalaries &&
                allTypePosts.map((post: any) => {
                    if (post.salary) {
                        return <TeacherSalaryTile key={post.id} post={post} />;
                    } else return <TeacherRecommendationTile key={post.id} post={post} />;
                })}
        </React.Fragment>
    );
};

export default TeacherPosts;
