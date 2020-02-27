import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(3)
        },
        title: {
            flexGrow: 1
        }
    })
);

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        style={{ color: "#ffffff" }}
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" style={{ color: "#ffffff" }}>
                            Szülők Hangja
                        </Link>
                    </Typography>
                    <Link to="/statistics/1">
                        <Button color="inherit" style={{ color: "#ffffff" }}>
                            Statisztika
                        </Button>
                    </Link>
                    <Link to="/filter">
                        <Button color="inherit" style={{ color: "#ffffff" }}>
                            Bejelentések
                        </Button>
                    </Link>
                    <DropDownMenu />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
