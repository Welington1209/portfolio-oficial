import React from "react";
import "../styles/Contact.css";
import imageProfile from "../assets/imageProfile.jpeg";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <Link className="btn" to={"/projects"}>
        <FaArrowAltCircleLeft />
      </Link>
      <div className="content">
        <div className="header">
          <h2 className="title">Contatos</h2>
          <p className="subtitle">
            Agora que já conferiu meu trabalho, que tal me dar a oportunidade de
            somar ao seu time?
          </p>
        </div>

        <div className="contacts-container">
          <div className="img-container">
            <img src={imageProfile} alt="" />
          </div>

          <div className="contacts">
            <ul>
              <li>Instagram</li>
              <li>WhatsApp</li>
              <li>Linkedin</li>
              <li>Email</li>
            </ul>
          </div>
        </div>
      </div>
      <Link className="btn" to={"/projects"}>
        <FaArrowAltCircleLeft />
      </Link>
    </section>
  );
};

export default Contact;
