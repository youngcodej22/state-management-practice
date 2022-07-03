import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(1);

  const handleClickAdd = (e) => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <div className="items" style={{ border: "1px solid black" }}>
        <p>subscriber 수: {count}</p>
        <button onClick={handleClickAdd}>구독 하기 !</button>
      </div>

      <Child count={count} setCount={setCount} />
    </div>
  );
};

export default Parent;
