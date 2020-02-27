import React, { useEffect, useContext, useState } from "react";
import StreamChart from "./ChartComponents/StreamChart";
import DateBarChart from "./ChartComponents/DateBarChart";
import { Link, useParams } from "react-router-dom";
import { ParentPostContext } from "./ParentPostProvider";
import {
  apiGet,
  parentPostsRoute,
  teacherRecPostsRoute,
  teacherSalPostsRoute
} from "../static/util/util";
import { dataMaker } from "../static/util/dataFormatter";

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

  let total = [...teacherSalaries, ...teacherRecommendations, ...parentPst];

  dataMaker("3", total);

  let renderStat = id => {
    switch (id) {
      case "1":
        return <StreamChart data={dataMaker("1", total)}></StreamChart>;
        break;
      case "2":
        return <DateBarChart data={dataMaker("2", total)}></DateBarChart>;
        break;
      case "3":
        return <DateBarChart data={dataMaker("3", total)}></DateBarChart>;
        break;
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

          <a href="/statistics/3" className="button is-link is-fullwidth">
            3
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
