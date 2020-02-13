import React, { useRef } from "react";
import { apiPost, parentPostsRoute } from "../static/util/util";
import { ParentPost } from "../static/util/dataInterfaces";

const ParentPostForm: React.FC = () => {
  const postMessage = useRef<HTMLTextAreaElement | null>(null);
  const messageType = useRef<HTMLSelectElement | null>(null);

  const sendFormData = (data: ParentPost): void => {
    apiPost(parentPostsRoute + "add", data, (response: ParentPost) => {
      console.log(response);
    });
  };

  const createNewParentPost = (): any => {
    let parentPost = {
      message: "",
      positiveMessage: true,
      commentType: "",
      location: ""
    };

    if (
      postMessage &&
      postMessage.current &&
      messageType &&
      messageType.current
    ) {
      parentPost.message = postMessage.current.value;
      parentPost.commentType = messageType.current.value;
      parentPost.location = "Zala";

      return parentPost;
    }
    return;
  };

  return (
    <div className="container-fluid" style={{ margin: 20, padding: 30 }}>
      <div className="box">
        <select ref={messageType}>
          <option value="Personal" selected>
            Személyi feltételekről szeretnék írni
          </option>
          <option value="Material">Tárgyi feltételekről szeretnék írni</option>
        </select>
        <p>Vélemény </p>
        <textarea
          ref={postMessage}
          style={{ width: "100%" }}
          name="message"
        ></textarea>
        <div>
          <button
            className="button is-info"
            onClick={() => sendFormData(createNewParentPost())}
          >
            Elküldöm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParentPostForm;
