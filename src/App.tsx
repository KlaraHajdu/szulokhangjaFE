import React from "react";
import PageTitle from "./components/PageTitle";
import Parent from "./components/Parent";
import ParentPostForm from "./components/ParentPostForm";
import IndexBody from "./components/IndexBody";

const App: React.FC = () => {
  return (
    <div className="App">
      <PageTitle />

      <Parent />
      <ParentPostForm />
    </div>
  );
};

export default App;
