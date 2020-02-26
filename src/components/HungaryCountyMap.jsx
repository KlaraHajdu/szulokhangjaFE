import React, { useState, useContext, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { mapBoxApiToken, apiGet, parentPostsRoute, teacherRecPostsRoute } from "../static/util/util";
import * as counties from "../static/geojson/countiesGeo.json";
import { ParentPostContext } from "./ParentPostProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { TeacherRecommendationContext } from "./TeacherRecommendationProvider";

function HungaryCountyMap(props) {
    const [viewPort, setviewPort] = useState({
        latitude: 47.1013467403556,
        longitude: 19.210350283613785,
        width: "50em",
        height: "50em",
        zoom: 6.8
    });

    const [parentPosts, setParentPosts] = useContext(ParentPostContext);
    const [teacherRecs, setTeacherRecs] = useContext(TeacherRecommendationContext);

    useEffect(() => {
        const fetch = () => {
            apiGet(parentPostsRoute + "listall", jsonResponse => {
                setParentPosts(jsonResponse);
            });
            apiGet(teacherRecPostsRoute + "listall", jsonresponse => {
                setTeacherRecs(jsonresponse);
            });
        };
        fetch();
    }, [parentPosts, setParentPosts]);

    const getNumberOfPostForRegion = region => {
        let numberOfPosts = 0;

        for (let i = 0; i < parentPosts.length; i++) {
            if (parentPosts[i].location === region) {
                numberOfPosts++;
            }
        }

        for (let i = 0; i < teacherRecs.length; i++) {
            if (teacherRecs[i].location === region) {
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
        if (zoom < 6.9) {
            return 6.9;
        } else {
            return zoom;
        }
    };

    const setLatitudeBoundaries = (latitude, zoom) => {
        console.log(zoom);
        if (zoom > 6.9) {
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
        if (zoom > 6.9) {
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
                    width: "100vw",
                    height: "90vh",
                    zoom: setZoom(viewPort.zoom)
                });
            }}
        >
            {parentPosts &&
                teacherRecs &&
                counties.features.map(county => (
                    <Marker
                        key={county.properties.id}
                        latitude={county.geometry.coordinates[1]}
                        longitude={county.geometry.coordinates[0]}
                    >
                        <a className="icon has-text-danger is-large">
                            <FontAwesomeIcon icon={faSchool} size="2x" title="ASD"></FontAwesomeIcon>
                        </a>
                        <span className="has-text-danger is-large has-text-weight-bold">
                            {getNumberOfPostForRegion(county.properties.name)}
                        </span>
                    </Marker>
                ))}
        </ReactMapGL>
    );
}

export default HungaryCountyMap;
