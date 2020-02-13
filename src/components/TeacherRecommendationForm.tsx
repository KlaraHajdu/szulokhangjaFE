import React, { useRef, useContext, useState } from "react";
import { apiPost, teacherRecPostsRoute } from "../static/util/util";
import { TeacherRecommendation } from "../static/util/dataInterfaces";
import { Link } from "react-router-dom";
import { TeacherRecommendationContext } from "./TeacherRecommendationProvider";

const TeacherRecommendationForm: React.FC = () => {
  const [message, setMeassage] = useState();
  const [name, setName] = useState();
  // const [teacherRecommendations, setTeacherRecommendations] = useContext(
  //   TeacherRecommendationContext
  // );

  const sendFormData = (data: TeacherRecommendation): void => {
    apiPost(
      teacherRecPostsRoute + "add",
      data,
      (response: TeacherRecommendation) => {
        //   setTeacherRecommendations((previousPosts: TeacherRecommendation[]) => [
        //     ...previousPosts,
        //    response
        //  ]);
        console.log(response);
      }
    );
  };

  const createNewTeacherRecommendation = (): any => {
    let teacherRecommendation = {
      name: name,
      recommendation: message,
      location: "Budapest"
    };

    return teacherRecommendation;
  };

  const updateMessage = (e: any) => {
    setMeassage(e.target.value);
  };

  const updateName = (e: any) => {
    setName(e.target.value);
  };

  return (
    <div className="container-fluid" style={{ margin: 20, padding: 30 }}>
      <div className="box">
        <p>Név</p>
        <textarea
          onChange={updateName}
          style={{ width: "30%" }}
          name="Name"
        ></textarea>
        <p> Javaslat </p>
        <textarea
          onChange={updateMessage}
          style={{ width: "100%" }}
          name="message"
        ></textarea>
        <div>
          <Link to="/">
            <button
              className="button is-info"
              onClick={() => sendFormData(createNewTeacherRecommendation())}
            >
              Elküldöm
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherRecommendationForm;
