import React from "react";
import "../styles/Projects.css";

import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import { projectsData } from "../data/projectsData";
import { Link } from "react-router-dom";

const Projects = () => {
  const [visibleProjectId, setVisibleProjectId] = useState(null);

  const handleProjects = (id) => {
    setVisibleProjectId(visibleProjectId === id ? null : id);
  };

  const handleDownload = (name) => {
    if (name === "picpay") {
      window.location.href = "/portfolio-oficial/app.apk";
    } else if (name === "imc") {
      window.location.href = "/portfolio-oficial/calc.apk";
    }
  };

  return (
    <section id="projects">
      <Link className="btn" to={"/about"}>
        <FaArrowAltCircleLeft />
      </Link>
      <div className="content">
        {visibleProjectId === null && (
          <>
            <h3 className="title">Galeria de Projetos</h3>
            <p className="subtitle">
              Clique na imagem do projeto escolhido para exibir mais
              informaçõoes sobre ele
            </p>
          </>
        )}
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <div
              onClick={() => handleProjects(index)}
              key={index}
              className="project"
            >
              <h4>{project.title}</h4>

              {Array.isArray(project.img) ? (
                <div className="picpay">
                  {project.img.map((image, idx) => (
                    <img key={idx} src={image} alt={project.title} />
                  ))}
                </div>
              ) : (
                <img src={project.img} alt={project.title} />
              )}

              {visibleProjectId === index ? <p>{project.description} </p> : ""}
              {project.link ? (
                <Link className="link-btn" target="_blank" to={project.link}>
                  Visitar Site
                </Link>
              ) : (
                <button
                  className="link-btn"
                  onClick={() => handleDownload(project.download)}
                >
                  Baixar Apk
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <Link className="btn" to={"/contact"}>
        <FaArrowAltCircleRight />
      </Link>
    </section>
  );
};

export default Projects;
