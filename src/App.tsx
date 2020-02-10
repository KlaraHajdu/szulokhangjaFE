import React, { useState, useEffect } from "react";
import Csoki from "./components/Csoki";

const App: React.FC = () => {
  const [time, setTime] = useState(0);
  const [photo, setPhoto] = useState("");
  const [kakao, setCsoki] = useState("csokii");

  const fetchCsoki = () => {};

  return (
    <div className="App">
      <p>{time}</p>
      <input></input>
      <button onClick={() => setTime(time + 14)}></button>
      <button onClick={() => setCsoki("csoki2")}>Csokisetter</button>
      <Csoki csoki={kakao} />
    </div>
  );
};

export default App;
