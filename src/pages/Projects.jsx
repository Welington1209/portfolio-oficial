import React from "react";
import "../styles/Projects.css";

import HackathonPorject from "../img/home-ods.png";
import ImcCalcHome from "../img/home-imc.jpeg";
import ImcCalcResult from "../img/result-imc.jpeg";
import PortfolioCPDI from "../img/gif.gif";
import SaudeProject from "../img/+saude.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="project">
          <h4>Espaço ODS</h4>

          <img src={HackathonPorject} alt="" />

          <p>
            Site vencedor do hackathon CPDI, focado nos ODS 2 (Fome Zero) e 6
            (Água Potável e Saneamento). Apresenta um quiz interativo que
            desafia os usuários a testarem seus conhecimentos de forma dinâmica
            e educativa. Desenvolvido como uma SPA, utiliza Context API para
            gerenciar estados e garantir fluidez na navegação. O design é
            responsivo e intuitivo, promovendo acessibilidade e engajamento com
            os temas abordados.
          </p>

          <Link
            className="link-btn"
            target="_blank"
            to="https://welington1209.github.io/Hackaton-CPDI-ODS/"
          >
            Visitar Site
          </Link>
        </div>

        <div className="project">
          <h4>Imc Calculator</h4>

          <div>
            <img src={ImcCalcHome} alt="" />
            <img src={ImcCalcResult} alt="" />
          </div>

          <p>
            Aplicativo desenvolvido com Expo para calcular o Índice de Massa
            Corporal (IMC) de forma prática. O app exibe o resultado, oferece
            dicas de saúde personalizadas e permite compartilhar os dados
            diretamente com amigos ou redes sociais. Com um design intuitivo, é
            uma ferramenta útil e educativa para promover hábitos saudáveis.
          </p>

          <Link
            className="link-btn"
            target="_blank"
            to="https://welington1209.github.io/Hackaton-CPDI-ODS/"
          >
            Visitar Site
          </Link>
        </div>

        <div className="project">
          <h4>Portfolio Ibrahim Memon</h4>

          <img src={PortfolioCPDI} alt="" />

          <p>
            Portfólio desenvolvido durante o curso CPDI, baseado em um modelo
            Figma criado por Ibrahim Memon. Construído com JavaScript puro e
            integrado a uma biblioteca de animação de scroll, o projeto
            apresenta um design moderno e chamativo, destacando transições
            suaves e interatividade. Ideal para exibir projetos de forma
            profissional e atraente.
          </p>

          <Link
            className="link-btn"
            target="_blank"
            to="https://welington1209.github.io/portfolio-2024/"
          >
            Visitar Site
          </Link>
        </div>

        <div className="project">
          <h4>+Saúde</h4>

          <img src={SaudeProject} alt="" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero
            dicta soluta praesentium? In atque quis cupiditate consequuntur
            minus, odio beatae nobis placeat veniam unde voluptatibus soluta
            impedit hic
          </p>

          <Link
            className="link-btn"
            target="_blank"
            to="https://welington1209.github.io/projeto_CPDI/"
          >
            Visitar Site
          </Link>
        </div>

        <div className="project">
          <h4>Nome do projeto</h4>

          <img src="https://placehold.co/100" alt="" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero
            dicta soluta praesentium? In atque quis cupiditate consequuntur
            minus, odio beatae nobis placeat veniam unde voluptatibus soluta
            impedit hic
          </p>
        </div>

        <div className="project">
          <h4>Nome do projeto</h4>

          <img src="https://placehold.co/100" alt="" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero
            dicta soluta praesentium? In atque quis cupiditate consequuntur
            minus, odio beatae nobis placeat veniam unde voluptatibus soluta
            impedit hic
          </p>
        </div>

        <div className="project">
          <h4>Nome do projeto</h4>

          <img src="https://placehold.co/100" alt="" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero
            dicta soluta praesentium? In atque quis cupiditate consequuntur
            minus, odio beatae nobis placeat veniam unde voluptatibus soluta
            impedit hic
          </p>
        </div>

        <div className="project">
          <h4>Nome do projeto</h4>

          <img src="https://placehold.co/100" alt="" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero
            dicta soluta praesentium? In atque quis cupiditate consequuntur
            minus, odio beatae nobis placeat veniam unde voluptatibus soluta
            impedit hic
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
