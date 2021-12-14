import { Carousel } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "../resources/css/style.css";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Link } from "react-router-dom";


const Home = () => {
    return (
        <div id="Homebody" >


            <h2 id = "Headtxt">Home</h2>
            <p>   </p>
            <br />
            <br />
            <h2 id = "Subtxt">Featured Content</h2>

            <Carousel id="featuredCaro">
                <Carousel.Item>



                    <Card>
                        <Card.Img id="CaroImg" id="CaroImg" variant="top" src=" https://cdn.vox-cdn.com/thumbor/rH03UWCLX4mcxPuigd4VZm6VoaQ=/0x0:990x652/920x613/filters:focal(416x247:574x405):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67170965/Screen_Shot_2015-05-08_at_12.32.14_PM.0.0.png" />
                        <Card.Body >
                            <Card.Text >
                                Welcome to QA Cinemas the UK's Number 1 cinema!
                                Book a viewing for the latest Films at one of Our screens Today!
                            </Card.Text>
                            <Button variant="primary" id="listingTimeBTN" as={Link} to={"/listings"}  >
                                Book Now
                            </Button>

                        </Card.Body>
                    </Card>


                </Carousel.Item>


                <Carousel.Item>
                    <Card>
                        <Card.Img id="CaroImg" id="CaroImg" variant="top" src=" https://images.unsplash.com/photo-1584020933234-43c38930e481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
                        <Card.Body id="featuredCaro">
                            <Card.Text>
                               With Current Restrictions in place in the UK, please insure that a face covering is worn upon entering the cinema, Face coverings do not have to be worn if you are eating and drinking or you are exempt
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </Carousel.Item>


                <Carousel.Item>
                    <Card>
                        
                        <Card.Img id="CaroImg" id="CaroImg" variant="top" src=" https://pbs.twimg.com/media/FFsKfNLXMAEHk_5?format=jpg&name=large" />
                        <Card.Body id="featuredCaro">
                            <Card.Text>
                                Book a Viewing for Spider-Man: No way Home now! Showings from Dec. 15
                            </Card.Text>
                            <Button variant="primary" id="listingTimeBTN" as={Link} to={"/listings"}  >
                                Book Now
                            </Button>
                        </Card.Body>
                    </Card>


                </Carousel.Item>


                <Carousel.Item>
                    <Card>
                         
                        <Card.Img id="CaroImg" id="CaroImg" variant="top" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTstMTpo285SPrUGtNeZ9kjOWbBnuvppnv5UfsfIN9x_rQgfbxY" alt=" https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png" />
                        <Card.Body id="featuredCaro">
                            <Card.Text>
                               Book a viewing for Bee movie now!
                            </Card.Text>
                            <Button variant="primary" id="listingTimeBTN" as={Link} to={"/listings"}  >
                                Book Now
                            </Button>
                        </Card.Body>
                    </Card>


                </Carousel.Item>


                <Carousel.Item>
                    <Card>
                        <Card.Img id="CaroImg" id="CaroImg" id="CaroImg" variant="top" src=" https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png" />
                        <Card.Body id="featuredCaro">
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </Carousel.Item>


                <Carousel.Item>
                    <Card>
                        <Card.Img id="CaroImg" id="CaroImg" id="CaroImg" variant="top" src=" https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png" />
                        <Card.Body id="featuredCaro">
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </Carousel.Item>
            </Carousel>
        </div>


    );
}

export default Home;