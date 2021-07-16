import ACTIONS from "./constants";

function setAmount(amount) {
  return {
    type: ACTIONS.SET_AMOUNT,
    payload: amount,
  };
}

function setCategory(category) {
  return {
    type: ACTIONS.SET_CATEGORY,
    payload: category,
  };
}

function setDifficulty(difficulty) {
  return {
    type: ACTIONS.SET_DIFFICULTY,
    payload: difficulty,
  };
}

function setQuestions(questions) {
  return {
    type: ACTIONS.SET_QUESTIONS,
    payload: questions,
  };
}

function setScore(score) {
  return {
    type: ACTIONS.SET_SCORE,
    payload: score + 1,
  };
}

function setIndex(index) {
  return {
    type: ACTIONS.SET_INDEX,
    payload: index + 1,
  };
}

function setError(error) {
  return {
    type: ACTIONS.SET_INDEX,
    payload: error,
  };
}

function reset() {
  return {
    type: ACTIONS.RESET,
  };
}

export {
  setAmount,
  setDifficulty,
  setCategory,
  setQuestions,
  setScore,
  setIndex,
  setError,
  reset,
};
