import React from "react";
import "../Body/body.css";

function Body(){
 return (
   <div class="d-flex justify-content-evenly">
     <div id="initial-content">
       <p>Hey there, I am</p>
       <h1>Arita Sam</h1>
       <h5>Software Developer</h5>
     </div>

     <div id="image">
       <img
         alt="cyber-security"
         src="https://static.vecteezy.com/system/resources/thumbnails/002/883/755/small/shield-with-padlock-icon-in-personal-data-security-cyber-concept-photo.jpg"
       />
     </div>
   </div>
 );
}

export default Body