import React from "react";

//create your first component
const Jumbotron = () => {
  return (
    <div className="container my-2" bis_skin_checked="1">
      <div className="p-5 bg-light rounded-3" bis_skin_checked="1">
        <h1 className="text-body-emphasis">A Warm Welcome!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quidem totam delectus ut quis. Dolorem est iste ipsam, consectetur hic
          maiores ipsum unde, numquam perferendis nostrum possimus quae rerum
          culpa.
        </p>
        <button className="btn btn-primary align-self-baseline">
          Call to action!
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
