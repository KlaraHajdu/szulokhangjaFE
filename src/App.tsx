import React from "react";
import PageTitle from "./components/PageTitle";
import IndexBody from "./components/IndexBody";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ParentPostForm from "./components/ParentPostForm";
import TeacherRecommendationForm from "./components/TeacherRecommendationForm";
import { ParentPostProvider } from "./components/ParentPostProvider";
import Statistics from "./components/Statistics";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <ParentPostProvider>
          <PageTitle />
          <Switch>
            <Route path="/" exact component={IndexBody} />
            <Route path="/parent-post" exact component={ParentPostForm} />
            <Route
              path="/teacher-post"
              exact
              component={TeacherRecommendationForm}
            />
            <Route path="/statistics/:id" component={Statistics} />
          </Switch>
        </ParentPostProvider>
      </div>
    </Router>
  );
};

export default App;
