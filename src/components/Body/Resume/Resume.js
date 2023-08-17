import React from "react";
import "../Resume/Resume.css";
import SamCV from "../assets/SamCV.pdf"

function Resume(){
 return (
   <div class="d-flex justify-content-evenly" id="resume">
     <div id="about">
      <p>Who is Arita??</p>
       <p>I'm fueled by curisioty and a thirst for growth.
        Always seeking new challenges to grow. With each step forward
        , I'm not only enhancing my technical skills but also cultivating the mindset of 
        a lifelong learner.
        Click <a href={SamCV} onClick={()=>window.open(SamCV)}>here</a> to get a copy of my resume...
       </p>
     </div>
   </div>
 );
}

export default Resume