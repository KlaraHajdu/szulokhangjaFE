import React, { useState, createContext } from "react";

export const TeacherFilterContext = createContext();

export const TeacherFilterProvider = props => {
    const [TeacherFilters, setTeacherFilters] = useState({
        salary: false,
        recommendation: true
    });

    return (
        <TeacherFilterContext.Provider value={[TeacherFilters, setTeacherFilters]}>
            {props.children}
        </TeacherFilterContext.Provider>
    );
};
