import React from "react";
import { useAppContext } from "../../context";
import { reset } from "../../context/actions";

import styles from "./Result.module.css";

function Result({ setDisplayResult, setDisplaySettings }) {
  const { score, dispatch } = useAppContext();
  const resetQuiz = () => {
    dispatch(reset());
    setDisplayResult(false);
    setDisplaySettings(true);
  };

  return (
    <div className={styles.resultWrapper}>
      <h1>Final Score: {score}</h1>
      <button onClick={resetQuiz}>Reset Quiz</button>
    </div>
  );
}

export default Result;
