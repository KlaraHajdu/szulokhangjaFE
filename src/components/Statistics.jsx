import React, { useEffect, useContext, useState } from "react";
import StreamChart from "./ChartComponents/StreamChart";
import DateBarChart from "./ChartComponents/DateBarChart";
import { Link, useParams } from "react-router-dom";
import {
  apiGet,
  parentPostsRoute,
  teacherRecPostsRoute,
  teacherSalPostsRoute
} from "../static/util/util";
import { dataMaker } from "../static/util/dataFormatter";
import {Button, ButtonGroup, Container} from '@material-ui/core'

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
        <ButtonGroup>
              <Link to="/statistics/1"><Button size="large"  color="primary">Idovonal</Button></Link> 
              <Link to="/statistics/2"><Button size="large"  color="primary">Hely szerint</Button></Link>
              <Link to="/statistics/3"><Button size="large"  color="primary">Ido szerint</Button></Link>
        </ButtonGroup>

      <Container maxWidth="lg" style={{height:"70vh"}}>
        {renderStat(id)}
      </Container>
    </React.Fragment>
  );
}

export default Statistics;
