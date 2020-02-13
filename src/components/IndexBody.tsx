import React from "react";
import ParentPostForm from "./ParentPostForm";

interface Props {}

const IndexBody: React.FC<Props> = () => {
  return (
    <div className="container box">
      <div className="tile is-ancestor">
        <ParentPostForm />
      </div>
    </div>
  );
};

export default IndexBody;
