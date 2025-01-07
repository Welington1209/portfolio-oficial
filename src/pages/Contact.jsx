import React from "react";
import "../styles/Contact.css";
import imageProfile from "../assets/imageProfile.jpeg";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const openEmail = (e) => {
    e.preventDefault();
    window.location.href = "mailto:welingtonsilva401@gmail.com";
  };
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
              <li className="insta">
                <Link
                  target="_blank"
                  to={
                    "https://www.instagram.com/w.silva_azulejista/profilecard/?igsh=MWNmb2o5b3p1cGR5MQ%3D%3D"
                  }
                >
                  <FaInstagram size={30} color="#E4405F" />
                  <p>@w.silva_azulejista</p>
                </Link>
              </li>

              <li className="wpp">
                <Link target="_blank" to="https://wa.me/qr/HFHK7TA5II5GF1">
                  <FaWhatsapp size={30} color="#25D366" />
                  <p>(48) 9 9155-1028</p>
                </Link>
              </li>

              <li className="linkedin">
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/welington-silva-9512a5279/"
                >
                  <FaLinkedin size={30} color="#0077B5" />
                  <p>Welington Silva</p>
                </Link>
              </li>

              <li className="email">
                <Link
                  to="#"
                  target="_blank"
                  onClick={(e) => {
                    e.preventDefault(); 
                    window.location.href = "mailto:welingtonsilva401@gmail.com"; 
                  }}
                >
                  <HiOutlineMail className="icon" size={30} />
                  <p>Welingtonsilva401@gmail.com</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Link className="btn none" to={"/projects"}>
        <FaArrowAltCircleLeft />
      </Link>
    </section>
  );
};

export default Contact;
