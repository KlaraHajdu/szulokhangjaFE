import React, { useState, useEffect, useContext } from "react";
import { apiGet, teacherRecPostsRoute, teacherSalPostsRoute } from "../static/util/util";
import { TeacherSalary, TeacherRecommendation } from "../static/util/dataInterfaces";
import TeacherSalaryTile from "./TeacherSalaryTile";
import TeacherRecommendationTile from "./TeacherRecommendationTile";
import Typography from "@material-ui/core/Typography";
import { TeacherFilterContext } from "./TeacherFilterProvider";
import { LocationFilterContext } from "./LocationFilterProvider";

interface Props {}

const TeacherPosts: React.FC<Props> = props => {
    const [teacherSalaries, setteacherSalaries] = useState();
    const [teacherRecommendations, setteacherRecommendations] = useState();

    const [teacherFilters, setTeacherFilters] = useContext(TeacherFilterContext);
    const [locationFilters, setlocationFilters] = useContext(LocationFilterContext);

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
        let current = teacherSalaries[key];
        if (teacherFilters.salary === true && (locationFilters === "all" || current.location === locationFilters))
            allTypePosts.push(current);
    }

    for (let key in teacherRecommendations) {
        let current = teacherRecommendations[key];
        if (
            teacherFilters.recommendation === true &&
            (locationFilters === "all" || current.location === locationFilters)
        )
            allTypePosts.push(current);
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
