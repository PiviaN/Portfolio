import React from "react";
import logo from "../logo.png";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ translate }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="home">
          <img className="logo" src={logo} alt="logo..." />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth="true" to="home" className="nav-link" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth="true" to="about" offset={-110} className="nav-link">
                {translate ? "sobre mim" : "about me"}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth="true"
                to="services"
                offset={-110}
                className="nav-link"
                href="#"
              >
                {translate ? "habilidades" : "skills"}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth="true"
                to="experience"
                offset={-110}
                className="nav-link"
              >
                {translate ? "experiência" : "experience"}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth="true"
                to="portfolio"
                offset={-110}
                className="nav-link"
              >
                portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                smooth="true"
                to="testimonials"
                offset={-110}
                className="nav-link"
              >
                {translate ? "testemunhos" : "testimonials"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
