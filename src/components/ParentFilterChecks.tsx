import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

interface Props {}

const ParentFilterChecks: React.FC<Props> = () => {
    const [personalNegative, setPersonalNegative] = React.useState(false);

    const [materialNegative, setMaterialNegative] = React.useState(false);

    const [personalPositive, setPersonalPositive] = React.useState(true);

    const handleChangeIsPersonalNegativeSelected = () => {
        setPersonalNegative(!personalNegative);
    };

    const handleChangeIsMaterialNegativeSelected = () => {
        setMaterialNegative(!materialNegative);
    };

    const handleChangeIsPersonalPositiveSelected = () => {
        setPersonalPositive(!personalPositive);
    };

    return (
        <React.Fragment>
            <Typography>Dícsérő posztok</Typography>

            <FormControlLabel
                style={{ marginLeft: "0" }}
                control={
                    <Checkbox
                        checked={personalPositive}
                        onChange={handleChangeIsPersonalPositiveSelected}
                        value="IsPersonalPositive"
                    />
                }
                label="Személyi feltételek"
            />
            <Divider variant="fullWidth" />
            <Typography>Panaszkodó posztok</Typography>
            <FormControlLabel
                style={{ marginLeft: "0" }}
                control={
                    <Checkbox
                        checked={personalNegative}
                        onChange={handleChangeIsPersonalNegativeSelected}
                        value="IsPersonalNegative"
                    />
                }
                label="Személyi feltételek"
            />
            <FormControlLabel
                style={{ marginLeft: "0" }}
                control={
                    <Checkbox
                        checked={materialNegative}
                        onChange={handleChangeIsMaterialNegativeSelected}
                        value="IsMaterialNegative"
                    />
                }
                label="Tárgyi feltételek"
            />
        </React.Fragment>
    );
};

export default ParentFilterChecks;
