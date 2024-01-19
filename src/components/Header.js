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
            ? "Desenvolvimento FullStack com Tecnologias Web & Mobile"
            : "FullStack Development with Web & Mobile Technologies"}
        </h1>
        <Typed
          className="typed-text"
          strings={
            translate
              ? [
                  "Criação de Websites, APIs e Aplicações Mobile",
                  "Designs de Alta Performance",
                  "Estudante autodidata",
                  "Proficiência em Inglês, Espanhol e Francês",
                ]
              : [
                  "Websites, APIs and Mobile Creations",
                  "High Fidelity Designs",
                  "Self-taught Hardwork Student",
                  "Proficiency in English, Spanish and French",
                ]
          }
          typeSpeed={50}
          backSpeed={60}
          loop
        />

        <button
          smooth="true"
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
