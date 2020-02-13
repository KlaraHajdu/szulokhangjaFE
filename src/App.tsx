import React from "react";
import PageTitle from "./components/PageTitle";
import IndexBody from "./components/IndexBody";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ParentPostForm from "./components/ParentPostForm";
import { ParentPostProvider } from "./components/ParentPostProvider";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <ParentPostProvider>
          <PageTitle />
          <Switch>
            <Route path="/" exact component={IndexBody} />
            <Route path="/parent-post" exact component={ParentPostForm} />
            <Route path="/teacher-post" />
          </Switch>
        </ParentPostProvider>
      </div>
    </Router>
  );
};

export default App;
