import React from "react";
import "./App.css";

import testData from "./testData.json";
import LoanAccount from "./components/LoanAccount";

function App() {
  return (
    <div className="App">
      <LoanAccount payload={testData} />
    </div>
  );
}

export default App;
