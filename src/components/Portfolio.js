import React from "react";
import arcDevelopment from "../images/arc-landingpage.png";
import serasa from "../images/serasa-tela.png";
import quizPage from "../images/quiz-page.png";
import openNews from "../images/Open-News-LandingPage.png";
import chatApp from "../images/Chat-App.png";
import todoApp from "../images/todo-homepage.png";
import eCommerce from "../images/ecommerce-landingpage.png";
import infusionPage from "../images/Infusion_Homepage.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Pofrfolio = ({ translate }) => {
  const openPopupboxSerasa = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={serasa}
          alt="Serasa Project"
        />
        <p className="mt-3">
          {translate
            ? "Um fluxo inteiro de contratação de seguro do cliente Serasa feito por mim e meus companheiros de equipe. "
            : "An entire insurance contracting flow for the Serasa client done by me and my teammates. "}
          <a
            className="hyper-link"
            href="https://olik.com.br/bolso-protegido/"
            rel="noreferrer"
          >
            Seguro Bolso Protegido - Serasa
          </a>
        </p>
        <b>{translate ? "Demonstração: " : "Demo: "}</b>
        <a
          className="hyper-link"
          href="https://olik.com.br/bolso-protegido/"
          target="_blank"
          rel="noreferrer"
        >
          https://olik.com.br/bolso-protegido/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const openPopupboxMaterial = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={arcDevelopment}
          alt="Arc Development Project"
        />
        <p className="mt-3">
          {translate
            ? "Um projeto Material-UI feito no curso "
            : " A Material-UI project made in the "}
          <a
            className="hyper-link"
            href="https://www.udemy.com/course/implement-high-fidelity-designs-with-material-ui-and-reactjs/"
            rel="noreferrer"
          >
            Implement High Fidelity Designs with Material-UI and ReactJS
          </a>
          {translate ? ", por Zachary Reece" : " course, by Zachary Reece"}
        </p>
        <b>{translate ? "Demonstração: " : "Demo: "}</b>
        <a
          className="hyper-link"
          href="https://arc-development-material-ui.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          https://arc-development-material-ui.netlify.app/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          href="https://github.com/PiviaN/Arc_Development"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/PiviaN/Arc_Development
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  // City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={quizPage}
          alt="City Guide App Project..."
        />
        <p className="mt-3">
          {translate
            ? "Este é um game de perguntas e repostas, onde você pode alcançar uma pontuação ao terminá-lo."
            : " This is a mini question-and-answer game where you can reach a score by completing it."}
        </p>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          href="https://github.com/PiviaN/Projeto-Quiz"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/PiviaN/Projeto-Quiz
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={openNews}
          alt="Portfolio Project..."
        />
        <p className="mt-3">
          {translate
            ? "Este é um site de notícias aberto ao usuário. É um sistema simples, onde o usuário pode fazer o login de várias maneiras, criar uma nova notícia e publicá-la. A postagem do usuário estará presente no mural de notícias logo após a publicação."
            : "This is a news site open to the user. It is a simple system, where the user can log-in through different ways, create a new news and post it. The user's post will be present on the news wall shortly after it has been posted."}
        </p>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          href="https://github.com/PiviaN/Open-News_App"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/PiviaN/Open-News_App
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  // Task Manager React and Redux Project
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={chatApp}
          alt="Chat App Project"
        />
        <p className="mt-3">
          {translate
            ? "Um projeto simples para chat simultâneo. Creditos para "
            : "A basic Chat App made with ChatEngine. Credits to "}

          <a
            className="hyper-link"
            href="https://www.youtube.com/watch?v=jcOKU9f86XE&t=2132s&ab_channel=JavaScriptMastery"
            target="_blank"
            rel="noreferrer"
          >
            JavaScriptMastery
          </a>
        </p>
        <b>{translate ? "Demonstração: " : "Demo: "}</b>
        <a
          className="hyper-link"
          href="https://pivian-chat-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          https://pivian-chat-app.netlify.app/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          href="https://github.com/PiviaN/chat-app"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/PiviaN/chat-app
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const openPopupboxTodoApp = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={todoApp}
          alt="Chat App Project"
        />
        <p className="mt-3">
          {translate
            ? "Um projeto simples que valida meus conhecimentos em CRUD, criando, listando, atualizando e deletando um item da lista de tarefas. Foi feito durante o "
            : "This project is a list of tasks in which you can manage your day-to-day duties. It was done with the help of Professor Leonardo Moura Leitão, during the "}
          <a
            className="hyper-link"
            href="https://www.udemy.com/course/react-redux-pt/"
            target="_blank"
            rel="noreferrer"
          >
            Curso React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!
          </a>{" "}
          {translate ? "da Udemy." : "from Udemy."}
        </p>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          href="https://github.com/PiviaN/todo_app"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/PiviaN/todo_app
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const openPopupboxECommerce = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={eCommerce}
          alt="Chat App Project"
        />
        <p className="mt-3">
          {translate
            ? "Um projeto básico de ECommerce possuindo todas as fundamentais funcionalidades e mais de um site de compras online, sendo estas o manuseio dos dados das compras feitas pelo usuário, sistema de pagamentos com cartão de crédito, etc. Créditos para "
            : "A basic ECommerce project with all its respective fundamental functionalities and more of an online shopping site, such as Handling the User's Data, Purchases, Payment System, etc. Credits to "}

          <a
            className="hyper-link"
            href="https://www.youtube.com/watch?v=377AQ0y6LPA&t=11217s&ab_channel=JavaScriptMastery"
            target="_blank"
            rel="noreferrer"
          >
            JavaScript Mastery
          </a>
        </p>
        <b>{translate ? "Demonstração: " : "Demo: "}</b>
        <a
          className="hyper-link"
          href="https://pivian-ecommerce.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          https://pivian-ecommerce.netlify.app/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          href="https://github.com/PiviaN/E-Commerce"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/PiviaN/E-Commerce
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const openPopupboxInfusion = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={infusionPage}
          alt="Infusion Web Theme"
        />
        <p className="mt-3">
          {translate
            ? "Um projeto CSS3 feito com a ajuda do Professor Daniel Tapias Morales durante o "
            : "A CSS3 Project made with the help of Professor Daniel Tapias Morales during the "}
          <a
            className="hyper-link"
            href="https://www.udemy.com/course/curso-web-design-fundamentos-aprenda-html-css-e-javascript/"
            target="_blank"
            rel="noreferrer"
          >
            Curso Web Design Completo: HTML5, CSS3 e JS + 5 Projetos
          </a>{" "}
          {translate ? "da Udemy." : "from Udemy."}
        </p>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          href="https://github.com/PiviaN/Curso-Web_Design"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/PiviaN/Curso-Web_Design
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfig = {
    titleBar: {
      enable: true,
      text: "Portfolio's Website",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxSerasa}>
            <img
              className="portfolio-image"
              src={serasa}
              alt="Serasa Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxMaterial}>
            <img
              className="portfolio-image"
              src={arcDevelopment}
              alt="Material UI Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img className="portfolio-image" src={quizPage} alt="Project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img
              className="portfolio-image"
              src={openNews}
              alt="Portfolio React and Material UI Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={openPopupboxTaskManager}
          >
            <img
              className="portfolio-image"
              src={chatApp}
              alt="Task Manager React and Redux Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxTodoApp}>
            <img
              className="portfolio-image"
              src={todoApp}
              alt="Todo App Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxECommerce}>
            <img
              className="portfolio-image"
              src={eCommerce}
              alt="ECommerce Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxInfusion}>
            <img
              className="portfolio-image"
              src={infusionPage}
              alt="Infusion Web Page"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfig} />
    </div>
  );
};

export default Pofrfolio;
