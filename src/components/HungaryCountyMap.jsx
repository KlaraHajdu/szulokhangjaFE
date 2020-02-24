import React, { useEffect, useState } from "react";
import ReactMapGL from "react-map-gl";
import { mapBoxApiToken } from "../static/util/util";

function HungaryCountyMap(props) {
    const [viewPort, setviewPort] = useState({
        latitude: 47.1817585,
        longitude: 19.5060937,
        width: 1200,
        height: 600,
        zoom: 6.8
    });

    const setZoom = zoom => {
        if (zoom < 6.8) {
            return 6.8;
        } else {
            return zoom;
        }
    };

    return (
        <div className="container">
            <ReactMapGL
                {...viewPort}
                mapboxApiAccessToken={mapBoxApiToken}
                mapStyle="mapbox://styles/hexxar/ck70lone822yy1iqanwflyh3e"
                onViewportChange={viewPort => {
                    setviewPort({
                        latitude: 47.1817585,
                        longitude: 19.5060937,
                        width: 1200,
                        height: 600,
                        zoom: setZoom(viewPort.zoom)
                    });
                }}
            ></ReactMapGL>
        </div>
    );
}

export default HungaryCountyMap;
