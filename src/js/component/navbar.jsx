import React from "react";

//create your first component
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-inverse navbar-expand-lg w-100">
      <div className="container d-flex justify-content-between">
        <a className="navbar-brand" href="#">
          Start Bootstrap
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
