import React, { useEffect, useState } from "react";

import { getCategories } from "../../api";
import { useAppContext } from "../../context";
import { setAmount, setCategory, setDifficulty } from "../../context/actions";
import Button from "../Button";
import styles from "./Settings.module.css";

function Settings({ setDisplaySettings, setDisplayQuestions }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { dispatch } = useAppContext();

  useEffect(() => {
    getCategories()
      .then((data) => setCategories(data.trivia_categories))
      .catch((err) => setError(err.message))
      .finally(setLoading(false));
  }, []);

  return loading ? (
    <div className={styles.settingsWrapper}>
      <h1>Loading</h1>
    </div>
  ) : error ? (
    <div className={styles.settingsWrapper}>
      <h1>{error}</h1>
    </div>
  ) : (
    <div className={styles.settingsWrapper}>
      <form className={styles.formWrapper}>
        <label htmlFor="amount">Select Amount of Questions:</label>
        <input
          type="number"
          id="amount"
          min="10"
          max="50"
          placeholder="10"
          onChange={(e) => {
            e.target.value < 10
              ? dispatch(setAmount("10"))
              : e.target.value > 50
              ? dispatch(setAmount("50"))
              : dispatch(setAmount(e.target.value));
          }}
        />

        <label htmlFor="category">Select Category:</label>
        <select
          name="category"
          id="category"
          onBlur={(e) => {
            dispatch(setCategory(e.target.value));
          }}
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <label htmlFor="difficulty">Select Difficulty</label>
        <select
          name="difficulty"
          id="difficulty"
          onBlur={(e) => {
            dispatch(setDifficulty(e.target.value));
          }}
        >
          <option value="">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <Button
          setDisplaySettings={setDisplaySettings}
          setDisplayQuestions={setDisplayQuestions}
        />
      </form>
    </div>
  );
}

export default Settings;
