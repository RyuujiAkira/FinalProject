import { Carousel, Card } from "react-bootstrap";

const Screens = () => {
  return (
    <>
      <h5>Below are the screens within the cinema, standard or deluxe.</h5>
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

  //     return ( <>
  //     <h5>Below are the screens within the cinema, standard or deluxe.</h5>
  //    <div>
  //     <p>Standard seating</p>
  // <img width="450px" height="400px" src="https://trendingdubai.com/wp-content/uploads/2018/07/VOX-MAX1-660x386.jpg"></img>
  // <img width="450px" height="400px" src="https://homemcr.org/app/uploads/2015/04/Cinema-1-Seating-Plan.jpg"></img>
  // </div>
  // <p>Deluxe seating</p>
  // <img width="450px" height="400px" src="https://www.dewsburyreporter.co.uk/images-a.jpimedia.uk/imagefetch/http://www.lep.co.uk/webimage/Prestige.Item.1.74625312!image/1675265390.jpg?width=2048&enable=upscale"></img>
  //    <img width="450px" height="400px" src="https://homemcr.org/app/uploads/2015/04/Cinema-2.jpg"></img>
  //     </> );
};

export default Screens;
