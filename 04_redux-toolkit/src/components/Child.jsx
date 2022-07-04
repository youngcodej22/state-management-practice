import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSubscriber } from "../redux/reducer/subscribers/reducer";

const Child = () => {
  const { count } = useSelector((state) => state.persistedReducer.subscriber);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Child Component</h2>
      <p>부모component와 동일한 state를 사용</p>
      <div className="items" style={{ border: "1px solid black" }}>
        <p>subscriber 수: {count}</p>
        <button
          onClick={() =>
            // dispatch({ type: "increment-counter" })
            dispatch(removeSubscriber())
          }
        >
          구독하기!
        </button>
      </div>
    </div>
  );
};

export default Child;
