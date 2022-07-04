import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSubscriber } from "../redux/reducer/subscribers/reducer";

import Child from "./Child";

const Parent = () => {
  // useSelector 사용 (이것들을 사용 대신: connet(), mapStateToProps())
  const { count } = useSelector((state) => state.persistedReducer.subscriber);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Parent Component</h2>
      <div className="items" style={{ border: "1px solid black" }}>
        <p>subscriber 수: {count}</p>
        <button
          onClick={() =>
            // dispatch({ type: "increment-counter" })
            dispatch(addSubscriber())
          }
        >
          구독하기!
        </button>
      </div>

      <Child />
    </div>
  );
};

export default Parent;
