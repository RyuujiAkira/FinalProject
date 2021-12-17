import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../resources/css/style.css";

const Home = () => {
    return (
        <div class="container-fluid p-0">
            <div class="mb-5 text-center container-fluid text-white" id="homeHero">
                <img class="d-block mx-auto" src="https://i.ibb.co/7QzfRQ6/QACINEMATRANS.png" alt="QA Logo" width="200px" />
                <h1 class="mb-4">QA Cinema</h1>
                <div class="col-lg-6 mx-auto mb-5">
                    <p class="lead">Welcome to QA Cinema one of the best cinemas in the UK!</p>
                    <p class="lead mb-4">See any of the films below at our Manchester location</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center pb-5">
                        <Link to="/listings">
                            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Check our listings here!</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="container-fluid p-0">
                <Carousel prevLabel={null} nextLabel={null} indicators={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.cineworld.co.uk/static/dam/jcr:186b18a6-36d8-48cc-b33d-ee89d7ead994"
                            alt="Clifford The Dog"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.cineworld.co.uk/static/dam/jcr:62c06030-8254-4119-bc2d-f4b0c9e3870d"
                            alt="The King's Man"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.cineworld.co.uk/static/dam/jcr:16890098-ce3d-4838-9ca5-2e730d15dc5c"
                            alt="The Matrix Resurrections"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/c2jMVZQ/Inkedcinemabanner.jpg"
                            alt="Family Ticket"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div class="container text-white">
                <h2 class="mt-5 mb-3 text-white">Top Films</h2>
                <div class="row align-items-center mx-auto">
                    <div class="col-auto mx-3">
                        <img class="film-poster img-fluid" src="https://images.mymovies.net/images/film/cin/350x522/fid21113.jpg" alt="Spider-man No Way Home" />
                        <figcaption>SPIDER-MAN NO WAY HOME</figcaption>
                    </div>
                    <div class="col-auto  mx-3">
                        <img class="film-poster img-fluid" src="https://images.mymovies.net/images/film/cin/350x522/fid21138.jpg" alt="The Matrix Resurrections" />
                        <figcaption>THE MATRIX RESURRECTIONS</figcaption>
                    </div>
                    <div class="col-auto mx-3">
                        <img class="film-poster img-fluid" src="https://images.mymovies.net/images/film/cin/350x522/fid20288.jpg" alt="Clifford the Big Red Dog" />
                        <figcaption>CLIFFORD THE BIG RED DOG</figcaption>
                    </div>
                </div>
                <div class="row align-items-center mx-auto my-5">
                    <div class="col-auto mx-3">
                        <img class="film-poster img-fluid" src="https://images.mymovies.net/images/film/cin/350x522/fid21031.jpg" alt="Encanto" />
                        <figcaption>ENCANTO</figcaption>
                    </div>
                    <div class="col-auto mx-3">
                        <img class="film-poster img-fluid" src="https://images.mymovies.net/images/film/cin/350x522/fid19715.jpg" alt="The King's Man" />
                        <figcaption>THE KING'S MAN</figcaption>
                    </div>
                    <div class="col-auto mx-3">
                        <img class="film-poster img-fluid" src="https://images.mymovies.net/images/film/cin/350x522/fid21082.jpg" alt="House of Gucci" />
                        <figcaption>HOUSE OF GUCCI</figcaption>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;