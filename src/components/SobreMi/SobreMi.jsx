import React from "react";
import { Link } from "react-router-dom";
import styles from "./SobreMi.module.css";

function SobreMi() {
  return (
    <div className={styles.aboutbody}>
      <div className={styles.namediv}>
        <h1 className={styles.name}>Hola! Soy Priscila Moro. </h1>
      </div>
      <div className={styles.jobdiv}>
        <h1 className={styles.job}>Full Stack Developer</h1>
      </div>
      <h1 className={styles.description}>Siento pasión por la tecnología.</h1>
      <h1 className={styles.description}>
        Disfruto creando y desarrollando software, especialmente si es en
        equipo.
      </h1>
      <h1 className={styles.description}>
        Estoy muy segura que el mundo IT es mi lugar.
      </h1>
      <div className={styles.row}>
        <a
          href="https://drive.google.com/file/d/1BD3_10IAj_Ix1Rvj14bO9QmHEjEWmdgV/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className={styles.cv}
        >
          CV
        </a>
        <a
          href="https://github.com/PriMoro/"
          target="_blank"
          rel="noreferrer"
          className={styles.github}
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/priscilamoro/"
          target="_blank"
          rel="noreferrer"
          className={styles.linkedin}
        >
          LINKEDIN
        </a>
      </div>

      <div>
        <Link to="/inicio">
          <button className={styles.button}>Atrás</button>
        </Link>
      </div>
    </div>
  );
}
export default SobreMi;
