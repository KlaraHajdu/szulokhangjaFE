import React, { useState, useContext, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { mapBoxApiToken, apiGet, parentPostsRoute } from "../static/util/util";
import * as counties from "../static/geojson/countiesGeo.json";
import { ParentPostContext } from "./ParentPostProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

function HungaryCountyMap(props) {
    const [viewPort, setviewPort] = useState({
        latitude: 47.1817585,
        longitude: 19.5060937,
        width: 1600,
        height: 800,
        zoom: 6.8
    });

    const [parentPosts, setParentPosts] = useContext(ParentPostContext);

    useEffect(() => {
        const fetch = () => {
            apiGet(parentPostsRoute + "listall", jsonResponse => {
                setParentPosts(jsonResponse);
            });
        };
        fetch();
    }, []);

    const getNumberOfPostForRegion = region => {
        let numberOfPosts = 0;

        for (let i = 0; i < parentPosts.length; i++) {
            if (parentPosts[i].location === region) {
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
        if (zoom < 6.8) {
            return 6.8;
        } else {
            return zoom;
        }
    };

    const setLatitudeBoundaries = (latitude, zoom) => {
        console.log(zoom);
        if (zoom > 6.8) {
            if (latitude > 48.27440611924083) {
                return 48.27440611924083;
            } else if (latitude < 45.72973941244668) {
                return 45.72973941244668;
            } else {
                return latitude;
            }
        } else {
            return 47.1817585;
        }
    };

    const setLongitudeBoundaries = (longitude, zoom) => {
        if (zoom > 6.8) {
            if (longitude < 16.096828856526308) {
                return 16.096828856526308;
            } else if (longitude > 22.856966519292534) {
                return 22.856966519292534;
            } else {
                return longitude;
            }
        } else {
            return 19.5060937;
        }
    };

    return (
        <div className="container">
            <ReactMapGL
                {...viewPort}
                mapboxApiAccessToken={mapBoxApiToken}
                mapStyle="mapbox://styles/hexxar/ck71sd4cq07w31iqz9wd81650"
                onViewportChange={viewPort => {
                    setviewPort({
                        latitude: setLatitudeBoundaries(viewPort.latitude, viewPort.zoom),
                        longitude: setLongitudeBoundaries(viewPort.longitude, viewPort.zoom),
                        width: 1200,
                        height: 600,
                        zoom: setZoom(viewPort.zoom)
                    });
                }}
            >
                {parentPosts &&
                    counties.features.map(county => (
                        <Marker
                            key={county.properties.id}
                            latitude={county.geometry.coordinates[1]}
                            longitude={county.geometry.coordinates[0]}
                        >
                            <a className="icon has-text-danger is-large">
                                <FontAwesomeIcon icon={faSchool} size="2x" title="ASD"></FontAwesomeIcon>
                            </a>
                            <span className="has-text-danger is-large is-bold">
                                {getNumberOfPostForRegion(county.properties.name)}
                            </span>
                        </Marker>
                    ))}
            </ReactMapGL>
        </div>
    );
}

export default HungaryCountyMap;
