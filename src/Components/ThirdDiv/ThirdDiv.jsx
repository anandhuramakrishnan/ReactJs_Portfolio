import React, { useState } from "react";
import "../ThirdDiv/ThirdDiv.css";
const ThirdDiv = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const clickhandler = () => {
    // Implement your logic to send the message or perform any desired action here
    console.log("Phone Number:", phoneNumber);
    console.log("Message:", message);
    // Clear the input fields after sending
    setPhoneNumber("");
    setMessage("");
  };
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
      <div className="phonenumber">
        <label htmlFor="label1 :" className="label1">Phone-no :</label>
      <textarea name="phone" id="phone" cols="1 " rows="1"   placeholder="Enter phone number" maxlength="15" ></textarea>
      </div>
      <div className="msg">
      <label htmlFor="label2 :" className="label2">Message :</label>
        <textarea name="msg" id="textarea" cols="30" rows="10"></textarea>
        
      </div>
      <button className="btn" onClick={clickhandler}> submit </button>
    
     </div>
    </div>
  );
};

export default ThirdDiv;
