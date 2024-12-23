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
import DevQuiz from "../img/dev-quiz.png";
import MoviesLib from "../img/movies-lib.png";
import GitHubFinder from "../img/github-finder.png";


import { projectsData } from "../data/projectsData";
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
            "Site vencedor do hackathon CPDI, focado nos ODS 2 (Fome Zero) e 6
            (Água Potável e Saneamento). Apresenta um quiz interativo que
            desafia os usuários a testarem seus conhecimentos de forma dinâmica
            e educativa. Desenvolvido como uma SPA, utiliza Context API para
            gerenciar estados e garantir fluidez na navegação. O design é
            responsivo e intuitivo, promovendo acessibilidade e engajamento com
            os temas abordados."
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
          <h4>Movies Lib</h4>

          <img src={MoviesLib} alt="" />

          <p>
            Desenvolvido durante o curso Formação Front-end, esta biblioteca de
            filmes utiliza a API do TMDB para oferecer uma experiência
            interativa. Funcionalidades principais: Categorias: Filmes mais
            populares, melhores avaliados e futuros lançamentos. Busca Avançada:
            Pesquise qualquer filme e acesse detalhes como sinopse, data de
            lançamento, duração, custo de produção e elenco. Detalhamento
            Completo: Cada filme possui uma página dedicada com informações
            detalhadas, organizadas de forma intuitiva. O projeto combina
            consumo de APIs REST com uma interface dinâmica.
          </p>

          <Link
            className="link-btn"
            target="_blank"
            to="https://movies-lib-rho.vercel.app/"
          >
            Visitar Site
          </Link>
        </div>

        <div className="project">
          <h4>Dev Quiz</h4>

          <img src={DevQuiz} alt="" />

          <p>
            Este projeto foi desenvolvido durante o curso Formação Front-end e
            aprimorado com funcionalidades extras. Trata-se de um quiz temático
            sobre programação, onde o usuário pode: Escolher a categoria das
            perguntas antes de iniciar o jogo, personalizando a experiência;
            Receber dicas relacionadas à pergunta como forma de ajuda; Utilizar
            a opção de excluir uma alternativa errada, aumentando as chances de
            acertar; Além das funcionalidades aprendidas no curso, foram
            adicionadas melhorias personalizadas, como a possibilidade de
            alternar categorias de forma dinâmica, refinamento no design
            responsivo, e efeitos interativos para tornar a experiência mais
            envolvente.
          </p>

          <Link
            className="link-btn"
            target="_blank"
            to="https://welington1209.github.io/dev_quiz/"
          >
            Visitar Site
          </Link>
        </div>

        <div className="project">
          <h4>GitHub Finder</h4>

          <img src={GitHubFinder} alt="" />

          <p>
            É uma ferramenta que permite buscar e explorar perfis de usuários no
            GitHub. Ao inserir um nome de usuário, o sistema exibe informações
            detalhadas, como o perfil do usuário, seus principais repositórios,
            seguidores, e estatísticas de atividade. A aplicação oferece uma
            interface simples e rápida, facilitando a navegação e o acesso ao
            conteúdo de outros desenvolvedores. Utiliza a API pública do GitHub
            para coletar e exibir os dados relevantes de forma dinâmica e
            eficiente.
          </p>

          <Link
            className="link-btn"
            target="_blank"
            to="https://welington1209.github.io/dev_quiz/"
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

          <button className="link-btn" onClick={() => handleDownload("imc")}>
            Baixar Apk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
