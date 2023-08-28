import React from "react";
import Css from "../assets/Css.png"
import Html from "../assets/Html.png"
import Javascript from "../assets/Javascript.png"
import Physics from "../assets/Physics.png"
import Rails from "../assets/Rails.jpg"
import Ruby from "../assets/Ruby.png"
import "../Stack/Stack.css"

function Stack(){
return(
    <div className="container text-center">
        <div className="row row-cols-4">
            <div className="col">
                <div className="icon">
                    <img
                        alt="cyber-security"
                        src={Html}
                        className="icon"
                    />
                </div>
            </div>
            <div className="col">
                <div className="icon">
                    <img
                        alt="cyber-security"
                        src={Css}
                        className="icon"
                    />
                </div>
            </div>
            <div className="col">
                <div className="icon">
                    <img
                        alt="cyber-security"
                        src={Javascript}
                        className="icon"
                    />
                </div>
            </div>
            <div className="col">
                <div className="icon">
                    <img
                        alt="cyber-security"
                        src={Physics}
                        className="icon"
                    />
                </div>
            </div>
            <div className="col">
                <div className="icon">
                    <img
                        alt="cyber-security"
                        src={Rails}
                        className="icon"
                    />
                </div>
            </div>
            <div className="col">
                <div className="icon">
                    <img
                        alt="cyber-security"
                        src={Ruby}
                        className="icon"
                    />
                </div>
            </div>
        </div>
    </div>
)
}

export default Stack