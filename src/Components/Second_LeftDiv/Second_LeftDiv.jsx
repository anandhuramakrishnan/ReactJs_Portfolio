import React from "react";
import "../Second_LeftDiv/Second_LeftDiv.css";
import img from "../Second_LeftDiv/my-img.jpeg";
const Second_LeftDiv = () => {
  return (
    <div className="second_leftdiv">
      <div className="photo">
        <img src={img} />
      </div>
      <p className="name"> Anandhu Ramakrishnan</p>
      <p className='course'> B.Tech in Computer Science </p>
      <p className="course"> & 
      Engineering</p>
      <a href="https://www.cemunnar.ac.in/">College of Engineering Munnar </a>
    </div>
  );
};

export default Second_LeftDiv;
