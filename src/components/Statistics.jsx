import React, { useEffect, useContext, useState } from "react";
import StreamChart from "./ChartComponents/StreamChart";
import BarChart from "./ChartComponents/BarChart";
import { Link, useParams } from "react-router-dom";
import { ParentPostContext } from "./ParentPostProvider";
import {
  apiGet,
  parentPostsRoute,
  teacherRecPostsRoute,
  teacherSalPostsRoute
} from "../static/util/util";
import { dataMaker } from "../static/util/dataFormatter";
import _ from "lodash";

let testdata = [
  {
    Raoul: 64,
    Josiane: 141,
    Marcel: 174,
    René: 34,
    Paul: 58,
    Jacques: 167
  },
  {
    Raoul: 135,
    Josiane: 106,
    Marcel: 184,
    René: 26,
    Paul: 194,
    Jacques: 68
  },
  {
    Raoul: 195,
    Josiane: 58,
    Marcel: 111,
    René: 19,
    Paul: 52,
    Jacques: 90
  },
  {
    Raoul: 148,
    Josiane: 11,
    Marcel: 175,
    René: 15,
    Paul: 148,
    Jacques: 36
  },
  {
    Raoul: 160,
    Josiane: 185,
    Marcel: 105,
    René: 33,
    Paul: 46,
    Jacques: 133
  },
  {
    Raoul: 91,
    Josiane: 127,
    Marcel: 109,
    René: 77,
    Paul: 111,
    Jacques: 34
  },
  {
    Raoul: 45,
    Josiane: 155,
    Marcel: 45,
    René: 110,
    Paul: 169,
    Jacques: 70
  },
  {
    Raoul: 122,
    Josiane: 21,
    Marcel: 137,
    René: 125,
    Paul: 155,
    Jacques: 110
  },
  {
    Raoul: 173,
    Josiane: 113,
    Marcel: 97,
    René: 183,
    Paul: 188,
    Jacques: 30
  }
];

let testdata2 = [
  {
    country: "AD",
    "hot dog": 180,


  },
  {
    country: "AE",
    "hot dog": 109,

  }
];

function Statistics() {
  const { id } = useParams();

  const [teacherSalaries, setteacherSalaries] = useState([]);
  const [teacherRecommendations, setteacherRecommendations] = useState([]);
  const [parentPst, setParentPst] = useState([]);


  // Promise.all([getch url 1, fetch url 2, fetch url 3]).then(function(values) {
  //  values.json .... / process
  // });


  useEffect(() => {
    const fetch = () => {
      apiGet(teacherSalPostsRoute + "listall", jsonresponse => {
        setteacherSalaries(jsonresponse);

      });
      apiGet(teacherRecPostsRoute + "listall", jsonresponse => {
        setteacherRecommendations(jsonresponse);

      });
      apiGet(parentPostsRoute + "listall", jsonresponse => {
        setParentPst(jsonresponse);

      });
    };
    fetch();
  }, []);

  let total = [...teacherSalaries,...teacherRecommendations,...parentPst]

  dataMaker("3",total)

  let renderStat = id => {
    switch (id) {
      case "1":
        return <StreamChart data={testdata}></StreamChart>;
        break;
      case "2":
        return <BarChart data={testdata2}></BarChart>;
        break;
      case "3":
        return <BarChart data={dataMaker("3",total)}></BarChart>
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <div class="columns">
        <div className="column is-one-fifth">
          <a href="/statistics/1" className="button is-link is-fullwidth">
            1
          </a>

          <a href="/statistics/2" className="button is-link is-fullwidth">
            2
          </a>
        </div>
      </div>

      <div
        className="column is-four-fifths"
        style={{ backgroundColor: "red", height: "600px" }}
      >
        {renderStat(id)}
      </div>
    </React.Fragment>
  );
}

export default Statistics;
