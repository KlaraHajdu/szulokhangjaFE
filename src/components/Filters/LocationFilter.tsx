import React, { useContext } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { LocationFilterContext } from "../ContextProviders/LocationFilterProvider";

const LocationFilter = () => {
    const [locationFilters, setlocationFilters] = useContext(LocationFilterContext);

    return (
        <FormControl variant="outlined" style={{ padding: "10px" }}>
            <InputLabel>Bejelentés helye</InputLabel>
            <Select onChange={e => setlocationFilters(e.target.value)} defaultValue={locationFilters}>
                <option value="all">Minden bejelentés</option>
                <option value="Budapest">Budapest</option>
                <option value="Bács-Kiskun">Bács-Kiskun megye</option>
                <option value="Baranya">Baranya megye</option>
                <option value="Békés">Békés megye</option>
                <option value="Borsod-Abaúj-Zemplén">Borsod-Abaúj-Zemplén megye</option>
                <option value="Csongrád">Csongrád megye</option>
                <option value="Fejér">Fejér megye</option>
                <option value="Győr-Moson-Sopron">Győr-Moson-Sopron megye</option>
                <option value="Hajdú-Bihar">Hajdú-Bihar megye</option>
                <option value="Heves">Heves megye</option>
                <option value="Jász-Nagykun-Szolnok">Jász-Nagykun-Szolnok megye</option>
                <option value="Komárom-Esztergom">Komárom-Esztergom megye</option>
                <option value="Nógrád">Nógrád megye</option>
                <option value="Pest">Pest megye</option>
                <option value="Somogy">Somogy megye</option>
                <option value="Szabolcs-Szatmár-Bereg">Szabolcs-Szatmár-Bereg megye</option>
                <option value="Tolna">Tolna megye</option>
                <option value="Vas">Vas megye</option>
                <option value="Veszprém">Veszprém megye</option>
                <option value="Zala">Zala megye</option>
            </Select>
        </FormControl>
    );
};

export default LocationFilter;
