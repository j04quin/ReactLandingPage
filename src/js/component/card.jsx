import React from "react";
import Imagen from "../../img/500x325.png";

const Card = ({ id }) => {
  return (
    <div className=" col-12 mb-3 col-lg-3 col-md-6">
      <div
        id={id}
        className="card text-center"
        style={{
          width: "auto",
          height: "420px",
          maxWidth: "90%",
          margin: "auto",
        }}
      >
        <div className="card-header p-0">
          <img
            className="card-img-top"
            alt="..."
            style={{ width: "100%", height: "200px" }}
            src={Imagen}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>

        <div class="card-footer text-body-secondary">
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
