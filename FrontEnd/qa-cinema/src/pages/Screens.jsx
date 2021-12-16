import { Carousel, Card } from "react-bootstrap";
import "../resources/css/screens.css";
const Screens = () => {
  return (
    <div class="container-fluid">
      <div class="text-center text-white container-fluid">
        <h1 class="display-4 fw-bold pt-5">Our Screens</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-2 pb-5 pt-2">Below are the screens within the cinema, standard or deluxe.
          </p>
        </div>
      </div>
      <div class="container">
        <Carousel prevLabel={null} nextLabel={null} indicators={false}>
          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src="https://trendingdubai.com/wp-content/uploads/2018/07/VOX-MAX1-660x386.jpg"
                className="screens-img img-fluid"
              />
              <Card.Body>
                <Card.Text className="text-center">Standard seating</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>

          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src="https://homemcr.org/app/uploads/2015/04/Cinema-1-Seating-Plan.jpg"
                className="screens-img img-fluid"
              />
              <Card.Body>
                <Card.Text className="text-center">Standard Seating Plan</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.dewsburyreporter.co.uk/images-a.jpimedia.uk/imagefetch/http://www.lep.co.uk/webimage/Prestige.Item.1.74625312!image/1675265390.jpg?width=2048&enable=upscale"
                className="screens-img img-fluid"
              />
              <Card.Body>
                <Card.Text className="text-center">Deluxe Seating</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src="https://homemcr.org/app/uploads/2015/04/Cinema-2.jpg"
                className="screens-img img-fluid"
              />
              <Card.Body>
                <Card.Text className="text-center">Deluxe Seating Plan</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Screens;
