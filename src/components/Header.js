import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = ({ translate, setTranslate }) => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>
          {translate
            ? "Desenvolvimento Web com React & Material-UI"
            : "Web Development with React & Material-UI"}
        </h1>
        <Typed
          className="typed-text"
          strings={
            translate
              ? [
                  "Criação de Websites",
                  "Designs de Alta Performance",
                  "Estudante autodidata",
                  "Proficiência em Inglês e Espanhol",
                ]
              : [
                  "Website Creation",
                  "High Fidelity Designs",
                  "Self-taught Hardwork Student",
                  "Proficiency in English and Spanish",
                ]
          }
          typeSpeed={50}
          backSpeed={60}
          loop
        />
        <Link smooth={true} to="footer" className="btn-main-offer">
          {translate ? "contato" : "contact me"}
        </Link>
        <button
          smooth={true}
          to="footer"
          className={
            translate ? "btn-main-reverse-translate" : "btn-main-translate"
          }
          onClick={() => setTranslate(!translate)}
        >
          {translate ? "english" : "portuguese"}
        </button>
      </div>
    </div>
  );
};

export default Header;
