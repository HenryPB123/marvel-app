// import React from 'react'

const ProgressBar = () => {
  return (
    <div className="container col p-3">
      <div className="row">
        <h3>Barra de progreso</h3>
      </div>
      <div className="row">XX Películas</div>
      <div className="row">Meta de Producción</div>
      <div className="row">
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: " 75%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
