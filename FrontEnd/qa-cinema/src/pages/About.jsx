import { Card, Row, Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "../resources/css/aboutus.css";
import qalogo from "../resources/images/QACINEMA.png";

const About = () => {
  return (
    <div>
      <div class="container-fluid" id="bodyGradient">
        <div class="px-4 py-5 text-center text-white">
          <img class="d-block mx-auto mb-4" src={qalogo} alt="QA Cinema Logo" width="10%" />
          <h1 class="display-5 fw-bold">About Us</h1>
          <div class="col-lg-6 mx-auto">
            <h3 class="display-5 fw-bold text-center">TEAM VALOR</h3>
            <p class="lead mb-4">Find out about the members behind QA Cinema</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="/contactus">
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                  Contact QA Cinema
                </button>
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
                <Card.Img
                  variant="top"
                  src="https://avatars.githubusercontent.com/u/90899013?v=4"
                  alt="Fraser Github Profile Pic"
                  className="mx-auto mt-4"
                  style={{ height: "6em", width: "6em", borderRadius: "50%" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">Fraser Smith</Card.Title>
                  <Card.Text>
                    <h6 class="text-center">Scrum Master</h6>
                    Programming experience derived from Python programming in physics research.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <a
                    href="https://github.com/Fraser-A-N-Smith"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub size={28} className="mx-2" />
                  </a>
                  <MdEmail size={28} className="mx-2" />
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mx-1">
              <Card className="text-white glassCard">
                <Card.Img
                  variant="top"
                  src="https://avatars.githubusercontent.com/u/90904963?v=4"
                  alt="Kieran Github Profile Pic"
                  className="mx-auto mt-4"
                  style={{ height: "6em", width: "6em", borderRadius: "50%" }}
                />
                <Card.Body>
                  <Card.Title className="text-center text-de">
                    Kieran Goodinson
                  </Card.Title>
                  <Card.Text>
                    <h6 class="text-center">Javascript extraordinaire</h6>
                    Ex-construction worker that is now a professional coffee
                    drinker that writes js sometimes
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <a
                    href="https://github.com/Kieran0507"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub size={28} className="mx-2" />
                  </a>
                  <MdEmail size={28} className="mx-2" />
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mx-1">
              <Card className="text-white glassCard">
                <Card.Img
                  variant="top"
                  src="https://avatars.githubusercontent.com/u/37118596?v=4"
                  alt="Jonathan Github Profile Pic"
                  className="mx-auto mt-4"
                  style={{ height: "6em", width: "6em", borderRadius: "50%" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    Jonathan Rabaja
                  </Card.Title>
                  <Card.Text>
                    <h6 class="text-center">Front-end Developer</h6>
                    Likes playing video games in my free time and doing front-end coding to create visually appealing websites.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <a
                    href="https://github.com/RyuujiAkira/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub size={28} className="mx-2" />
                  </a>
                  <MdEmail size={28} className="mx-2" />
                </Card.Footer>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5 pb-5">
            <Col className="mx-1">
              <Card className="text-white glassCard">
                <Card.Img
                  variant="top"
                  src="https://avatars.githubusercontent.com/u/91898581?v=4"
                  alt="=Junathan Github Profile Pic"
                  className="mx-auto mt-4"
                  style={{ height: "6em", width: "6em", borderRadius: "50%" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    Junathan Abraham-Odukale
                  </Card.Title>
                  <Card.Text>
                    <h6 class="text-center">Role</h6>
                    Short description about yourself
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <a
                    href="https://github.com/junathana23"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub size={28} className="mx-2" />
                  </a>
                  <MdEmail size={28} className="mx-2" />
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mx-1">
              <Card className="text-white glassCard">
                <Card.Img
                  variant="top"
                  src="https://avatars.githubusercontent.com/u/91898623?v=4"
                  alt="Adam Github Profile Pic"
                  className="mx-auto mt-4"
                  style={{ height: "6em", width: "6em", borderRadius: "50%" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">Adam Ateye</Card.Title>
                  <Card.Text>
                    <h6 class="text-center">Role</h6>
                    Short description about yourself
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <a
                    href="https://github.com/Adam-Ateye"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub size={28} className="mx-2" />
                  </a>
                  <MdEmail size={28} className="mx-2" />
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mx-1">
              <Card className="text-white glassCard">
                <Card.Img
                  variant="top"
                  src="https://avatars.githubusercontent.com/u/91898546?v=4"
                  alt="Jonathan Github Profile Pic"
                  className="mx-auto mt-4"
                  style={{ height: "6em", width: "6em", borderRadius: "50%" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">Sarah Khan</Card.Title>
                  <Card.Text>
                    <h6 class="text-center">Role</h6>
                    Short description about yourself
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <a
                    href="https://github.com/sarahkgh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub size={28} className="mx-2" />
                  </a>
                  <MdEmail size={28} className="mx-2" />
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div class="container-fluid">
        <div class="px-4 pt-5 pb-3 text-center text-white">
          <h1 class="display-5 fw-bold">Scrum Process</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Find out about the scrum process we used <br /> as a team to develop the web app!</p>
          </div>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="https://www.scrum.org/" target="_blank" rel="noreferrer">
              <button type="button" class="btn btn-primary btn-lg px-3 gap-3">Go to Scrum.org</button>
            </a>
          </div>
        </div>
        <div class="px-4 py-3 text-start">
          <div class="col-8 mx-auto card p-4">
            <h1 class="display-5 fw-bold text-center">What is Scrum?</h1>
            <p>Scrum is a framework within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value.</p>
            <br />
            <p>Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems. Scrum co-creators Ken Schwaber and Jeff Sutherland have written The Scrum Guide to explain Scrum clearly and succinctly.  This Guide contains the definition of Scrum. This definition consists of Scrum’s accountabilities, events, artifacts, and the rules that bind them together.</p>
            <br />
            <p>In a nutshell, Scrum requires a Scrum Master to foster an environment where:</p>
            <div class="px-4">
              <ol>
                <li>A Product Owner orders the work for a complex problem into a Product Backlog.</li>
                <li>The Scrum Team turns a selection of the work into an Increment of value during a Sprint.</li>
                <li>The Scrum Team and its stakeholders inspect the results and adjust for the next Sprint.</li>
                <li>Repeat</li>
              </ol>
            </div>
          </div>
          <div class="col-8 mx-auto mt-5 card p-4">
            <h1 class="display-5 fw-bold text-center">Our Process</h1>
            <p>To make the scrum framework run smoothly, a set of roles are given out to the group which allocate certain responsibilities. These are roles and not necessarily jobs meaning that someone can take more than one role.</p>
            <div class="px-4">
              <ul>
                <li><h5>Product Owner (PO)</h5>
                  PO's are the sole person responsible for managing the Product Backlog (i.e. the list of features to be worked on).</li>
                <li><h5>Development Team</h5>
                  A multi-disciplinary team usually comprised of software architects, designers, programmers and testers.</li>
                <li><h5>Scrum Master (SM)</h5>
                  Facilitates Scrum. The scrum master helps those outside the scrum team understand which interactions are beneficial. The scrum masters services the development team by removing impediments, facilitates meetings and coaches in self-organisation</li>
              </ul>
            </div>
          </div>
          <div class="row pt-5">
            <div class="col-3 mx-auto p-4 card">
              <h3 class="text-center">Scrum Meetings</h3>
              <p>There are four different key meetings which take place in the sprint and are were used in our scrum process.
                <br />
                These meetings are:</p>
              <h5 class="px-3 pt-2">Sprint Planning Meeting</h5>
              <p>This meeting is held at the beginning of the sprint. The meeting will usually take the full day for a two week sprint and is split in two (what and how).
                The first half of the meeting is where the team decide what is going to be brought into the sprint backlog.
                The second half of the meeting is where the team decide how the items they have brought in are going to be completed.
                Usually by further breaking down the tasks into smaller pieces and adding technical details.
              </p>
              <h5 class="px-3">Daily Standup</h5>
              <p>
                A quick daily 15 minute meeting. To keep conversation quick and on point. Attendants must stand-up during the meeting.
                This is used to optimise communication across the team.
                During the meeting the following points are discussed by every participant:
                What did I do yesterday that helped meet the Sprint Goal?
                What will I do today to help meet the Sprint Goal?
                Do I see any future impediments that prevents the team from meeting the Sprint Goal?
              </p>
              <h5 class="px-3">Sprint Review Meeting</h5>
              <p>
                A review is held at the end of the sprint to inspect the work done and adapt the product backlog. The development team, product owner and key stakeholders are all present at this meeting.
                The development team demonstrate what work was done, and answer any questions.
                The product owner discusses the Product Backlog as it stands.
                The entire group collaborates on what to do next, to provide valuable input to subsequent Sprint Planning.
              </p>
              <h5 class="px-3">Sprint Retrospective Meeting</h5>
              <p>
                The Sprint Retrospective is an opportunity for the Scrum Team to inspect itself and create a plan for improvements to be enacted during the next Sprint.
                The goal of the retrospective is to:
                Inspect how the last Sprint went with regards to people, relationships, process, and tools
                Identify and that went well and potential improvements
                Create a plan for implementing improvements to the way the Scrum Team does its work.
              </p>
            </div>
            <div class="col-4 mx-auto p-4 card">
              <h3 class="text-center">Product Backlog Items</h3>
              <p>The most common type of Product Backlog Item (PBI) is a User Story.<br />
                These were the bases of how we structured our JIRA board.<br />
                There are however multiple forms an item can take and they are:</p>
              <ul class="px-5">
                <li>User stories</li>
                <li>Use cases</li>
                <li>Bugs, errors and fixes</li>
                <li>Constraints</li>
              </ul>
              <h5 class="px-3">User Story</h5>
              <p>A user story is an end goal expressed from the user’s perspective:</p>
              <ul class="px-5">
                <li>Focuses on what they want to do rather than how to do it</li>
                <li>These users can be external or internal</li>
                <li>They should be expressed in simple language that everyone can understand</li>
              </ul>
              <p>An Epic is made up of multiple user stories.<br />
                A User story is made up of multiple Tasks.
              </p>
              <h5 class="px-3">Definition of Ready (DoR)</h5>
              <p>Definition of Ready (DoR) defines what a product backlog item needs before it can go into the sprint backlog.
                <br />
                A checklist of items could include:</p>
              <ul class="px-5">
                <li>Technical details have been discussed on the item and agreed</li>
                <li>Assigning a priority</li>
                <li>Timing Estimates</li>
              </ul>
              <h5 class="px-3">Completing a Product Backlog Item (PBI)</h5>
              <p>To complete an item of work it must go through a series of checks to make sure it meets the standards set out by the team</p>
              <h5 class="px-3">Definition of Done (DoD)</h5>
              <p>Definition of Done (DoD) defines what is needed before it can be regarded as complete. A definition of done can be applied to a feature, a sprint or a release. <br />
                A checklist of items which could be included for a feature could include:</p>
              <ul class="px-5">
                <li>Unit testing written and passed.</li>
                <li>Documentation updated</li>
                <li>Peer code review completed</li>
              </ul>
              <h5 class="px-3">Acceptance Criteria</h5>
              <p>Acceptance Criteria dictates the conditions for software to be considered done</p>
              <li class="px-4">Set of statements that usually have a pass/fail result for requirements</li>
              <p>Acceptance criteria is attached to our user stories to understand what a feature needs</p>
              <li class="px-4">Easier to understand the minimum viable product based on this criteria</li>
              <li class="px-4">Can also derive tests from this criteria</li>
            </div>
            <div class="col-3 mx-auto p-4 card">
              <h3 class="text-center">Prioritisation using MoSCoW</h3>
              <p>The MoSCoW method is a popular prioritisation techinque used for managing requirements. <br />
                It is important to work with stakeholders to determine the importance of each component of the requirements in order to guarantee a minimum viable product (MVP) is achieved.</p>
              <h5 class="px-3">Must Have</h5>
              <p>Vital requirements - if not completed the project would not be viable.<br />
                It is important to distinguish between Must Have and Should Have requirements in order to secure a viable product as soon as possible.<br />
                To distinguish if a task is a Must Have, ask yourself:</p>
              <li class="px-3">What would happen if the product is released without this component? Would it work correctly?</li>
              <li class="px-3">Is there an easier solution to this task?</li>
              <h5 class="px-3">Should Have</h5>
              <p>
                Tasks that would have a significant positive impact on the project, but are not required to reach the MVP.<br />
                It should be possible to release the product without implementing any Should Do requirements.<br />
                Potential examples:
              </p>
              <li class="px-3">Performance improvements</li>
              <li class="px-3">New functionality</li>
              <h5 class="px-3">Could Have</h5>
              Tasks that may improve the product in a minor way.<br />
              Could Have components are those which are not expected to be done in the current time-frame, but could be done if time permits.<br />
              In general, Should Have tasks are expected to be done as long as things go accordingly, whereas Could Have tasks are only to be done if extra time presents itself.
              <h5 class="px-3">Won't Have</h5>
              <p>Tasks that won't be done in the current time-frame.<br />
                These components of the project may be left out for a future implementation, and are just not the priority for this current time-frame, or they could be conflicting with other requirements.<br />
                Sometimes W may instead stand for "will not", "wish to", or "would". In all cases, this task is not to be done in the current time-frame.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
