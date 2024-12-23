import React from "react";
import "../styles/Projects.css";

import { useState } from "react";

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
        {projectsData.map((project, index) => (
          <div key={index} className="project">
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

            <p>{project.description}</p>

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
    </section>
  );
};

export default Projects;
