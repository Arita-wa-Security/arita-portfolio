import React from "react"
// import {Navlink} from "react-router-dom"
import "../Footer/Footer.css"
// import { library, icon } from '@fortawesome/fontawesome-svg-core'
// import { faCamera } from '@fortawesome/free-solid-svg-icons'

function Footer(){
  // library.add(faCamera)
    return (
      
      <>
        {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
        <div className="container my-5" id="footer">
          <footer
            className="text-center text-lg-start"
            id="start"
          >
            <div className="container d-flex justify-content-center py-5">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-floating mx-2"
                id="facebook"
              >
                <i className="fa fa-linkedin"></i>
              </button>
              {/* <button
                type="button"
                className="btn btn-primary btn-lg btn-floating mx-2"
                id="youtube"
                
              >
                <i className="fa fa-youtube"></i>
              </button> */}
              <button
                type="button"
                className="btn btn-primary btn-lg btn-floating mx-2"
                id="instagram"
                
              >
                <i className="fa fa-github"></i>
              </button>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-floating mx-2"
                id="twitter"
                
              >
                <i className="fa fa-twitter"></i>
              </button>
            </div>

            {/* <!-- Copyright --> */}
            <div
              className="text-center text-white p-3"
              // style="background-color: rgba(0, 0, 0, 0.2);"
            >
              © 2023 Copyright:Arita Sam
              
            </div>
            {/* <!-- Copyright --> */}
          </footer>
        </div>
        {/* <!-- End of .container --> */}
      </>
    );

}

export default Footer