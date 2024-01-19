import React from "react";
import author from "../me.jpg";

const AboutMe = ({ translate }) => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">
            {translate ? "sobre mim" : "about me"}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: translate
                ? "Meu nome é Pedro Vinícius, tenho 23 anos e sou um programador brasileiro, atuando a mais de 2 anos no mercado. <br /> Tenho algumas habilidades que sempre foquei em minha vida, como a criatividade, foco e resiliência. <br /> Desde meus 14 anos, sou apaixonado por idiomas. Decidi por mim próprio, quando criança, aprender Inglês na Internet, sozinho. E essa vontade de aprender nunca parou."
                : "My name is Pedro Vinícius, I'm 23 years old and I'm a Brazilian programmer, working in the market for over 2 years. <br /> I have skills that i have always focused on in my life, such as creativity, focus and resilience. <br /> Since I was 14 years old, I have been passionate about languages. I decided for myself, as a child, to learn English on the Internet, alone. And this desire to learn has never stopped.",
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
