import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.landingpage}>
      <div className={styles.row}>
        <div className={styles.container}>
          <h1 className={styles.p}>Welcome to My Portfolio</h1>
        </div>
        <Link to="/about">
          <button className={styles.button}>See Profile</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
