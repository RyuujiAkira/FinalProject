import BingMap from "./components/BingMap";
import "../resources/css/FindUs.css";
import { BsPinMapFill } from "react-icons/bs";
import { FaBusAlt, FaWalking, FaBuilding, FaParking } from "react-icons/fa";

const FindUs = () => {
  return (
    <div class="container-fluid p-0">
      <div class="px-4 py-4 text-center text-white" id="findUsHero">
        <h1 class="display-4 fw-bold py-4">Find Us</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead">This page is all about getting to QA cinema, you won't regret it!</p>
          <p class="lead mb-4">Find out how to get to our cinema with transport options.</p>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-start my-3">
          <div class="col-auto mx-auto">
            <div class="px-4 py-4 text-center text-white">
              <h2 class="py-4">Located Here <BsPinMapFill /></h2>
              <h4>
                8, St James's Bldg, 61-95 Oxford St, Manchester M1 6FQ
              </h4>
            </div>
          </div>
          <div class="col-auto mx-auto">
            <BingMap />
          </div>
        </div>
        <div class="row align-items-start my-3">
          <div class="col-auto mx-auto">
            <div class="px-4 py-4 text-center text-white">
              <h1 class="py-4">What We Look Like <FaBuilding /> </h1>
              <img class="img-fluid" src="https://s3-eu-west-1.amazonaws.com/assets.odeoncinemasgroup.com/live/media/filer_public_thumbnails/filer_public/fe/3e/fe3e0b0b-ed31-429f-9b3b-3224e5ff6015/copy_of_2018-12-20_lsq_odeon_0155.jpg__1500x550_q85_crop_subsampling-2_upscale.jpg"
                style={{ borderRadius: '5em' }} />
            </div>
          </div>
          <div class="col-auto mx-auto">
            <div class="px-4 py-4 text-center text-white">
              <h1><FaWalking /> Getting Here <FaBusAlt /></h1>
            </div>
            <div class="row align-items-start text-white text-center">
              <div class="col-auto mx-auto">
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2374.5458842976577!2d-2.2385914339858357!3d53.476575522649455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x487bb1963e74cddf%3A0x3d58963bd1da9c85!2sPiccadilly%20Station%2C%20Manchester!3m2!1d53.4773417!2d-2.2310475999999997!4m5!1s0x487bb1bf943ad609%3A0x6f54f566e8d28339!2s8%2C%20QA%20Ltd%20-%20Manchester%20(Oxford%20Street)%2C%20Saint%20James&#39;s%20Building%2C%20Oxford%20Street%2C%20Manchester!3m2!1d53.475497399999995!2d-2.2414408999999997!5e0!3m2!1sen!2suk!4v1639579895967!5m2!1sen!2suk"
                  width="500" height="400" style={{ borderRadius: '5%' }} allowfullscreen="" loading="lazy"></iframe>
                <figcaption>Walking from Manchester Piccadilly Station</figcaption>
              </div>
              <div class="col-auto mx-auto">
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2374.614205327667!2d-2.2378247339858497!3d53.47535462274099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x487bb1963e74cddf%3A0x3d58963bd1da9c85!2sPiccadilly%20Station%2C%20Manchester!3m2!1d53.4773417!2d-2.2310475999999997!4m5!1s0x487bb1bf943ad609%3A0x6f54f566e8d28339!2s8%2C%20QA%20Ltd%20-%20Manchester%20(Oxford%20Street)%2C%20Saint%20James&#39;s%20Building%2C%20Oxford%20Street%2C%20Manchester!3m2!1d53.475497399999995!2d-2.2414408999999997!5e0!3m2!1sen!2suk!4v1639580216956!5m2!1sen!2suk"
                  width="500" height="400" style={{ borderRadius: '5%' }} allowfullscreen="" loading="lazy"></iframe>
                <figcaption>Bus from Manchester Piccadilly Station</figcaption>
              </div>
            </div>
          </div>
          <div class="col-auto mx-auto">
            <div class="px-4 py-4 text-center text-white">
              <h1 class="py-2">Parking <FaParking /> </h1>
              <p>Nearest parking at The Palace (Whitworth St, Manchester, M1 6NE) which is a multi-storey NCP Car Park. <br />The car park has an early bird discount for arrivals before 9.00am, after 9.00am QA has discounted tickets for this car park.</p>
              <a href="https://manchester.cylex-uk.co.uk/company/ncp-car-park-manchester-palace-19100037.html" rel="noreferrer" target="_blank">
                <img src="https://osm.cylex-international.com/osm/staticmaplite/staticmap.php?center=53.475440,-2.239231&zoom=15&size=xy&maptype=tm&markers=53.475440,-2.239231,marker-34" class="img-fluid py-3" style={{ borderRadius: '5%' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default FindUs;
