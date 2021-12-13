import React from "react";

const Footer = () => {
  return (
    <div class="main-footer">
      <div class="container">
        <div class="row">
          <div class="col">
            <h4>QA Cinema Inc</h4>

            <br></br>
            <ul class="list-unstyled">
              <li>8, St James's Bldg</li>
              <li>61-95 Oxford St,</li>
              <li>Manchester M1 6FQ</li>
            </ul>
          
        </div>

        <div class="col">
         <ul>
           <li><a href="http://localhost:3000/">Home Page</a></li> 
           <li> <a href="http://localhost:3000/about">About Us</a></li>
           <li> <a href="http://localhost:3000/contactus">Contact Us</a></li>
          </ul>
          </div>
        </div>

        
        <hr />
        <div class="row">
          <p class="col-sm">
            &copy;{new Date().getFullYear()} QA CINEMA INC | All right reserved
            | Terms Of Service | Privacy
          </p>
        </div>
      </div>
      {/* <a href="http://localhost:3000/">Home Page</a>
        <a href="http://localhost:3000/about">About Us</a>
        <a href="http://localhost:3000/contactus">Contact Us</a>  */}
    </div>
  );
};

export default Footer;
