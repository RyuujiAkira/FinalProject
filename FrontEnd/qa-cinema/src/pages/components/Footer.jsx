
import React from 'react';


const Footer = () => {
    return ( <div className="main-footer">
        <div className="container">
            <div className="row">
                <h4>QA Cinema Inc</h4>
                <ul className="list-unstyled">
                    <li>8, St James's Bldg</li>
                    <li>61-95 Oxford St,</li>
                    <li>Manchester M1 6FQ</li>

                </ul>
                </div>
                <div className="column2">

                <div>
                <div className="col">
                <a href="http://localhost:3000/">Home Page</a>
                </div>
            </div>

            <div className="col">
            <a href="http://localhost:3000/about">About Us</a>
            </div>

            <div className="col">
        <a href="http://localhost:3000/contactus">Contact Us</a> 
            </div>
            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} QA CINEMA INC | All right reserved | Terms Of Service | Privacy
                </p>
            </div>
        </div>
         {/* <a href="http://localhost:3000/">Home Page</a>
        <a href="http://localhost:3000/about">About Us</a>
        <a href="http://localhost:3000/contactus">Contact Us</a>  */}
        </div> );
}
 
export default Footer;