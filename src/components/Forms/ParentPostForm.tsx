import React, { useContext, useState } from "react";
import { apiPost, parentPostsRoute } from "../../static/util/util";
import { ParentPost } from "../../static/util/dataInterfaces";
import { Link } from "react-router-dom";
import { ParentPostContext } from "../ContextProviders/ParentPostProvider";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Typography, FormGroup } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const ParentPostForm: React.FC = () => {
    const [message, setMeassage] = useState();
    const [commentType, setCommentType] = useState();
    const [parentPosts, setParentPosts] = useContext(ParentPostContext);
    const [isPositive, setIsPositive] = useState();
    const [location, setLocation] = useState();

    const sendFormData = (data: ParentPost): void => {
        apiPost(parentPostsRoute + "add", data, (response: ParentPost) => {
            setParentPosts((previousPosts: ParentPost[]) => [...previousPosts, response]);
        });
    };

    console.log(useContext(ParentPostContext));

    const createNewParentPost = (): any => {
        let parentPost = {
            message: message,
            positiveMessage: isPositive,
            commentType: commentType,
            location: location
        };

        console.log(parentPost);
        return parentPost;
    };

    const updateMessage = (e: any) => {
        setMeassage(e.target.value);
    };

    const updateCommentType = (e: any) => {
        setCommentType(e.target.value);
    };

    const updateIsPositive = (e: any) => {
        if (e.target.value === "true") setIsPositive(true);
        else setIsPositive(false);
    };

    const updateLocation = (e: any) => {
        setLocation(e.target.value);
    };

    const inputLabel = React.useRef<HTMLLabelElement>(null);

    return (
        <Container maxWidth="md" style={{ marginTop: "100px" }}>
            <Box>
                <Typography style={{ padding: "10px" }}>
                    Töltsön fel pozitív és negatív tapasztalatokat az oktatással kapcsolatban. A pozitív üzenetek
                    inspirálnak, míg a panaszok megmutatják, miként kellene javítani az oktatás helyzetén.
                </Typography>
                <FormGroup>
                    <FormControl variant="outlined" style={{ padding: "10px" }}>
                        <InputLabel ref={inputLabel} id="tema-label">
                            Bejelentés témája
                        </InputLabel>
                        <Select onChange={updateCommentType}>
                            <option value="Personal" selected>
                                Személyi feltételekről szeretnék írni
                            </option>
                            <option value="Material">Tárgyi feltételekről szeretnék írni</option>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" style={{ padding: "10px" }}>
                        <InputLabel ref={inputLabel} id="tipus-label">
                            Bejelentés típusa
                        </InputLabel>
                        <Select onChange={updateIsPositive}>
                            <option value="true" selected disabled={commentType === "Material" ? true : false}>
                                Dícséret
                            </option>
                            <option value="false">Panasz</option>
                        </Select>
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
                            <Button onClick={() => sendFormData(createNewParentPost())}>Elküldöm</Button>
                        </Link>
                    </div>
                </FormGroup>
            </Box>
        </Container>
    );
};

export default ParentPostForm;
