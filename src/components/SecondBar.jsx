// import React from 'react'

import MarvelImage from "./MarvelImage";
import ProgressBar from "./ProgressBar";
import VideoMarvel from "./VideoMarvel";

const SecondBar = () => {
  return (
    <div className="bg-black bg-gradient  mt-1 row">
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
