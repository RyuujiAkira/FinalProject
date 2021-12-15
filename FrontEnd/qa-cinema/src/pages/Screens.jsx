import { Carousel, Card } from "react-bootstrap";
import "../resources/css/screens.css";
const Screens = () => {
  return (
    <>
      <h3 class="text-center text-white">
        Below are the screens within the cinema, standard or deluxe.
      </h3>
      <Carousel id="featuredCaro">
        <Carousel.Item>
          <Card>
            <Card.Img
              variant="top"
              src="https://trendingdubai.com/wp-content/uploads/2018/07/VOX-MAX1-660x386.jpg"
            />
            <Card.Body id="featuredCaro">
              <Card.Text>Standard seating</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card>
            <Card.Img
              variant="top"
              src="https://homemcr.org/app/uploads/2015/04/Cinema-1-Seating-Plan.jpg"
            />
            <Card.Body id="featuredCaro">
              <Card.Text>Standard Seating Plan</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Img
              variant="top"
              src="https://www.dewsburyreporter.co.uk/images-a.jpimedia.uk/imagefetch/http://www.lep.co.uk/webimage/Prestige.Item.1.74625312!image/1675265390.jpg?width=2048&enable=upscale"
            />
            <Card.Body id="featuredCaro">
              <Card.Text>Deluxe Seating</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Img
              variant="top"
              src="https://homemcr.org/app/uploads/2015/04/Cinema-2.jpg"
            />
            <Card.Body id="featuredCaro">
              <Card.Text>Deluxe Seating Plan</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Screens;
