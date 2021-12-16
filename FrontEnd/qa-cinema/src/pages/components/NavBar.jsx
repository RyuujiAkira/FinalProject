import { Navbar, Nav, Container, NavDropdown, Col } from "react-bootstrap";
import Home from "../Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Listings from "../Listings";
import NewListings from "../NewListings";
import About from "../About";
import Bookings from "../Bookings";
import Discussion from "../Discussion";
import AroundUs from "../AroundUs";
import ContactUs from "../ContactUs";
import FindUs from "../FindUs";
import Screens from "../Screens";
import Classifications from "../Classifications";

import Payment from "../Payment";

import OpeningTimes from "../OpeningTimes";

const NavBar = () => {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Col>
              <Navbar.Brand as={Link} to={"/"}>
                <img
                  src="https://i.ibb.co/7QzfRQ6/QACINEMATRANS.png"
                  id="navLogo"
                  alt="LOGO"
                />
                QA Cinema
              </Navbar.Brand>
            </Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link className="mx-2" as={Link} to={"/"}>
                  Home
                </Nav.Link>

                <NavDropdown className="mx-2" title="Movies" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/listings"}>
                    Listings
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/upcoming"}>
                    Upcoming
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/booking"}>
                    Bookings
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/discussion"}>
                    Discussions
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link className="mx-2" as={Link} to={"/about"}>
                  About
                </Nav.Link>
                <Nav.Link className="mx-2" as={Link} to={"/screens"}>
                  Screens
                </Nav.Link>
                <Nav.Link className="mx-2" as={Link} to={"/contactus"}>
                  Contact Us
                </Nav.Link>
                <Nav.Link className="mx-2" as={Link} to={"/findUs"}>
                  Find Us
                </Nav.Link>
                <Nav.Link className="mx-2" as={Link} to={"/aroundUs"}>
                  Around Us
                </Nav.Link>
                <Nav.Link className="mx-2" as={Link} to={"/openingTimes"}>
                  Opening Times
                </Nav.Link>
                <Nav.Link className="mx-2" as={Link} to={"/classifications"}>
                  Classifications
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/listings">
            <Listings />
          </Route>
          <Route path="/upcoming">
            <NewListings />
          </Route>

          <Route path="/upcoming">
            <NewListings />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/screens">
            <Screens />
          </Route>
          <Route path="/booking">
            <Bookings />
          </Route>
          <Route path="/discussion">
            <Discussion />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>

          <Route path="/classifications">
            <Classifications />
          </Route>

          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/findUs">
            <FindUs />
          </Route>
          <Route path="/aroundUs">
            <AroundUs />
          </Route>
          <Route path="/openingTimes">
            <OpeningTimes />
          </Route>
          <Route path="/classifications">
            <Classifications />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;
