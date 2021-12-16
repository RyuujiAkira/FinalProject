import React from "react";
import QaLogo from "../../resources/images/QACINEMATRANS.png";
import { TiSocialTwitter, TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <div class="main-footer mt-5 p-2">
      <div class="container" id="footer-container">
        <div class="row text-center">
          <div class="col-auto">
            <img src={QaLogo} width='100vw' alt="QA Logo" />
          </div>
          <div class="col my-auto">
            <p>Follow us here</p>
            <h3>
              <TiSocialTwitter /> <TiSocialInstagram /> <TiSocialFacebook />
            </h3>
          </div>
          <div class="col-auto my-auto">
            <ul class="my-auto" style={{ listStyleType: 'none' }}>
              <li>
                <a href="http://localhost:3000/">Home</a>
              </li>
              <li>
                <a href="http://localhost:3000/about">About</a>
              </li>
              <li>
                <a href="http://localhost:3000/contactus">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="row text-center">
          <div class="col">
            &copy;{new Date().getFullYear()} QA CINEMA INC | All right reserved
            | Terms Of Service | Privacy | Copyright © 2021
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
