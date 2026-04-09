import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatarMario from "../images/avatars/avatarMario.jpg";
import avatarCabral from "../images/avatars/avatarCabral.jpg";
import avatarAlmir from "../images/avatars/avatarAlmir.jpg";
import avatarRenato from "../images/avatars/avatarRenato.jpg";
import avatarPedro from "../images/avatars/avatarPedro.jpg";

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
        <img src={avatarAlmir} alt="Almir Lima" />
        <div className="myCarousel">
          <h3>Almir Lima - Desenvolvedor Sênior</h3>
          <p>
            Durante o tempo em que estivemos na mesma equipe, o Pedro sempre
            demonstrou muito comprometimento, responsabilidade e vontade de
            aprender. Atuando como desenvolvedor pleno, ele trabalhou com
            tecnologias como Vue.js, Nuxt e Angular, sempre entregando soluções
            bem estruturadas e com qualidade.
            <br /> Além do conhecimento técnico, o Pedro também se destaca pela
            colaboração com o time, comunicação clara e proatividade no dia a
            dia, o que faz muita diferença em qualquer projeto.
          </p>
        </div>
      </>
      <>
        <img src={avatarRenato} alt="Renato Cesar Moretto" />
        <div className="myCarousel">
          <h3>Renato Cesar Moretto - Gerente de TI</h3>
          <p>
            Pedro se destaca principalmente pela velocidade de entrega e pela
            capacidade de reproduzir com fidelidade os protótipos e
            especificações de frontend recebidos. Ao longo de sua atuação,
            contribuiu no desenvolvimento do frontend de uma plataforma white
            label para gestão de seguros, além de diferentes jornadas white
            label e fluxos customizados de contratação, adaptados às
            necessidades de clientes e parceiros.
          </p>
        </div>
      </>
      <>
        <img src={avatarPedro} alt="Pedro Filipe" />
        <div className="myCarousel">
          <h3>Pedro Filipe - Tech Lead</h3>
          <p>
            Nesse tempo, ele se mostrou um desenvolvedor front-end consistente,
            com boas entregas e atenção à qualidade do código. Tem boa
            capacidade de entender os requisitos e traduzi-los em soluções
            funcionais, mantendo organização e clareza na implementação.
            <br />
            No dia a dia, participou bem das discussões técnicas e contribuiu
            com o time, principalmente quando alinhado sobre as prioridades e
            expectativas das entregas.
          </p>
        </div>
      </>
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
        <img src={avatarVini} alt="Vinícius Borges" />
        <div className="myCarousel">
          <h3>
            {translate
              ? "Vinícius Borges - Designer UX/UI"
              : "Vinícius Borges - UX/UI Designer"}
          </h3>
          <p>
            O Pedro é um desenvolvedor front-end altamente capacitado, muito
            detalhista, preocupado com a qualidade do código e também com a
            experiência do usuário. Ele é uma pessoa que possui muito
            conhecimento técnico, super colaborativo, aberto a discussões sobre
            soluções e melhorias na experiência do produto. <br />
            Além disso, destaco muito a maturidade profissional do Pedro, senso
            de responsabilidade e habilidade de lidar com todos os requisitos
            que eram propostos para suas entregas. Foi muito bom trabalhar com o
            Pedro, ele conseguia deixar todo o processo mais fluido, previsível
            e eficiente, o que bem é raro e precioso em times de produto. <br />
            Sem dúvida, é um profissional que eu recomendo fortemente e que
            adiciona muito valor a qualquer time que combine produto, design e
            engenharia.
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
