import React from "react";
import { Link } from "react-router-dom";
import styles from "./Inicio.module.css";
function Inicio() {
  return (
    <div className={styles.landingpage}>
      <div className={styles.row}>
        <div className={styles.container}>
          <h1 className={styles.p}>Bienvenido/a a mi Portafolio</h1>
        </div>
        <div className={styles.buttons}>
          <Link to="/">
            <button className={styles.button}>Atrás</button>
          </Link>
          <Link to="/sobremi">
            <button className={styles.button}>Ver Perfil</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
