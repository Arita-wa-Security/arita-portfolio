import React from "react";
import "../Body/body.css";
import Resume from "./Resume/Resume"
import Projects from "./Projects/Projects";
// import Work from "../Body/assets/code.jpg"
import Stack from "./Stack/Stack";

function Body(){
 return (
   <>
     <div class="d-flex justify-content-evenly" id="Body">
       <div id="initial-content">
         <h5>
           “I learned that courage was not the absence of fear,
           <br></br>but the triumph over it.
           <br></br>The brave man is not he who does not feel afraid,
           <br></br>but he who conquers that fear.”
           <br></br>
           <br></br>Nelson Mandela
         </h5>
       </div>

       {/* <div id="work">
       <img
         alt="cyber-security"
         src={Work}
         id="work"
       />
     </div> */}
     </div>
     <Resume />
     <Projects />
     <Stack />
   </>
 );
}

export default Body