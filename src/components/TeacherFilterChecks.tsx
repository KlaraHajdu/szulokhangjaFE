import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

interface Props {}

const TeacherFilterChecks: React.FC<Props> = () => {
    const [recommendation, setRecommendation] = React.useState(true);

    const [salary, setSalary] = React.useState(false);

    const handleChangeIsRecommendationSelected = () => {
        setRecommendation(!recommendation);
    };

    const handleChangeIsSalarySelected = () => {
        setSalary(!salary);
    };

    return (
        <React.Fragment>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={recommendation}
                        onChange={handleChangeIsRecommendationSelected}
                        value="IsRecommendation"
                    />
                }
                label="Javaslatok"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={salary}
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
