import React, { useContext } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { ParentFilterContext } from "./ParentFilterProvider";

interface Props {}

const ParentFilterChecks: React.FC<Props> = () => {
    const [parentFilters, setParentFilters] = useContext(ParentFilterContext);

    const handleChangeIsPersonalNegativeSelected = () => {
        setParentFilters({ ...parentFilters, personalNegative: !parentFilters.personalNegative });
    };

    const handleChangeIsMaterialNegativeSelected = () => {
        setParentFilters({ ...parentFilters, materialNegative: !parentFilters.materialNegative });
    };

    const handleChangeIsPersonalPositiveSelected = () => {
        setParentFilters({ ...parentFilters, personalPositive: !parentFilters.personalPositive });
    };

    return (
        <React.Fragment>
            <Typography>Dícsérő posztok</Typography>

            <FormControlLabel
                style={{ marginLeft: "0" }}
                control={
                    <Checkbox
                        checked={parentFilters.personalPositive}
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
                        checked={parentFilters.personalNegative}
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
                        checked={parentFilters.materialNegative}
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
