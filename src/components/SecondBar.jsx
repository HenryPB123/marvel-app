// import React from 'react'

import MarvelImage from "./MarvelImage";
import ProgressBar from "./ProgressBar";
import VideoMarvel from "./VideoMarvel";

const SecondBar = () => {
  return (
    <div
      className=" p-3  row"
      style={{
        height: "100%",
        background: " linear-gradient( #0e0e0f,#192f39)",
      }}
    >
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
