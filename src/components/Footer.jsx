import s from "./../styles/Footer.module.scss";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
const githubLink = "https://github.com/lombana-camilo/weather-app-react";
const linkedInLink = "https://www.linkedin.com/in/camilo-lombana-970812196";
const emailLink = "mailto:lombana.camilo@hotmail.com";

const Footer = () => {
  return (
    <div className={s.footer}>
      <p>Camilo Lombana &copy; 2022</p>
      <div className="icons">
        <a href={githubLink} rel="noreferrer" target={"_blank"}>
          <FaGithub size="30px" style={{ margin: "0 0.6rem" }} />
        </a>
        <a href={emailLink}>
          <FaEnvelope size="30px" style={{ margin: "0 0.6rem" }} />
        </a>

        <a href={linkedInLink} target={"_blank"} rel="noreferrer">
          <FaLinkedin size="30px" style={{ margin: "0 0.6rem" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
