/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context";
import { setScore, setIndex } from "../../context/actions";
import { decodeText } from "../../utils";

import styles from "./Questions.module.css";

function Questions({ setDisplayResult, setDisplayQuestions }) {
  const { questions, error, score, index, dispatch } = useAppContext();

  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [options, setOptions] = useState([]);

  const question = questions[index];
  const answer = question && question.correct_answer;

  useEffect(() => {
    if (!question) {
      setDisplayResult(true);
      setDisplayQuestions(false);
      return;
    }
    let opts = [...question.incorrect_answers];
    opts.splice(Math.random() * 3, 0, question.correct_answer);

    setOptions(opts);
  }, [question]);

  const handleAnswerClick = (e) => {
    setIsAnswerSelected(true);
    setSelectedAnswer(e.target.textContent);

    if (e.target.textContent === answer) {
      dispatch(setScore(score));
    }

    if (index + 1 <= questions.length) {
      setTimeout(() => {
        setIsAnswerSelected(false);
        setSelectedAnswer(null);

        dispatch(setIndex(index));
      }, 1000);
    }
  };

  const getClass = (option) => {
    if (!isAnswerSelected) {
      return "";
    }
    if (option === answer) {
      return "correct";
    }
    if (option === selectedAnswer) {
      return "notCorrect";
    }
  };

  return !question ? (
    <div className={styles.questionWrapper}>
      <h1>loading</h1>
    </div>
  ) : error ? (
    <h1>{error}</h1>
  ) : (
    <div className={styles.questionWrapper}>
      <p>Question {index + 1}</p>
      <h4>Category: {question.category}</h4>
      <h5>Difficulty: {question.difficulty}</h5>
      <h2>{decodeText(question.question)}</h2>
      <ul>
        {options.map((option, i) => (
          <li key={i} onClick={handleAnswerClick} className={getClass(option)}>
            {decodeText(option)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
