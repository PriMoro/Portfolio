import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutbody}>
      <div className={styles.namediv}>
        <h1 className={styles.name}>Hi! My name is Priscila Moro. </h1>
      </div>
      <div className={styles.jobdiv}>
        <h1 className={styles.job}>I'm a full stack developer</h1>
      </div>
      <h1 className={styles.description}>I'm passionate about technology.</h1>
      <h1 className={styles.description}>
        I really enjoy creating and developing software, especially if I can do
        it with a team.
      </h1>
      <h1 className={styles.description}>
        I'm pretty sure that IT world is my place.
      </h1>
      <div className={styles.row}>
        <a
          href="https://drive.google.com/file/d/1zl8Yo580G_lVcRzyq9wz0w4iv9AE8qXs/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className={styles.cv}
        >
          RESUME
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
        <Link to="/">
          <button className={styles.button}>Back</button>
        </Link>
      </div>
    </div>
  );
}
export default About;
