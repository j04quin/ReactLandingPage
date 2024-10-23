import React from "react";

import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Navbar />
      <div className="container w-80 h-100 p-2">
        <Jumbotron />
        <div className=" row">
          {arr.map((item) => (
            <Card id={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
