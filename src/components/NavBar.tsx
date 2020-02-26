import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import amber from "@material-ui/core/colors/amber";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow: 1
        }
    })
);

const NavBar = () => {
    const classes = useStyles();

    const color = amber[500];

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" style={{ color: "#ffffff" }}>
                            Szülők Hangja
                        </Link>
                    </Typography>

                    <Link to="/parent-post" style={{ color: "#ffffff" }}>
                        <Button color="inherit">Szülők</Button>
                    </Link>
                    <Link to="/teacher-post">
                        <Button color="inherit" style={{ color: "#ffffff" }}>
                            Tanárok
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
