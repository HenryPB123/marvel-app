// import React from 'react'

const ProgressBar = () => {
  return (
    <div
      className="container col p-3 text-white  bg-dark bg-gradient "
      style={{ width: "100%", height: "100%" }}
    >
      <div className="row">
        <h3>Barra de progreso</h3>
      </div>
      <div className="row">XX Películas</div>
      <div className="row">Meta de Producción</div>
      <div className="row">
        <div className="progress " style={{ height: "1.5rem" }}>
          <div
            className="progress-bar-striped bg-secondary"
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="200"
            style={{ width: " 50%", height: "5rem" }}
          >
            Producidas
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
