import React, { useContext } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { TeacherFilterContext } from "../ContextProviders/TeacherFilterProvider";

interface Props {}

const TeacherFilterChecks: React.FC<Props> = () => {
    const [teacherFilters, setTeacherFilters] = useContext(TeacherFilterContext);

    const handleChangeIsRecommendationSelected = () => {
        setTeacherFilters({
            ...teacherFilters,
            recommendation: !teacherFilters.recommendation
        });
    };

    const handleChangeIsSalarySelected = () => {
        setTeacherFilters({ ...teacherFilters, salary: !teacherFilters.salary });
    };

    return (
        <React.Fragment>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={teacherFilters.recommendation}
                        onChange={handleChangeIsRecommendationSelected}
                        value="IsRecommendation"
                        color="secondary"
                    />
                }
                label="Javaslatok"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={teacherFilters.salary}
                        onChange={handleChangeIsSalarySelected}
                        id="SalaryCheckBox"
                        value="IsSalary"
                        color="secondary"
                    />
                }
                label="Anyagi megbecsülés"
            />
        </React.Fragment>
    );
};

export default TeacherFilterChecks;
