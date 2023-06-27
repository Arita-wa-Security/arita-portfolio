import React from "react"
import {Navlink} from "react-router-dom"
import "../Footer/Footer.css"

function Footer(){

    return (
      <div>
        <div class="container my-5">
          <footer
            class="text-center text-white"
            
          >
            <div class="container pt-4">
              {/* <!-- Section: Social media --> */}
              <section class="mb-4">
                {/* <!-- Facebook --> */}
                <a
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>

                {/* <!-- Twitter --> */}
                <a
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-twitter"></i>
                </a>

                {/* <!-- Google --> */}
                <a
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-google"></i>
                </a>

                {/* <!-- Instagram --> */}
                <a
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-instagram"></i>
                </a>

                {/* <!-- Linkedin --> */}
                <a
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                {/* <!-- Github --> */}
                <a
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-github"></i>
                </a>
              </section>
              {/* <!-- Section: Social media --> */}
            </div>
            {/* <!-- Grid container --> */}
          </footer>
        </div>
        {/* <!-- End of .container --> */}
      </div>
    );

}

export default Footer