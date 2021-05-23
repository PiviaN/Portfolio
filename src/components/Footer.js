import React from "react";
import { WhatsappIcon, EmailIcon, LinkedinIcon } from "react-share";
import { Link } from "react-scroll";

const Footer = ({ translate }) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <a
                href="https://goo.gl/maps/2SXuyQfQvEJWGYf78"
                target="_blank"
                rel="noreferrer"
              >
                Cotia, São Paulo - Brazil
              </a>
            </div>
            <div className="d-flex">
              <a href="tel:+55011969138224">+55 011 96913-8224</a>
            </div>
            <div className="d-flex">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mail.google.com/mail/u/0/?fs=1&to=pedro.vsnep2001@gmail.com&su=Contato&body=Descrição&bcc=pedro.vsnep2001@gmail.com&tf=cm"
              >
                pedro.vsnep2001@gmail.com
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" href="#" className="footer-nav">
                  Home
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="about"
                  offset={-110}
                  className="footer-nav"
                >
                  {translate ? "sobre" : "About"}
                </Link>
                <br />
                <Link smooth={true} to="services" className="footer-nav">
                  {translate ? "Habilidades" : "Services"}
                </Link>
              </div>
              <div className="col">
                <Link
                  smooth={true}
                  to="experience"
                  offset={-110}
                  className="footer-nav"
                >
                  {translate ? "Experiência" : "Experience"}
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="portfolio"
                  offset={-110}
                  className="footer-nav"
                >
                  Portfolio
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="testimonials"
                  offset={-110}
                  className="footer-nav"
                >
                  {translate ? "Testemunhos" : "Testimonials"}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <a
                href="https://www.linkedin.com/in/pedro-nepomuceno-798b201a9/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=pedro.vsnep2001@gmail.com&su=Contato&body=Descrição&bcc=pedro.vsnep2001@gmail.com&tf=cm"
                rel="noreferrer"
                target="_blank"
              >
                <EmailIcon className="mx-3" size={36} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+55011969138224&text=Ol%C3%A1,%20eu%20vi%20o%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20entrar%20em%20contato%20com%20voc%C3%AA.%20Espero%20ansiosamente%20o%20seu%20retorno.%20Obrigado%20e%20tenha%20um%20bom%20dia."
                rel="noreferrer"
                target="_blank"
              >
                <WhatsappIcon className="mx-3" size={36} />
              </a>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;New Horizon | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
