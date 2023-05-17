import "./App.css";
import Home from "./components/home";
import ProgressBar from "./components/ProgressBar";

import VideoMarvel from "./components/VideoMarvel";
import MarvelImage from "./components/MarvelImage";

function App() {
  return (
    <div className="container-fluid">
      <div className="col">
        <div className="row">
          <Home />
        </div>
        <div className="row">
          <div className="col p-2">
            <ProgressBar />
          </div>
          <div className="col p-2">
            <VideoMarvel />
          </div>
          <div className="col p-2">
            <MarvelImage />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">card</div>
            <div className="row">card</div>
          </div>
          <div className="col">
            <div className="row">card</div>
            <div className="row">card</div>
          </div>
          <div className="col">
            <div className="row">card</div>
            <div className="row">card</div>
          </div>
          <div className="col">
            <div className="row">card</div>
            <div className="row">card</div>
          </div>
        </div>
        <div className="row">
          <div className="col">pagination</div>
        </div>
      </div>
    </div>
  );
}

export default App;
