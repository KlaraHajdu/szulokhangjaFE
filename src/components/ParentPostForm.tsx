import React, { Component } from "react";
import { render } from "@testing-library/react";

//interface Props {}

class ParentPostForm extends React.Component {

  
    render() {
     
      return (
      <div className="container-fluid" style = {{margin:20, padding:30}}>

      <div className="box">

      <form>
      <select>
        <option value="Personal" selected>Személyi feltételekről szeretnék írni</option>
        <option value="Material" >Tárgyi feltételekről szeretnék írni</option>
        </select>
        <p>Vélemény </p>
        <textarea style={{width:"100%"}} name="message">
        </textarea>
        <div>
        <button className="button is-info">Elküldöm</button>
        </div>
      </form>
      </div>
      </div>
    
      );
}
}

export default ParentPostForm;
