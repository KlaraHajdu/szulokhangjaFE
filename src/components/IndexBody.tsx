import React from "react";
import ParentPosts from "./ParentPosts";
import TeacherPosts from "./TeacherPosts";


interface Props {}

const IndexBody: React.FC<Props> = () => {
  return (
    <div className="container box">
      <div className="tile is-ancestor">
        <ParentPosts />
        <TeacherPosts />
        
      </div>
    </div>
  );
};

export default IndexBody;
