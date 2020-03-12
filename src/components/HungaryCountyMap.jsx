import React, { useState, useContext, useEffect, useRef } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import {
    mapBoxApiToken,
    apiGet,
    parentPostsRoute,
    teacherRecPostsRoute,
    teacherSalPostsRoute
} from "../static/util/util";
import * as counties from "../static/geojson/countiesGeo.json";
import { ParentPostContext } from "./ContextProviders/ParentPostProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { TeacherRecommendationContext } from "./ContextProviders/TeacherRecommendationProvider";
import { LocationFilterContext } from "./ContextProviders/LocationFilterProvider";
import { Link } from "react-router-dom";
import { TeacherSalaryContext } from "./ContextProviders/TeacherSalaryProvider";

const HungaryCountyMap = props => {
    const [viewPort, setviewPort] = useState({
        latitude: 47.1013467403556,
        longitude: 19.210350283613785,
        width: "99vw",
        height: "90vh",
        zoom: 6.5,
        pitch: 20
    });

    const [parentPosts, setParentPosts] = useContext(ParentPostContext);
    const [teacherRecs, setTeacherRecs] = useContext(TeacherRecommendationContext);
    const [teacherSalaries, setteacherSalaries] = useContext(TeacherSalaryContext);
    const [locationFilter, setLocationFilter] = useContext(LocationFilterContext);

    useEffect(() => {
        const fetch = () => {
            apiGet(parentPostsRoute + "listall", jsonResponse => {
                setParentPosts(jsonResponse);
            });
            apiGet(teacherRecPostsRoute + "listall", jsonresponse => {
                setTeacherRecs(jsonresponse);
            });
            apiGet(teacherSalPostsRoute + "listall", jsonResponse => {
                setteacherSalaries(jsonResponse);
                console.log(teacherSalaries);
            });
        };
        fetch();
    }, []);

    const getNumberOfPostForRegion = region => {
        let numberOfPosts = 0;

        for (let i = 0; i < parentPosts.length; i++) {
            if (
                parentPosts[i].location === region ||
                (parentPosts[i].location === "Budapest" && region === "Pest megye")
            ) {
                numberOfPosts++;
            }
        }

        for (let i = 0; i < teacherRecs.length; i++) {
            if (
                teacherRecs[i].location === region ||
                (teacherRecs[i].location === "Budapest" && region === "Pest megye")
            ) {
                numberOfPosts++;
            }
        }

        for (let i = 0; i < teacherSalaries.length; i++) {
            if (
                teacherSalaries[i].location === region ||
                (teacherSalaries[i].location === "Budapest" && region === "Pest megye")
            ) {
                numberOfPosts++;
            }
        }

        if (numberOfPosts > 0) {
            return `${numberOfPosts} DB`;
        } else {
            return;
        }
    };

    const setZoom = zoom => {
        if (zoom < 6.7) {
            return 6.7;
        } else {
            return zoom;
        }
    };

    const setLatitudeBoundaries = (latitude, zoom) => {
        if (zoom > 6.7) {
            if (latitude > 48.27440611924083) {
                return 48.27440611924083;
            } else if (latitude < 45.72973941244668) {
                return 45.72973941244668;
            } else {
                return latitude;
            }
        } else {
            return 47.213467403556;
        }
    };

    const setLongitudeBoundaries = (longitude, zoom) => {
        if (zoom > 6.7) {
            if (longitude < 16.096828856526308) {
                return 16.096828856526308;
            } else if (longitude > 22.856966519292534) {
                return 22.856966519292534;
            } else {
                return longitude;
            }
        } else {
            return 19.410350283613785;
        }
    };

    return (
        <ReactMapGL
            {...viewPort}
            mapboxApiAccessToken={mapBoxApiToken}
            mapStyle="mapbox://styles/hexxar/ck71sd4cq07w31iqz9wd81650"
            onViewportChange={viewPort => {
                setviewPort({
                    latitude: setLatitudeBoundaries(viewPort.latitude, viewPort.zoom),
                    longitude: setLongitudeBoundaries(viewPort.longitude, viewPort.zoom),
                    width: "99vw",
                    height: "90vh",
                    zoom: setZoom(viewPort.zoom)
                });
            }}
        >
            {parentPosts &&
                teacherRecs &&
                teacherSalaries &&
                counties.features.map(county => (
                    <Marker
                        key={county.properties.id}
                        latitude={county.geometry.coordinates[1]}
                        longitude={county.geometry.coordinates[0]}
                    >
                        <Link
                            to="/filter"
                            className="marker-container icon has-text-danger is-large has-text-centered"
                            onClick={() => setLocationFilter(county.properties.name)}
                        >
                            <FontAwesomeIcon icon={faSchool} size="2x"></FontAwesomeIcon>

                            <p className="has-text-danger is-large has-text-weight-bold has-text-centered">
                                {getNumberOfPostForRegion(county.properties.name)}
                            </p>
                        </Link>
                    </Marker>
                ))}
        </ReactMapGL>
    );
};

export default HungaryCountyMap;
