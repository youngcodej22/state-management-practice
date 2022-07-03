import React from "react";

// const ChildOfChild = (props) => {
const ChildOfChild = ({ count, setCount }) => {
  const handleClickAddMore = () => {
    setCount(count + 100);
  };

  return (
    <div>
      <h2>Child Of Child Component</h2>
      <p>부모component, Child를 통해 전달 받은 state를 사용</p>
      <div className="items" style={{ border: "1px solid black" }}>
        <p>subscriber 수: {count}</p>
        <button onClick={handleClickAddMore}>구독하기+100 !</button>
      </div>
    </div>
  );
};

export default ChildOfChild;
