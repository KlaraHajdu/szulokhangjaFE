import React, { ReactElement } from "react";

interface Props {}

function Parent(): ReactElement {
  return (

<div className= "container is-fluid" style = {{margin:20, padding:30}}>
    <div className="box">
<h5 className="title is-5">Szülőknek</h5>
<div style = {{marginBottom:20}} >
    Töltsön fel pozitív és negatív tapasztalatokat az oktatással kapcsolatban. 
    A pozitív üzenetek inspirálnak, míg a panaszok megmutatják, miként kellene javítani az oktatás helyzetén. 
</div>

    <button className="button is-info">Feltöltés</button>
    </div>
</div>


  )

}

  export default Parent;
