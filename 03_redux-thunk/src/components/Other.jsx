import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addView, setView } from "../redux/actions/actions";

const Other = () => {
  const count = useSelector((state) => state.views.count);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);
  // type: string
  // console.log(typeof number);

  return (
    <div>
      <h2>Other Component</h2>
      <div className="items" style={{ border: "1px solid black" }}>
        <p>View 수: {count}</p>
        <button
          onClick={() =>
            // dispatch({ type: "increment-counter" })
            dispatch(addView())
          }
        >
          뷰 50추가!
        </button>
      </div>
      <div style={{ marginTop: "50px" }}>
        <h4>input값에 따라 세팅 되도록</h4>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="items" style={{ border: "1px solid black" }}>
        <p>View 수 세팅: {count}</p>
        <button
          onClick={() =>
            // dispatch({ type: "increment-counter" })
            dispatch(setView(number))
          }
        >
          세팅뷰추가!
        </button>
      </div>
    </div>
  );
};

export default Other;
