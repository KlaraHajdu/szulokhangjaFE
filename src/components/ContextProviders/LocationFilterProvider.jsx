import React, { createContext, useState } from "react";

export const LocationFilterContext = createContext();

export const LocationFilterProvider = props => {
    const [locationFilter, setlocationFilter] = useState();

    return (
        <LocationFilterContext.Provider value={[locationFilter, setlocationFilter]}>
            {props.children}
        </LocationFilterContext.Provider>
    );
};
