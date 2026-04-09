import React from "react";

const Experience = ({ translate }) => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>{translate ? "experiência" : "experience"}</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>08/2021 - 12/2022 &#40;Opah IT&#41;</h3>
            <p>
              {translate
                ? "Estágio em Desenvolvimento de Aplicações Web e aprendizado dos fundamentos de Back-End com NestJS"
                : "Internship in Web Application Development and learning Back-End fundamentals with NestJS"}
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3
              dangerouslySetInnerHTML={{
                __html: translate
                  ? "02/2025 - 03/2026: Olik (Desenvolvedor Front-end Pleno)"
                  : "02/2025 - 03/2026: Olik (Mid-level Front-end Developer)",
              }}
            ></h3>
            <p
              dangerouslySetInnerHTML={{
                __html: translate
                  ? "- Promoção de júnior para pleno devido à alta performance técnica. <br /> - Implementação de fluxos complexos e altamente personalizados utilizando Vue 3. <br /> - Trabalhei em melhorar a escalabilidade e experiência do usuário através de arquitetura moderna de frontend. <br />"
                  : "- Promotion from junior to full-fledged position, assuming greater technical responsibility. <br /> - Development of an application in Vue 3 to ensure standardization and visual identity. <br /> - Implementation of systems with complex and highly customized workflows. <br /> - Work on solutions aimed at both internal users and end clients. <br /> - Focus on quality of delivery, scalability, and user experience.",
              }}
            />
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3
              dangerouslySetInnerHTML={{
                __html: translate
                  ? "12/2022 - 02/2025: Olik (Desenvolvedor Front-end Júnior)"
                  : "12/2022 - 02/2025: Olik (Junior Front-end Developer)",
              }}
            ></h3>
            <p
              dangerouslySetInnerHTML={{
                __html: translate
                  ? "- Liderança do desenvolvimento frontend por mais de 1 ano em projetos legados e novos, utilizando Angular, React e Vue.js em ambiente white-label. <br /> - Escalei a operação de Frontend de uma equipe de 3 desenvolvedores para mais de 50 colaboradores, utilizando Scrum, Azure DevOps e GitLab. <br /> - Desenvolvimento de soluções customizadas para clientes corporativos, alinhadas à identidade visual e fluxos de negócio. <br />"
                  : "- Spearheaded frontend development for all company projects (legacy and new), leading initiatives across Angular, React, and Vue.js in a fast‑paced, white‑label environment. <br /> - Scaled  frontend  operations from a 3‑dev team to 50+ employees, delivering 10+ client projects under tight deadlines using Agile (Scrum) and modern tools (Azure DevOps, GitLab). <br /> - Tech authority: Recognized as the most requested frontend developer, driving adoption of latest framework versions and best practices (modular architecture, CI/CD). <br /> High‑impact collaborations: Built tailored solutions for enterprise clients, ensuring seamless alignment with their brand and workflows.",
              }}
            />
          </div>
        </div>
        {/* - */}
        {/* <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2015-2016</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              omnis laboriosam odio deserunt reprehenderit optio cum ratione
              sequi pariatur deleniti iste perspiciatis officiis minima iusto
              hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque
              delectus asperiores et quas qui.
            </p>
          </div>
        </div> */}
        {/* - */}
        {/* <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2016-2017</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              omnis laboriosam odio deserunt reprehenderit optio cum ratione
              sequi pariatur deleniti iste perspiciatis officiis minima iusto
              hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque
              delectus asperiores et quas qui.
            </p>
          </div>
        </div> */}
        {/* - */}
        {/* <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017-2018</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              omnis laboriosam odio deserunt reprehenderit optio cum ratione
              sequi pariatur deleniti iste perspiciatis officiis minima iusto
              hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque
              delectus asperiores et quas qui.
            </p>
          </div>
        </div> */}
        {/* - */}
        {/* <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2020</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              omnis laboriosam odio deserunt reprehenderit optio cum ratione
              sequi pariatur deleniti iste perspiciatis officiis minima iusto
              hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque
              delectus asperiores et quas qui.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
