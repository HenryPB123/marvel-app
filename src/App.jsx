import "./App.css";

import Cards from "./components/Cards";
import Home from "./components/Home";
import SecondBar from "./components/SecondBar";

function App() {
  return (
    <div className="container-fluid">
      <div className="col justify-content-between">
        <div className="row">
          <Home />
        </div>
        <SecondBar />

        <div className="container">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
