// import React from 'react'

import MarvelImage from "./MarvelImage";
import ProgressBar from "./ProgressBar";
import VideoMarvel from "./VideoMarvel";

const SecondBar = () => {
  return (
    <div className="bg-dark bg-gradient p-3  row" style={{ height: "16rem" }}>
      <div className="col ">
        <ProgressBar />
      </div>
      <div className="col ">
        <VideoMarvel />
      </div>
      <div className="col ">
        <MarvelImage />
      </div>
    </div>
  );
};

export default SecondBar;
