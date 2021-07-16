import React from "react";

import { getQuestions } from "../../api";

import { setError, setQuestions } from "../../context/actions";
import { useAppContext } from "../../context";
import styles from "./Button.module.css";

function Button({ setDisplayQuestions, setDisplaySettings }) {
  const { settings, dispatch } = useAppContext();

  const clickHandler = (e) => {
    e.preventDefault();
    getQuestions(settings.amount, settings.category, settings.difficulty)
      .then((data) => dispatch(setQuestions(data.results)))
      .catch((err) => dispatch(setError(err.message)))
      .finally(() => {
        setDisplaySettings(false);
        setDisplayQuestions(true);
      });
  };

  return (
    <button
      type="submit"
      onClick={clickHandler}
      className={styles.customButton}
    >
      Start Quiz
    </button>
  );
}

export default Button;
