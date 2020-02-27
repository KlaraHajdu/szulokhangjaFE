import React, { useRef, useContext, useState } from "react";
import { apiPost, teacherRecPostsRoute } from "../static/util/util";
import { TeacherRecommendation } from "../static/util/dataInterfaces";
import { Link } from "react-router-dom";
import { TeacherRecommendationContext } from "./TeacherRecommendationProvider";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Typography, FormGroup } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const TeacherRecommendationForm: React.FC = () => {
    const [message, setMeassage] = useState();
    const [name, setName] = useState();
    const [location, setLocation] = useState();
    const [teacherRecommendations, setTeacherRecommendations] = useContext(TeacherRecommendationContext);

    const sendFormData = (data: TeacherRecommendation): void => {
        apiPost(teacherRecPostsRoute + "add", data, (response: TeacherRecommendation) => {
            setTeacherRecommendations((previousPosts: TeacherRecommendation[]) => [...previousPosts, response]);
            console.log(response);
        });
    };

    const createNewTeacherRecommendation = (): any => {
        let teacherRecommendation = {
            name: name,
            recommendation: message,
            location: location
        };

        return teacherRecommendation;
    };

    const updateMessage = (e: any) => {
        setMeassage(e.target.value);
    };

    const updateName = (e: any) => {
        setName(e.target.value);
    };

    const updateLocation = (e: any) => {
        setLocation(e.target.value);
    };

    const inputLabel = React.useRef<HTMLLabelElement>(null);

    return (
        <Container maxWidth="md" style={{ marginTop: "100px" }}>
            <Box>
                <Typography style={{ padding: "10px" }}>
                    Töltse fel észrevételeit az oktatással kapcsolatban. A pozitív üzenetek inspirálnak, míg a panaszok
                    megmutatják, miként kellene javítani az oktatás helyzetén.
                </Typography>
                <FormGroup>
                    <FormControl variant="outlined" style={{ padding: "10px" }}>
                        <TextField
                            id="outlined-basic"
                            label="Név"
                            variant="outlined"
                            onChange={updateName}
                            name="name"
                        ></TextField>
                    </FormControl>
                    <FormControl variant="outlined" style={{ padding: "10px" }}>
                        <InputLabel ref={inputLabel} id="tema-label">
                            Bejelentés helye
                        </InputLabel>
                        <Select onChange={updateLocation}>
                            <option value="Budapest">Budapest</option>
                            <option value="Bács-Kiskun">Bács-Kiskun megye</option>
                            <option value="Baranya">Baranya megye</option>
                            <option value="Békés">Békés megye</option>
                            <option value="Borsod-Abaúj-Zemplén">Borsod-Abaúj-Zemplén megye</option>
                            <option value="Csongrád">Csongrád megye</option>
                            <option value="Fejér">Fejér megye</option>
                            <option value="Győr-Moson-Sopron">Győr-Moson-Sopron megye</option>
                            <option value="Hajdú-Bihar">Hajdú-Bihar megye</option>
                            <option value="Heves">Heves megye</option>
                            <option value="Jász-Nagykun-Szolnok">Jász-Nagykun-Szolnok megye</option>
                            <option value="Komárom-Esztergom">Komárom-Esztergom megye</option>
                            <option value="Nógrád">Nógrád megye</option>
                            <option value="Pest">Pest megye</option>
                            <option value="Somogy">Somogy megye</option>
                            <option value="Szabolcs-Szatmár-Bereg">Szabolcs-Szatmár-Bereg megye</option>
                            <option value="Tolna">Tolna megye</option>
                            <option value="Vas">Vas megye</option>
                            <option value="Veszprém">Veszprém megye</option>
                            <option value="Zala">Zala megye</option>
                        </Select>
                    </FormControl>
                    <TextField
                        id="outlined-basic"
                        label="Vélemény"
                        variant="outlined"
                        onChange={updateMessage}
                        name="message"
                        style={{ padding: "10px" }}
                    ></TextField>
                    <div>
                        <Link to="/">
                            <Button onClick={() => sendFormData(createNewTeacherRecommendation())}>Elküldöm</Button>
                        </Link>
                    </div>
                </FormGroup>
            </Box>
        </Container>
    );
};

export default TeacherRecommendationForm;
