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
            <h3>2020-2021</h3>
            <p>
              {translate
                ? "Eu venho estudando e fazendo cursos da Udemy desde Augusto de 2020, Em apenas poucos meses, eu me considero ter aprendido bastante das mais recentes tecnologias do mercado. Recentemente estou procurando pela minha primeira oportunidade de trabalho, para eu poder por a mão na massa, do jeito que tem que ser."
                : "I have been Programming and doing amazing courses on Udemy since August 2020. In only a few months, i have already learned a lot of technologies. But now i'm looking for my first job, so i can get my hands dirty."}
            </p>
          </div>
        </div>
        {/* - */}
        {/* <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014-2015</h3>
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
