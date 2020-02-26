import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { apiPost, loginRoute } from "../static/util/util";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: 200
        }
    }
}));

const LoginPage: React.FC = () => {
    const classes = useStyles();

    const [userName, setuserName] = useState();
    const [passWord, setpassWord] = useState();

    const submitLogin = () => {
        console.log(userName);
        console.log(passWord);
        apiPost(loginRoute, { userName: userName, passWord: passWord }, (response: any) => {
            console.log(response);
        });
    };

    const handleUserNameChange = (e: any) => {
        setuserName(e.target.value);
    };

    const handlePasswordChange = (e: any) => {
        setpassWord(e.target.value);
    };

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleFormSubmit}>
            <TextField id="standard-basic" label="User Name" onChange={handleUserNameChange} />
            <TextField id="filled-basic" label="Password" onChange={handlePasswordChange} />
            <Link to="/county-map">
                <Button variant="outlined" onClick={submitLogin}>
                    Default
                </Button>
            </Link>
        </form>
    );
};

export default LoginPage;
