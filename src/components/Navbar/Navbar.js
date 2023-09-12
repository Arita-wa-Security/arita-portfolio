import React from "react"
// import {Navlink} from "react-router-dom"
import "../Navbar/Navbar.css"

function Navbar(){
 return (
   //
   <nav className="navbar navbar-expand-lg navbar-light bg-info p-3">
     <div className="container-fluid">
       <a className="navbar-brand" href="#">
         Arita Sam
       </a>
       <button
         className="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarNavDropdown"
         aria-controls="navbarNavDropdown"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>

       <div className=" collapse navbar-collapse" id="navbarNavDropdown">
         <ul className="navbar-nav ms-auto ">
           <li className="nav-item">
             <a className="nav-link mx-2 active" aria-current="page" href="#about">
               Home
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link mx-2" href="#about">
               Resume
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link mx-2" href="#project">
               Projects
             </a>
           </li>
           <li className="nav-item dropdown">
             <a
               className="nav-link mx-2 dropdown-toggle"
               href="#contact"
               id="navbarDropdownMenuLink"
               role="button"
               data-bs-toggle="dropdown"
               aria-expanded="false"
             >
               Links
             </a>
             {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
               <li>
                 <a className="dropdown-item" href="#">
                   Blog
                 </a>
               </li>
               
               <li>
                 <a className="dropdown-item" href="#">
                   Contact Me
                 </a>
               </li>
             </ul> */}
           </li>
         </ul>
         
       </div>
     </div>
   </nav>
 );
}

export default Navbar