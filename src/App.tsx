import React from "react";
import PageTitle from "./components/PageTitle";
import IndexBody from "./components/IndexBody";
import FilterPosts from "./components/FilterPosts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ParentPostForm from "./components/ParentPostForm";
import TeacherRecommendationForm from "./components/TeacherRecommendationForm";
import { ParentPostProvider } from "./components/ParentPostProvider";
import { ParentFilterProvider } from "./components/ParentFilterProvider";
import { TeacherFilterProvider } from "./components/TeacherFilterProvider";
import Statistics from "./components/Statistics";

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <ParentFilterProvider>
                    <TeacherFilterProvider>
                        <ParentPostProvider>
                            <PageTitle />
                            <Switch>
                                <Route path="/" exact component={IndexBody} />
                                <Route path="/filter" component={FilterPosts} />
                                <Route path="/parent-post" exact component={ParentPostForm} />
                                <Route path="/teacher-post" exact component={TeacherRecommendationForm} />
                                <Route path="/statistics/:id" component={Statistics} />
                            </Switch>
                        </ParentPostProvider>
                    </TeacherFilterProvider>
                </ParentFilterProvider>
            </div>
        </Router>
    );
};

export default App;
