import { Card, Row, Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom";
import "../resources/css/aboutus.css";

const About = () => {
  return (
    <div>
      <div class="container-fluid" id="bodyGradient">
        <div class="px-4 py-5 text-center text-white">
          <img class="d-block mx-auto mb-4" src="https://dummyimage.com/350x200/ffffff/00c9b8.png&text=QA+CINEMA" alt="QA Cinema Logo" />
          <h1 class="display-5 fw-bold">About Us</h1>
          <div class="col-lg-6 mx-auto">
            <h3 class="display-5 fw-bold text-center">TEAM VALOR</h3>
            <p class="lead mb-4">Find out about the members behind QA Cinema</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="/contactus">
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Contact QA Cinema</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="aboutUsBody">
        <div class="container">
          <Row className="pt-5">
            <Col className="mx-1">
              <Card className="text-white glassCard">
                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/90899013?v=4" alt="Fraser Github Profile Pic" className="mx-auto mt-4" style={{ height: "6em", width: "6em", borderRadius: "50%" }} />
                <Card.Body>
                  <Card.Title className="text-center">Fraser Smith</Card.Title>
                  <Card.Text>
                    <h6 class="text-center">Scrum Master</h6>
                    Programming experience derived from Python programming in physics research.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <a href="https://github.com/Fraser-A-N-Smith" target="_blank" rel="noreferrer">
                    <BsGithub size={28} className="mx-2" />
                  </a>
                  <MdEmail size={28} className="mx-2" />
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mx-1">
              <Card className="text-white glassCard">
                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/90904963?v=4" alt="Kieran Github Profile Pic" className="mx-auto mt-4" style={{ height: "6em", width: "6em", borderRadius: "50%" }} />
                <Card.Body>
                  <Card.Title className="text-center text-de">Kieran Goodinson</Card.Title>
                  <Card.Text>
                    <h6 class="text-center">Role</h6>
                    Short description about yourself
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <a href="https://github.com/Kieran0507" target="_blank" rel="noreferrer">
                    <BsGithub size={28} className="mx-2" />
                  </a>
                  <MdEmail size={28} className="mx-2" />
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mx-1">
              <Card className="text-white glassCard">
                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/37118596?v=4" alt="Jonathan Github Profile Pic" className="mx-auto mt-4" style={{ height: "6em", width: "6em", borderRadius: "50%" }} />
                <Card.Body>
                  <Card.Title className="text-center">Jonathan Rabaja</Card.Title>
                  <Card.Text>
                    <h6 class="text-center">Role</h6>
                    Short description about yourself
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <a href="https://github.com/RyuujiAkira/" target="_blank" rel="noreferrer">
                    <BsGithub size={28} className="mx-2" />
                  </a>
                  <MdEmail size={28} className="mx-2" />
                </Card.Footer>
              </Card>
            </Col>
          </Row>

          <Row className="my-5 pb-5">
            <Col className="mx-1">
              <Card className="text-white glassCard">
                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/91898581?v=4" alt="=Junathan Github Profile Pic" className="mx-auto mt-4" style={{ height: "6em", width: "6em", borderRadius: "50%" }} />
                <Card.Body>
                  <Card.Title className="text-center">Junathan Abraham-Odukale</Card.Title>
                  <Card.Text>
                    <h6 class="text-center">Role</h6>
                    Short description about yourself
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <a href="https://github.com/junathana23" target="_blank" rel="noreferrer">
                    <BsGithub size={28} className="mx-2" />
                  </a>
                  <MdEmail size={28} className="mx-2" />
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mx-1">
              <Card className="text-white glassCard">
                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/91898623?v=4" alt="Adam Github Profile Pic" className="mx-auto mt-4" style={{ height: "6em", width: "6em", borderRadius: "50%" }} />
                <Card.Body>
                  <Card.Title className="text-center">Adam Ateye</Card.Title>
                  <Card.Text>
                    <h6 class="text-center">Role</h6>
                    Short description about yourself
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <a href="https://github.com/Adam-Ateye" target="_blank" rel="noreferrer">
                    <BsGithub size={28} className="mx-2" />
                  </a>
                  <MdEmail size={28} className="mx-2" />
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mx-1">
              <Card className="text-white glassCard">
                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/91898546?v=4" alt="Jonathan Github Profile Pic" className="mx-auto mt-4" style={{ height: "6em", width: "6em", borderRadius: "50%" }} />
                <Card.Body>
                  <Card.Title className="text-center">Sarah Khan</Card.Title>
                  <Card.Text>
                    <h6 class="text-center">Role</h6>
                    Short description about yourself
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <a href="https://github.com/sarahkgh" target="_blank" rel="noreferrer">
                    <BsGithub size={28} className="mx-2" />
                  </a>
                  <MdEmail size={28} className="mx-2" />
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div >
  );
};

export default About;
