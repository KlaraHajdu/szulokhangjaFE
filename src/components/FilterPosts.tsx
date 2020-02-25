import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridGap: theme.spacing(3)
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: "center",
            color: theme.palette.text.secondary,
            whiteSpace: "nowrap",
            marginBottom: theme.spacing(1)
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

    const [positive, setPositive] = React.useState(false);

    const [negative, setNegative] = React.useState(false);

    const [material, setMaterial] = React.useState(false);

    const [personal, setPersonal] = React.useState(false);

    const classes = useStyles();

    const handleParentChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
        // event.target.checked === true
        //     ? setState({ ...state, IsTeacherSelected: false })
        //     : setState({ ...state, IsTeacherSelected: true });
        console.log(parent);
        setParent({ IsParentSelected: event.target.checked });
        handleToggleParentTeacher("IsParentSelected");
        console.log(parent);
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

    //Ez a szintaxis valamiért nem triggelerődik itt ha két nyíllal adom át az eventet. Ugyanez fent nem gond.
    // const handleChangeIsPositiveSelected = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log("Positive state" + positive);
    //     console.log("Event target" + event.target.checked);
    //     setPositive(event.target.checked);
    // };

    const handleChangeIsPositiveSelected = () => {
        console.log("positive triggered");
        setPositive(!positive);
    };

    const handleChangeIsNegativeSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNegative(!negative);
    };

    const handleChangeIsMaterialSelected = () => {
        console.log("Material handler called");
        setMaterial(!material);
    };

    const handleChangeIsPersonalSelected = () => {
        console.log("Personal handler called");
        setPersonal(!personal);
    };
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item lg={2}>
                    <Paper className={classes.paper}>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={parent.IsParentSelected}
                                        onChange={handleParentChange()}
                                        value="IsParentSelected"
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
                                    />
                                }
                                label="Tanárok posztjai"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultChecked={positive}
                                        onChange={handleChangeIsPositiveSelected}
                                        value="IsPositive"
                                        id="PositiveCheckBox"
                                    />
                                }
                                label="Dícsérő posztok"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={negative}
                                        onChange={handleChangeIsNegativeSelected}
                                        id="NegativeCheckBox"
                                        value="IsNegative"
                                    />
                                }
                                label="Panaszkodó posztok"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={personal}
                                        onChange={handleChangeIsPersonalSelected}
                                        value="IsPersonal"
                                    />
                                }
                                label="Személyi feltételek"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={material}
                                        onChange={handleChangeIsMaterialSelected}
                                        value="IsMaterial"
                                    />
                                }
                                label="Tárgyi feltételek"
                            />
                        </FormGroup>
                    </Paper>
                </Grid>
                <Grid item lg={10}>
                    <Paper className={classes.paper}>xs=4</Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default FilterPosts;
