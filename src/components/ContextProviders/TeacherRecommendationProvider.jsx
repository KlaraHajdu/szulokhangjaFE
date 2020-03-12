import React, { useState } from "react";

export const TeacherRecommendationContext = React.createContext();

export const TeacherRecommendationProvider = props => {
    const [teacherRecommendations, setTeacherRecommendations] = useState();

    return (
        <TeacherRecommendationContext.Provider value={[teacherRecommendations, setTeacherRecommendations]}>
            {props.children}
        </TeacherRecommendationContext.Provider>
    );
};
