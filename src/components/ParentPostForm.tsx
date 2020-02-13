import React, { useRef, useContext, useState } from "react";
import { apiPost, parentPostsRoute } from "../static/util/util";
import { ParentPost } from "../static/util/dataInterfaces";
import { Link } from "react-router-dom";
import { ParentPostContext } from "./ParentPostProvider";

const ParentPostForm: React.FC = () => {
  const [message, setMeassage] = useState();
  const [postType, setPostType] = useState();
  const [parentPosts, setParentPosts] = useContext(ParentPostContext);

  const sendFormData = (data: ParentPost): void => {
    apiPost(parentPostsRoute + "add", data, (response: ParentPost) => {
      setParentPosts((previousPosts: ParentPost[]) => [
        ...previousPosts,
        response
      ]);
    });
  };

  const createNewParentPost = (): any => {
    let parentPost = {
      message: message,
      positiveMessage: true,
      commentType: postType,
      location: "Zala"
    };

    return parentPost;
  };

  const updateMessage = (e: any) => {
    setMeassage(e.target.value);
  };

  const updatePostType = (e: any) => {
    setPostType(e.target.value);
  };

  return (
    <div className="container-fluid" style={{ margin: 20, padding: 30 }}>
      <div className="box">
        <select onChange={updatePostType}>
          <option value="Personal" selected>
            Személyi feltételekről szeretnék írni
          </option>
          <option value="Material">Tárgyi feltételekről szeretnék írni</option>
        </select>
        <p>Vélemény </p>
        <textarea
          onChange={updateMessage}
          style={{ width: "100%" }}
          name="message"
        ></textarea>
        <div>
          <Link to="/">
            <button
              className="button is-info"
              onClick={() => sendFormData(createNewParentPost())}
            >
              Elküldöm
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ParentPostForm;
