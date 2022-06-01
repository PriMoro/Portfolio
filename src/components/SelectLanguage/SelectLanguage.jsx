import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./SelectLanguage.module.css";
function SelectLanguage() {
  const [input, setInput] = React.useState({ language: "" });
  const history = useHistory();
  const handleInput = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
    console.log(input);
  };
  const handleClick = () => {
    if (input.language === "en") {
      history.push("/home");
    } else if (input.language === "es") {
      history.push("/inicio");
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.p}>SELECT YOUR LANGUAGE / SELECCIONA TU IDIOMA</h1>
      <select
        name="language"
        value={input.language}
        defaultValue="default"
        onChange={(e) => handleInput(e)}
        className={styles.select}
      >
        <option value="default">...</option>
        <option value="en">English - Inglés</option>
        <option value="es">Spanish - Español</option>
      </select>
      <button className={styles.button} onClick={() => handleClick()}>
        OK
      </button>
    </div>
  );
}

export default SelectLanguage;
