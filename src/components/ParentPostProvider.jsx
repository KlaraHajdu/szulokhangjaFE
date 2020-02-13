import React, { useState } from "react";

export const ParentPostContext = React.createContext();

export const ParentPostProvider = props => {
  const [parentPosts, setParentPosts] = useState();

  return (
    <ParentPostContext.Provider value={[parentPosts, setParentPosts]}>
      {props.children}
    </ParentPostContext.Provider>
  );
};
