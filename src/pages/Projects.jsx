import React from "react";
import "../styles/Projects.css";

import { useState } from "react";

import HackathonPorject from "../img/home-ods.png";
import ImcCalcHome from "../img/home-imc.jpeg";
import ImcCalcResult from "../img/result-imc.jpeg";
import PortfolioCPDI from "../img/gif.gif";
import SaudeProject from "../img/+saude.png";
import PicPayHome from "../img/picpay-home.jpeg";
import PicPayWallet from "../img/picpay-wallet.jpeg";
import { Link } from "react-router-dom";

const Projects = () => {
  const handleDownload = (name) => {
    if (name === "picpay") {
      window.location.href = "/portfolio-oficial/app.apk"; 
    } else if (name === "imc") {
      window.location.href = "/portfolio-oficial/calc.apk";
    }
  };

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

          <div className="imc">
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

          <button
            className="link-btn"
            onClick={() => handleDownload("imc")}
          >
            Baixar Apk
          </button>
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
            O projeto +Saúde foi criado como parte da formatura do curso CPDI,
            com a ideia de ser um site para serviços médicos. Ele permite que os
            usuários acessem seus exames, acompanhem consultas e encontrem
            profissionais de confiança de forma fácil e prática. O site tem um
            visual simples e moderno, pensado para facilitar a navegação e
            tornar a experiência do usuário mais agradável. Tudo foi feito com
            cuidado para que seja útil no dia a dia e ajude as pessoas a
            cuidarem melhor da saúde.
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
          <h4>PicPay Clone</h4>

          <div className="picpay">
            <img src={PicPayHome} alt="" />
            <img src={PicPayWallet} alt="" />
          </div>

          <p>
            Desenvolvido como um aplicativo para simular funcionalidades de uma
            carteira digital. Nele, o usuário começa com um saldo inicial
            fictício de R$ 100,00 e pode realizar transações simuladas, como
            pagamentos via Pix. O app permite cadastrar e compartilhar chaves
            Pix, além de gerar comprovantes fictícios ao final de cada
            transação, que podem ser baixados em PDF e compartilhados. Com uma
            interface simples e funcional, o objetivo do projeto é oferecer uma
            experiência prática e realista de uso, sendo ideal para aprendizado
            e demonstração de recursos financeiros digitais.
          </p>

          <button className="link-btn" onClick={() => handleDownload("picpay")}>
            Baixar Apk
          </button>
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
