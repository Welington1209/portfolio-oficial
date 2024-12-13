import { useState } from "react";
import { useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import "../styles/Home.css";
import imageProfile from "../assets/imageProfile.jpeg";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const TEXTS = [
    "Bem Vindo!👋",
    "Prepare-se para se surpreender...",
    "Com suluções criativas em front-end.",
  ];

  const [index, setIndex] = useState(0);

  const [hasImage, setHasImage] = useState(false);

  const image = () => {
    setHasImage(true);
  };

  setTimeout(image, 9000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 2500); // Troca de texto a cada 3 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente desmonta
  }, []);
  return (
    <>
      <section className="home">
        <div className="title-container">
          <h1 className="home-title">
            <TextTransition springConfig={presets.wobbly}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </h1>

          <h2 className="home-subtitle">
            Mas antes, deixa eu te contar um pouco{" "}
            <Link to={"/about"} className="about-link">
              sobre mim.
            </Link>{" "}
            😉
          </h2>
        </div>

        {hasImage && (
          <div className="image-container">
            <img src={imageProfile} alt="" />
          </div>
        )}
      </section>
      <Link>Voltar</Link>
    </>
  );
};

export default Home;
