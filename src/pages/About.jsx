import React from "react";
import "../styles/About.css";
import {
  FaReact,
  FaGithub,
  FaArrowCircleRight,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import { DiSass, DiJsBadge } from "react-icons/di";
import { FaCss3 } from "react-icons/fa";
import { Link } from "react-router-dom";

const skillsData = [
  {
    icon: <DiSass size={40} color="#CC6699" />,
    title: "Sass",
    text: "Conhecimento na utilização do pré-processador Sass para estilização e organizada e limpa.",
    level: "2",
  },
  {
    icon: <FaCss3 size={40} color="#38BDF8" />,
    title: "Tailwind",
    text: "Experiência no uso de Tailwind para criar layouts responsivos e modernos de forma eficiente.",
    level: "4",
  },
  {
    icon: <FaGithub size={40} />,
    title: "GitHub",
    text: "Conhecimento no uso do GitHub para controle de versão e colaboração em projetos.",
    level: "5",
  },
  {
    icon: <FaReact size={40} color="#61DBFB" />,
    title: "React",
    text: "Criação de componentes reutilizáveis, gerenciamento de estado com hooks e integração com APIs, sempre seguindo boas práticas.",
    level: "7",
  },

  {
    icon: <DiJsBadge size={40} color="#F7DF1E" />,
    title: "JavaScript",
    text: "Habilidade em criar funcionalidades dinâmicas e interativas com JavaScript.",
    level: "7",
  },
];

const About = () => {
  return (
    <section id="about">
      <Link className="btn" to={"/"}>
        <FaArrowAltCircleLeft />
      </Link>

      <div className="main-content">
        <div className="description">
          <h2 className="title-description">Uma breve descrição</h2>

          <div className="paragraph-container">
            <p className="text-description">
              Olá! Meu nome é Welington, tenho 23 anos e estudo programação há
              mais de um ano. Já concluí o curso "Programando Meu Futuro" da
              CPDI, além do curso Formação Front-end. Também tive a honra de
              conquistar o primeiro lugar no Hackathon promovido pela CPDI.
            </p>

            <p className="text-description">
              Atualmente, estudo por conta própria, sempre buscando aprender
              mais e evoluir minhas habilidades. Para mim, programar vai além de
              um simples aprendizado — é uma maneira de escapar da rotina e dar
              vida às ideias. Nos momentos de lazer, gosto de assistir filmes e
              séries e, claro, não dispenso um bom chocolate.
            </p>
          </div>
        </div>

        <div className="skills">
          <h2 className="title-description">Habilidades</h2>

          <ul className="skills-container">
            {skillsData.map((skill, index) => (
              <li className={skill.title} key={index}>
                <div>{skill.icon}</div>

                <p>{skill.text}</p>

                <div className="level">
                  <p>Nível:</p>

                  <ul className="level-container">
                    {Array.from({ length: skill.level }).map((_, index) => (
                      <li key={index}></li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link className="btn" to={"/projects"}>
        <FaArrowCircleRight />
      </Link>
    </section>
  );
};

export default About;
