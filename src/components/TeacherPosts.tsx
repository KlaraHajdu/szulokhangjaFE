import React, { useContext } from "react";
import { TeacherSalary, TeacherRecommendation } from "../static/util/dataInterfaces";
import TeacherSalaryTile from "./TeacherSalaryTile";
import TeacherRecommendationTile from "./TeacherRecommendationTile";
import Typography from "@material-ui/core/Typography";
import { TeacherFilterContext } from "./ContextProviders/TeacherFilterProvider";
import { LocationFilterContext } from "./ContextProviders/LocationFilterProvider";
import { TeacherSalaryContext } from "./ContextProviders/TeacherSalaryProvider";
import { TeacherRecommendationContext } from "./ContextProviders/TeacherRecommendationProvider";

interface Props {}

const TeacherPosts: React.FC<Props> = props => {
    const [teacherSalaries, setteacherSalaries] = useContext(TeacherSalaryContext);
    const [teacherRecommendations, setteacherRecommendations] = useContext(TeacherRecommendationContext);
    const [teacherFilters, setTeacherFilters] = useContext(TeacherFilterContext);
    const [locationFilters, setlocationFilters] = useContext(LocationFilterContext);

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

    console.log(teacherRecommendations);
    console.log(teacherSalaries);

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
