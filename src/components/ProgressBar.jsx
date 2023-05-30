// import React from 'react'

const ProgressBar = () => {
  return (
    <div
      className="container col p-5 pt-3 pb-2 text-center text-white rounded bg-black bg-gradient border border-dark "
      style={{ width: "100%", height: "100%" }}
    >
      <div className="row m-1">
        <h2>Películas Producidas</h2>
      </div>
      <div className="row m-2 mt-3 fs-5">Películas: 100</div>
      <div className="row m-2 mt-3 fs-5">Meta de Producción: 200 </div>
      <div className="row">
        <div
          className="progress m-2 rounded-0 p-0 border border-secondary "
          style={{ height: "1.5rem" }}
        >
          <div
            className="progress-bar-striped bg-dark"
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="200"
            style={{ width: " 50%", height: "5rem" }}
          ></div>
          <div
            className="progress-bar bg-secondary "
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="200"
            style={{ width: " 50%", height: "5rem" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
