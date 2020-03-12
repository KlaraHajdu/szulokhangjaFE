import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import ParentFilterChecks from "./ParentFilterChecks";
import TeacherFilterChecks from "./TeacherFilterChecks";
import ParentPosts from "../ParentPosts";
import TeacherPosts from "../TeacherPosts";
import LocationFilter from "../Filters/LocationFilter";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            margin: "0 0 0 10px"
        },
        divider: {
            margin: theme.spacing(2, 0)
        }
    })
);

interface Props {}

const FilterPosts: React.FC<Props> = () => {
    const [parent, setParent] = React.useState({
        IsParentSelected: true
    });

    const [teacher, setTeacher] = React.useState({
        IsTeacherSelected: false
    });

    const classes = useStyles();

    const handleParentChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
        setParent({ IsParentSelected: event.target.checked });
        handleToggleParentTeacher("IsParentSelected");
    };

    const handleTeacherChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
        setTeacher({ IsTeacherSelected: event.target.checked });
        handleToggleParentTeacher("IsTeacherSelected");
    };

    const handleToggleParentTeacher = (name: string) => {
        if (name === "IsTeacherSelected") {
            teacher.IsTeacherSelected === true
                ? setParent({ IsParentSelected: true })
                : setParent({ IsParentSelected: false });
        } else if (name === "IsParentSelected") {
            parent.IsParentSelected === true
                ? setTeacher({ IsTeacherSelected: true })
                : setTeacher({ IsTeacherSelected: false });
        }
    };

    return (
        <div>
            <Grid container spacing={3} className={classes.container}>
                <Grid item lg={2}>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={parent.IsParentSelected}
                                    onChange={handleParentChange()}
                                    value="IsParentSelected"
                                    color="secondary"
                                />
                            }
                            label="Szülők posztjai"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={teacher.IsTeacherSelected}
                                    onChange={handleTeacherChange()}
                                    value="IsTeacherSelected"
                                    color="secondary"
                                />
                            }
                            label="Tanárok posztjai"
                        />
                        <Divider variant="fullWidth" />
                        {parent.IsParentSelected && <ParentFilterChecks />}
                        {teacher.IsTeacherSelected && <TeacherFilterChecks />}
                        <Divider variant="fullWidth" />
                        <LocationFilter />
                        <Divider variant="fullWidth" />
                    </FormGroup>
                </Grid>
                <Grid item lg={9}>
                    {parent.IsParentSelected && <ParentPosts />}
                    {teacher.IsTeacherSelected && <TeacherPosts />}
                </Grid>
            </Grid>
        </div>
        // </ParentFilterContext.Provider>
    );
};

export default FilterPosts;
