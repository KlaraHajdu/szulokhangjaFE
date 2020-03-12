import React from "react";
import PageTitle from "./components/Navigation/PageTitle";
import IndexBody from "./components/IndexBody";
import FilterPosts from "./components/Filters/FilterPosts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ParentPostForm from "./components/Forms/ParentPostForm";
import TeacherRecommendationForm from "./components/Forms/TeacherRecommendationForm";
import { ParentPostProvider } from "./components/ContextProviders/ParentPostProvider";
import { TeacherRecommendationProvider } from "./components/ContextProviders/TeacherRecommendationProvider";
import { ParentFilterProvider } from "./components/ContextProviders/ParentFilterProvider";
import { TeacherFilterProvider } from "./components/ContextProviders/TeacherFilterProvider";
import { LocationFilterProvider } from "./components/ContextProviders/LocationFilterProvider";
import Statistics from "./components/Statistics";
import LoginPage from "./components/Forms/LoginPage";
import { MuiThemeProvider, createMuiTheme, PaletteColorOptions } from "@material-ui/core";
import { amber } from "@material-ui/core/colors";
import "./static/style/App.css";
import { light } from "@material-ui/core/styles/createPalette";
import { TeacherSalaryProvider } from "./components/ContextProviders/TeacherSalaryProvider";

export const theme = createMuiTheme({
    palette: {
        primary: { main: amber[500], light: "#ffe082" },
        secondary: { main: "#8307ff" }
    }
});

const App: React.FC = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <div className="App">
                    <ParentFilterProvider>
                        <LocationFilterProvider>
                            <TeacherFilterProvider>
                                <ParentPostProvider>
                                    <TeacherRecommendationProvider>
                                        <TeacherSalaryProvider>
                                            <PageTitle />
                                            <Switch>
                                                <Route path="/" exact component={IndexBody} />
                                                <Route path="/parent-post" exact component={ParentPostForm} />
                                                <Route
                                                    path="/teacher-post"
                                                    exact
                                                    component={TeacherRecommendationForm}
                                                />
                                                <Route path="/login" exact component={LoginPage} />
                                                <Route path="/filter" component={FilterPosts} />
                                                <Route path="/statistics/:id" component={Statistics} />
                                            </Switch>
                                        </TeacherSalaryProvider>
                                    </TeacherRecommendationProvider>
                                </ParentPostProvider>
                            </TeacherFilterProvider>
                        </LocationFilterProvider>
                    </ParentFilterProvider>
                </div>
            </Router>
        </MuiThemeProvider>
    );
};

export default App;
