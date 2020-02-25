import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";

interface Props {}

const ParentFilterChecks: React.FC<Props> = () => {

    const [positive, setPositive] = React.useState(true);

    const [negative, setNegative] = React.useState(false);

    const [material, setMaterial] = React.useState(false);

    const [personal, setPersonal] = React.useState(true);

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
        <React.Fragment>
    
        <FormControlLabel
        control={
            <Checkbox
                checked={positive}
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
            <Divider variant="fullWidth" />
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

        </React.Fragment>
    )
};

export default ParentFilterChecks;
