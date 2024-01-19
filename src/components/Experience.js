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
            <h3>12/2022 - Until now &#40;Olik&#41;</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: translate
                  ? "Desenvolvimento Front-end focado em Angular. <br /> Aprendizagem dos conceitos e estrutura de negócios do ramo de seguros em geral. <br /> Proposta da Empresa: Insurance as a Service. <br /> Alguns dos clientes trabalhados: Serasa; Chalinga; Juros Baixos."
                  : "Front-end development focused on Angular. <br /> Learning the concepts and business structure of the insurance industry in general. <br /> Company Proposal: Insurance as a Service. <br /> Some of the clients worked with: Serasa; Chalinga; Juros Baixos",
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
