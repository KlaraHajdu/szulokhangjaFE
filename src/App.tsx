import React from "react";
import PageTitle from "./components/PageTitle";
import IndexBody from "./components/IndexBody";

const App: React.FC = () => {
  return (
    <div className="App">
      <PageTitle />
      <IndexBody />
    </div>
  );
};

export default App;
