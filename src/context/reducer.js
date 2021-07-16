import ACTIONS from "./constants";

const initialState = {
  settings: {
    amount: "10",
    category: "",
    difficulty: "",
  },
  error: "",
  questions: [],
  index: 0,
  score: 0,
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.SET_AMOUNT:
      return {
        ...state,
        settings: {
          ...state.settings,
          amount: payload,
        },
      };

    case ACTIONS.SET_CATEGORY:
      return {
        ...state,
        settings: {
          ...state.settings,
          category: payload,
        },
      };

    case ACTIONS.SET_DIFFICULTY:
      return {
        ...state,
        settings: {
          ...state.settings,
          difficulty: payload,
        },
      };

    case ACTIONS.SET_QUESTIONS:
      return {
        ...state,
        questions: payload,
      };

    case ACTIONS.SET_SCORE:
      return {
        ...state,
        score: payload,
      };

    case ACTIONS.SET_INDEX:
      return {
        ...state,
        index: payload,
      };

    case ACTIONS.RESET:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}

export { initialState, reducer };
