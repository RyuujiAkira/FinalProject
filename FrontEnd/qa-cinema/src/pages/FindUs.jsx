import { Figure } from "react-bootstrap";
import BingMap from "./components/BingMap";
import "../resources/css/FindUs.css";

const FindUs = () => {
  return (
    <div>
      <h3 id="title">
        This page is all about getting to QA cinema, you won't regret it!
      </h3>
      {/* <Image
        src="https://content.fortune.com/wp-content/uploads/2015/02/145031081.jpg"
        fluid
      /> */}
      <Figure>
        <Figure.Image
          id="cinema"
          width={700}
          height={180}
          alt="cinema"
          src="https://content.fortune.com/wp-content/uploads/2015/02/145031081.jpg"
        />
        <Figure.Caption id="text">
          <h3>
            1298 Long Road
            <br /> Solihull
            <br /> Birmingham
            <br /> B94 7JH
          </h3>
          <br />
          <h3>Local busses to our QA cinema bus stop:</h3>
          <h3>94</h3>
          <h3>X62</h3>
          <h3>12</h3>
        </Figure.Caption>
      </Figure>
      <div id="map">
        <BingMap />
      </div>
    </div>
  );

  //   return (
  //     <div>
  //       <h5>This page is all about getting to QA cinema, you won't regret it!</h5>
  //       <div class="px-1">
  //         <img
  //           px="3"
  //           width="500px"
  //           height="300px"
  //           src="https://content.fortune.com/wp-content/uploads/2015/02/145031081.jpg"
  //         ></img>
  //       </div>
  //       <p>
  //         {" "}
  //         <h6>1298 Long Road, Solihull, Birmingham, B94 7JH.</h6>
  //       </p>

  //       <h6>Local bus stops:</h6>
  //       <ul>
  //         <li>94</li>
  //         <li>X62</li>
  //         <li>12</li>
  //       </ul>

  //       <h6>Local train stations:</h6>
  //       <ul>
  //         <li>Rochdale train station</li>
  //         <li>Mayweather railways</li>
  //       </ul>
  //       <h6>Local parking:</h6>
  //       <ul>
  //         <li>Gossip carpark</li>
  //         <li>NCP Eye street</li>
  //         <li>High street park</li>
  //       </ul>
  //       <div class="px-1">
  //         <img
  //           width="400px"
  //           height="300px"
  //           src="https://i2-prod.manchestereveningnews.co.uk/incoming/article14367473.ece/ALTERNATES/s615b/Map-issued-by-GMP-on-27218-The-eleven-official-and-several-unofficial-car-parks-flagged-up-by-pol.jpg"
  //         ></img>
  //       </div>
  //       <div class="px-1">
  //         <BingMap />
  //       </div>
  //     </div>
  //   );
};

export default FindUs;
