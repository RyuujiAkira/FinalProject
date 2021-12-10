import "../resources/css/aroundus.css";
import { AiTwotonePhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

const AroundUs = () => {
  return (
    <div class="container-fluid">
      <div class="text-center text-white container-fluid" id="hero-img">
        <h1 class="display-4 fw-bold pt-5">Places To Go!</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4 pb-5 pt-2">Below are the places around us, all sorts of fun for everyone! <br />
            These places can be enjoyed before and after a film! <br />
            From food to arcades these locations
            cater to everyone.
          </p>
        </div>
      </div>
      <div class="container">
        <div class="row py-5">
          <div class="col-6">
            <div class="card" style={{ width: '30rem', height: '33rem' }}>
              <img src="https://www.designcurial.com/Uploads/NewsArticle/6720821/main.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Frankie & Benny's</h5>
                <p class="card-text">A classic American Italian cuisine, for all ages!</p>
                <p class="card-text">Spend £50 and get 25% off in QA Cinema.</p>
                <p class="card-text">Book now: <AiTwotonePhone /> 0300 402 4902</p>
                <p class="card-text">Address: <HiLocationMarker /> Unit 15, 27 Withy Grove, Manchester M4 2BS</p>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card" style={{ width: '30rem', height: '33rem' }}>
              <img src="https://s3.eu-west-2.amazonaws.com/air-tastic/bowlingnews1440x960.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Hollywood Bowl</h5>
                <p class="card-text">The UK's best ten pin bowling alley!</p>
                <p class="card-text">Play 2 games for 15% off in QA Cinema.</p>
                <p class="card-text">Book now: <AiTwotonePhone /> 0300 434 5322</p>
                <p class="card-text">Address: <HiLocationMarker /> Fold Way, Ashton Mass Leisure Park, Ashton-under-Lyne OL7 0PG</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row py-5">
          <div class="col-6">
            <div class="card" style={{ width: '30rem', height: '33rem' }}>
              <img src="https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjYWRlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Galaxy Arcade</h5>
                <p class="card-text">Arcade with many retro, and multiplayer games!</p>
                <p class="card-text">Recieve 10 tokens with your QA Cinema ticket.</p>
                <p class="card-text">Book now: <AiTwotonePhone /> 0300 294 2003</p>
                <p class="card-text">Address: <HiLocationMarker /> 14 The Trafford Centre The Orient 14 The Trafford Centre, Manchester M17 8ED</p>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card" style={{ width: '30rem', height: '33rem' }}>
              <img src="https://thealchemist.uk.com/wp-content/uploads/2017/09/OXFORD-1400x934.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">The Brown Bar</h5>
                <p class="card-text">A classic bar, with a live band!</p>
                <p class="card-text">Get a free drink on your third QA Cinema ticket.</p>
                <p class="card-text">Book now: <AiTwotonePhone /> 0300 439 4289</p>
                <p class="card-text">Address: <HiLocationMarker /> 1 Peter St, Manchester M2 5QR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AroundUs;