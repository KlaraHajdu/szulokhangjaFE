import React from "react";
import PageTitle from "./components/PageTitle";
import IndexBody from "./components/IndexBody";
import FilterPosts from "./components/FilterPosts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ParentPostForm from "./components/ParentPostForm";
import TeacherRecommendationForm from "./components/TeacherRecommendationForm";
import { ParentPostProvider } from "./components/ParentPostProvider";
import { TeacherRecommendationProvider } from "./components/TeacherRecommendationProvider";
import { ParentFilterProvider } from "./components/ParentFilterProvider";
import { TeacherFilterProvider } from "./components/TeacherFilterProvider";
import Statistics from "./components/Statistics";
import LoginPage from "./components/LoginPage";
import { MuiThemeProvider, createMuiTheme, PaletteColorOptions } from "@material-ui/core";
import { amber } from "@material-ui/core/colors";
import "./static/style/App.css";
import { light } from "@material-ui/core/styles/createPalette";

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
                        <TeacherFilterProvider>
                            <ParentPostProvider>
                                <TeacherRecommendationProvider>
                                    <PageTitle />
                                    <Switch>
                                        <Route path="/" exact component={IndexBody} />
                                        <Route path="/parent-post" exact component={ParentPostForm} />
                                        <Route path="/teacher-post" exact component={TeacherRecommendationForm} />
                                        <Route path="/login" exact component={LoginPage} />
                                        <Route path="/filter" component={FilterPosts} />
                                        <Route path="/statistics/:id" component={Statistics} />
                                    </Switch>
                                </TeacherRecommendationProvider>
                            </ParentPostProvider>
                        </TeacherFilterProvider>
                    </ParentFilterProvider>
                </div>
            </Router>
        </MuiThemeProvider>
    );
};

export default App;
