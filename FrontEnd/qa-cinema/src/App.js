import "bootstrap/dist/css/bootstrap.min.css";
import Mongo from "./pages/components/MongoDB";

import NavBar from "./pages/components/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Mongo/>
      </div>
    </div>
  );
}

export default App;
