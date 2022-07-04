import React from "react";
import Parent from "./components/Parent";
import Other from "./components/Other";
import Fetch from "./components/Fetch";

function App() {
  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      <Parent />
      <Other />
      <Fetch />
    </div>
  );
}

export default App;
