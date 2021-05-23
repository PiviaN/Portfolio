import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = ({ translate }) => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">{translate ? "minhas habilidades" : "my skills"}</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Design da Web</h3>
              <p>
                {translate
                  ? "Posso implementar designs de alta fidelidade utilizando a biblioteca Material-UI, trabalhando com a UI/UX do site de maneira profissional."
                  : "I can implement High-Fidelity Designs using the Material-UI Framework, which makes the UI look amazing and completely professional."}
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>

              <h3>{translate ? "Desenvolvimento Web" : "Web Development"}</h3>
              <p>
                {translate
                  ? "Utilizando JavaScript de nova geração e React, eu posso criar sites interativos e de melhor performance."
                  : "Using ES7 JavaScript and React 17, i can create Websites with the best Experience for the User."}
              </p>
            </div>
          </div>
          {/* - */}
        </div>
      </div>
    </div>
  );
};

export default Services;
