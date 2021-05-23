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
          <p>
            {translate
              ? "Meu nome é Pedro Vinícius, tenho 20 anos e sou um estudante autodidata de Frontend. Tenho algumas habilidades que sempre foquei em minha vida, como a criatividade, foco e resiliência. Desde meus 14 anos, sou apaixonado por idiomas. Decidi por mim próprio, quando criança, aprender Inglês na Internet, sozinho. E essa vontade de aprender nunca parou."
              : "My name is Pedro Vinícius, I'm 20 years old and I am a self-taught student of Frontend. I have skills that i have always focused on in my life, such as creativity, focus and resilience. Since I was 14 years old, I have been passionate about languages. I decided for myself, as a child, to learn English on the Internet, alone. And this desire to learn has never stopped."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
