import React, { useState } from "react";
import Parent from "./components/Parent";
import Fetch from "./components/Fetch";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <h1>Without Redux</h1>
      <Parent />
      <Fetch loading={loading} />
      <button
        onClick={() => {
          setLoading(true);
        }}
      >
        loading 버튼
      </button>
    </div>
  );
}

export default App;
