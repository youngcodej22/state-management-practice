import React, { useState } from "react";
import ChildOfChild from "./ChildOfChild";

// ! 방법 1
// const Child = (props) => {

//! 방법 2 : destructuing(구조분해할당)
const Child = ({ count, setCount }) => {
  const handleClickRemove = (e) => {
    // ! 부모의 setState 함수를 props로 전달 받아서 연결
    setCount(count - 1);
  };
  return (
    <>
      <div>
        <h2>Child Component</h2>
        <p>부모component와 동일한 state를 사용</p>
        <div className="items" style={{ border: "1px solid black" }}>
          <p>subscriber 수: {count}</p>
          <button onClick={handleClickRemove}>구독 취소 !</button>
        </div>
      </div>
      <ChildOfChild count={count} setCount={setCount} />
    </>
  );
};

export default Child;
