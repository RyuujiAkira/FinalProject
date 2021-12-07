import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Home from "../Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Listings from "../newListings";
import Upcoming from "../Upcoming";
import About from "../About";
import Bookings from "../Bookings";
import Discussions from "../Discussion";
import GettingThere from "../GettingThere";

const NavBar = () => {
  //   Routing is done in here, Add extra pages as Routes at the bottom. NavBar also needs editing

  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>
              Qa Cinema
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
                {/* maybe move these around or delete the dropdown? */}
                <NavDropdown title="Movies" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/newlistings"}>
                    newListings
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/upcoming"}>
                    Upcoming
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/booking"}>
                    Bookings
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/discussions"}>
                    Discussions
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <Nav.Link as={Link} to={"/gettingThere"}>
                  Find Us
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"}>
                  About
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
          <Route path="/newlistings">
            <newListings />
          </Route>
          <Route path="/upcoming">
            <Upcoming />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/booking">
            <Bookings />
          </Route>
          <Route path="/discussions">
            <Discussions />
          </Route>
          <Route path="/gettingThere">
            <GettingThere />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;
