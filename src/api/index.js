const CATEGORIES_URL = "https://opentdb.com/api_category.php";
const QUESTIONS_URL = "https://opentdb.com/api.php?";

async function getQuestions(amount, category, difficulty) {
  const response = await fetch(
    `${QUESTIONS_URL}amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  );

  if (response.ok) {
    const data = response.json();

    return data;
  } else {
    throw new Error("Something went wrong");
  }
}

async function getCategories() {
  const response = await fetch(CATEGORIES_URL);

  if (response.ok) {
    const data = response.json();

    return data;
  } else {
    throw new Error("Something went wrong");
  }
}

export { getQuestions, getCategories };
