import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

import { reducer, initialState } from "./reducer";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    return new Error("Something Went Wrong");
  }

  return context;
}

export { useAppContext, AppContextProvider };
