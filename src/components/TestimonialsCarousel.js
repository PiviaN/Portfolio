import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatarMario from "../images/avatars/avatarMario.jpg";
import avatarCabral from "../images/avatars/avatarCabral.jpg";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialsCarousel = ({ translate }) => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatarMario} alt="John Doe 1" />
        <div className="myCarousel">
          <h3>{translate ? "Professor Mário - TI" : "Mario - IT Professor"}</h3>
          <p>
            {translate
              ? "Um estudante dedicado, cheio de vontade e muito focado nos seus objetivos. Além de ser determinado, nunca desiste quando surge um novo problema."
              : "A hardworking student, full of goodwill and very focused on achieving his goals. In addition to being very determined, he also never gives up on solving a problem."}
          </p>
        </div>
      </>
      <>
        <img src={avatarCabral} alt="Jane Doe 2" />
        <div className="myCarousel">
          <h3>
            {translate
              ? "Gabriel - Desenvolvedor Java"
              : "Gabriel - Java Developer"}
          </h3>
          <p>
            {translate
              ? "Um ótimo desenvolvedor que sabe como trabalhar em equipe e sempre se esforça em melhorar suas habilidades."
              : "A great developer who knows how to work as a team and strives to improve his skills every day"}
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="John Doe 3" />
        <div className="myCarousel">
          <h3>John Doe 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            ratione sequi saepe dicta blanditiis, molestias eum excepturi quod
            fugiat veniam!
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt="John Doe 4" />
        <div className="myCarousel">
          <h3>John Doe 4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            ratione sequi saepe dicta blanditiis, molestias eum excepturi quod
            fugiat veniam!
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
