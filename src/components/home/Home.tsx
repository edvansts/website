import React from "react";
import { FiArrowDown, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import Image from "next/image";
import { BiMouse } from "react-icons/bi";
import { githubProfileLink, linkedinProfileLink } from "../../constants";

import styles from "./styles.module.scss";

const Home: React.FC = () => {
  return (
    <section className="section">
      <div className={`${styles.container} container grid`}>
        <div className={`${styles.content} grid`}>
          <div className={styles.social}>
            <a href={linkedinProfileLink} target="_blank" rel="noreferrer">
              <FiGithub />
            </a>

            <a href={githubProfileLink} target="_blank" rel="noreferrer">
              <FiLinkedin />
            </a>
          </div>

          <div className={styles.selfImg}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <mask id="myMask" mask-type="alpha">
                <path
                  fill="#A0D5FF"
                  d="M52.2,-46.2C67.1,-37.4,78.1,-18.7,77,-1.1C75.9,16.5,62.6,32.9,47.8,46.8C32.9,60.6,16.5,71.8,-0.3,72.1C-17,72.4,-34.1,61.8,-47.7,47.9C-61.2,34.1,-71.3,17,-74.3,-3C-77.3,-23,-73.2,-46,-59.6,-54.8C-46,-63.6,-23,-58.2,-2.2,-56C18.7,-53.9,37.4,-55,52.2,-46.2Z"
                  transform="translate(100 100)"
                />
              </mask>

              <g mask="url(#myMask)">
                <path
                  fill="#A0D5FF"
                  d="M52.2,-46.2C67.1,-37.4,78.1,-18.7,77,-1.1C75.9,16.5,62.6,32.9,47.8,46.8C32.9,60.6,16.5,71.8,-0.3,72.1C-17,72.4,-34.1,61.8,-47.7,47.9C-61.2,34.1,-71.3,17,-74.3,-3C-77.3,-23,-73.2,-46,-59.6,-54.8C-46,-63.6,-23,-58.2,-2.2,-56C18.7,-53.9,37.4,-55,52.2,-46.2Z"
                  transform="translate(100 100)"
                />
                <image x="15" y="5" href="/img/edvan-ceu-azul2-removebg.png" />
              </g>
            </svg>
          </div>

          <div className={styles.data}>
            <h1>Hi, {"I'm Edvan"}</h1>
            <h3>Frontend developer</h3>
            {/* FIXME Melhorar descrição */}
            <p className={styles.description}>
              High level experience in web design and development knowledge,
              producing quality work.
            </p>
            <a href="#contact" className="button button--flex">
              Contact me <FiSend />
            </a>
          </div>

          <div className={styles.scroll}>
            <a href="#about" className="button--flex">
              <BiMouse size="1.75rem" /> <span>Scroll down</span>{" "}
              <FiArrowDown />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
