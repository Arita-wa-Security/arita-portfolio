import React from "react";
import "../Body/body.css";
import Resume from "./Resume/Resume"
import Projects from "./Projects/Projects";
import Work from "../Body/assets/Work.jpg"

function Body(){
 return (
  <>
   <div class="d-flex justify-content-evenly" id="Body">
     <div id="initial-content">
       <p>Hey there, I am</p>
       <h1>Arita Sam</h1>
       <h5>Software Developer</h5>
     </div>

     <div id="work">
       <img
         alt="cyber-security"
         src={Work}
         id="work"
       />
     </div>
     
   </div>
   <Resume />
   <Projects />


   </>
 );
}

export default Body