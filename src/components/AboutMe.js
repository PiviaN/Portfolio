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
                ? "Meu nome é Pedro Vinícius, tenho 25 anos e sou um desenvolvedor com 4+ anos de experiência construindo aplicações web modernas e escaláveis.<br /> Experiência com arquitetura baseada em componentes, integração com APIs REST e desenvolvimento responsivo. <br /><br /> SKILLS <br /><br /> Frontend: React, Angular, Vue.js, TypeScript, JavaScript (ES6+), HTML5, CSS3 <br /> Backend: Node.js, NestJS, .NET <br /> Mobile: Ionic, React Native <br /> Tools & Workflow: Git, GitLab, Azure DevOps, CI/CD, Agile (Scrum)"
                : "My name is Pedro Vinícius, I'm 25 years old and I'm a software developer with 4+ years of experience building web applications. <br /> Experience with component-based architecture, REST API Integration, and responsive development. <br /><br /> SKILLS <br /><br /> Frontend: React, Angular, Vue.js, TypeScript, JavaScript (ES6+), HTML5, CSS3 <br /> Backend: Node.js, NestJS, .NET <br /> Mobile: Ionic, React Native <br /> Tools & Workflow: Git, GitLab, Azure DevOps, CI/CD, Agile (Scrum",
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
