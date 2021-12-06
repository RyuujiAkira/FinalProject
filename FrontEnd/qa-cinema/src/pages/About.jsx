import { Alert, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
// change colour of text in here it looks bad
const About = () => {
  return (
    <div>
      <Alert key="idklol" variant="dark">
        If you would like to contact us please use our{" "}
        <Alert.Link as={Link} to={"/contactus"}>
          Contact Us Page
        </Alert.Link>
      </Alert>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1562523699-455ffb7f37b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to QA Cinema</h3>
            <p>
              Worlds first Area 51 based cinema, For Humans and non Humans alike
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Cinema sign in the wild"
          />

          <Carousel.Caption>
            <h3>Team Valor</h3>
            {/* add other text here at some point */}
            <p>
              Team valor consists of Fraser Smith, Kieran Goodinson, Sarah Khan,
              Jonathan Rabaja, Junathan Abraham-Odukale, We are Something{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="A gaggle of laptops"
          />
          {/* give these a margin with css, look very grouped */}
          <Carousel.Caption>
            <h3>Our GitHub Links</h3>
            <a href="https://github.com/Kieran0507" target="_blank">
              Kieran Goodinson,
            </a>
            <a href="https://github.com/Fraser-A-N-Smith" target="_blank">
              Fraser Smith,
            </a>
            <a href="https://github.com/RyuujiAkira" target="_blank">
              Jonathan Rabaja,
            </a>
            <a href="https://github.com/junathana23" target="_blank">
              Junathan Abraham-Odukale,
            </a>
            <a href="https://github.com/Adam-Ateye" target="_blank">
              Adam Ateye
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default About;
