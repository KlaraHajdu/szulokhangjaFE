import React, { useContext } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { TeacherFilterContext } from "./TeacherFilterProvider";

interface Props {}

const TeacherFilterChecks: React.FC<Props> = () => {
    const [teacherFilters, setTeacherFilters] = useContext(TeacherFilterContext);

    // const [recommendation, setRecommendation] = React.useState(true);

    const [salary, setSalary] = React.useState(false);

    const handleChangeIsRecommendationSelected = () => {
        setTeacherFilters({ ...teacherFilters, recommendation: !teacherFilters.recommendation });
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
                    />
                }
                label="Anyagi megbecsülés"
            />
        </React.Fragment>
    );
};

export default TeacherFilterChecks;
