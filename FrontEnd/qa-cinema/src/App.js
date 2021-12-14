import "bootstrap/dist/css/bootstrap.min.css";
import "./resources/css/style.css";

import NavBar from "./pages/components/NavBar";
import Footer from "./pages/components/Footer";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrap">
          <NavBar />
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default App;
