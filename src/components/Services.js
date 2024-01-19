import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faFileCode,
  faMobile,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

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
              <h3>
                {translate
                  ? "Layouts de Alta Performance"
                  : "High Performance Layouts"}
              </h3>
              <p>
                {translate
                  ? "Posso implementar designs de alta fidelidade utilizando de diversas bibliotecas de customização CSS, como o BootStrap, por exemplo."
                  : "I can implement high-fidelity designs using various CSS customization libraries, like BootStrap, for example."}
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
                  ? "Usufruindo do JavaScript e de suas diversas Frameworks, consigo desenvolver sites com diversas tecnologias presentes no mercado."
                  : "Using JavaScript and its various Frameworks, I can develop websites with different technologies available on the market."}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faMobile} size="2x" />
              </div>

              <h3>
                {translate ? "Desenvolvimento Mobile" : "Mobile Development"}
              </h3>
              <p>
                {translate
                  ? "Através do React Native, Ionic e Flutter, consigo desenvolver aplicações modernas tanto para IOS quanto para Android."
                  : "Using React Native, Ionic and Flutter, I can develop modern applications for both IOS and Android."}
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faServer} size="2x" />
              </div>

              <h3>
                {translate
                  ? "Desenvolvimento Back-End"
                  : "Back-End Development"}
              </h3>
              <p>
                {translate
                  ? "Através das tecnologias como o Node, NestJS e .NET 6+, eu posso desenvolver APIs que atendam todas as necessidades dos meus clientes."
                  : "Through technologies such as Node, NestJS and .NET 6+, I can develop APIs that meet all my clients' needs."}
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
