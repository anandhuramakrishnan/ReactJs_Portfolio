import React from "react";
import "../ThirdDiv/ThirdDiv.css";
const ThirdDiv = () => {
  return (
    <div className="thirddiv">
      <p className="head3">PROJECTS </p>

      <div className="cards">
      <div className="card1"></div>
        <div className="card2"></div>
        <div className="card3"></div>
        <div className="card4"></div>
        
      </div>
      <div className="project_names">
        <div className="name1"> project1</div>
        <div className="name2"> project1</div>
        <div className="name3"> project1</div>
        <div className="name4"> project1</div>
      </div>
     
     <div className="textfield">
      <div className="nb">you can give direct msg to me here. i will contact you as soon as possible. </div>
      
        <textarea name="msg" id="txtarea" cols="30" rows="10"></textarea>
    
     </div>
    </div>
  );
};

export default ThirdDiv;
