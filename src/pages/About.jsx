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
          <h2 className="title-description">Minhas principais tecnologias</h2>

          <ul className="skills-container">
            <li>
              <DiJsBadge size={40} color="#F7DF1E" />
            </li>
            <li>
              <FaReact size={40} color="#61DBFB" />
            </li>
            <li>
              <FaCss3 size={40} color="#38B2AC" />
            </li>
            <li>
              <DiSass size={40} color="#CC6699" />
            </li>
            <li>
              <FaGithub size={40} color="#fafafa" />
            </li>
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
