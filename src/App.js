import React, { useState } from "react";
import Questions from "./componenets/Questions";
import Result from "./componenets/Result";
import Settings from "./componenets/Settings";
import { AppContextProvider } from "./context";

function App() {
  const [displaySettings, setDisplaySettings] = useState(true);
  const [displayQuestions, setDisplayQuestions] = useState(false);
  const [displayResult, setDisplayResult] = useState(false);

  return (
    <AppContextProvider>
      {displaySettings && (
        <Settings
          setDisplaySettings={setDisplaySettings}
          setDisplayQuestions={setDisplayQuestions}
        />
      )}
      {displayQuestions && (
        <Questions
          setDisplayQuestions={setDisplayQuestions}
          setDisplayResult={setDisplayResult}
        />
      )}
      {displayResult && (
        <Result
          setDisplayResult={setDisplayResult}
          setDisplaySettings={setDisplaySettings}
        />
      )}
    </AppContextProvider>
  );
}

export default App;
