import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Home from "../Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Listings from "../Listings";
import About from "../About";
import FindUs from "../FindUs";
// import MyReactBingMap from "./BingMap";
const NavBar = () => {
  //   Routing is done in here, Add extra pages as Routes at the bottom. NavBar also needs editing

  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={"/home"}>
              Qa Cinema
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/home"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/listings"}>
                  Listings
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to={"/findUs"}>
                  Find Us
                </Nav.Link>
                {/* maybe move these around or delete the dropdown? */}
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/listings">
            <Listings />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/findUs">
            <FindUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;
