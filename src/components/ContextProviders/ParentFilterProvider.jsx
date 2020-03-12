import React, { useState, createContext } from "react";

export const ParentFilterContext = createContext();

export const ParentFilterProvider = props => {
    const [parentFilters, setParentFilters] = useState({
        personalNegative: false,
        personalPositive: true,
        materialNegative: true
    });

    return (
        <ParentFilterContext.Provider value={[parentFilters, setParentFilters]}>
            {props.children}
        </ParentFilterContext.Provider>
    );
};
