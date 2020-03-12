import React, { createContext, useState } from "react";

export const TeacherSalaryContext = createContext();

export const TeacherSalaryProvider = props => {
    const [teacherSalaries, setteacherSalaries] = useState();

    return (
        <TeacherSalaryContext.Provider value={[teacherSalaries, setteacherSalaries]}>
            {props.children}
        </TeacherSalaryContext.Provider>
    );
};
