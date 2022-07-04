import { createSlice } from "@reduxjs/toolkit";
// import * as ActionTypes from "../../actions/action-types";

// reducers
// initialState
const initialState = {
  count: 1,
};

export const subscriberSlice = createSlice({
  name: "subscriber",
  initialState,
  reducers: {
    addSubscriber: (state) => {
      state.count = state.count + 1;
    },
    removeSubscriber: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { addSubscriber, removeSubscriber } = subscriberSlice.actions;

// reducers가 아닌 하나의 큰 reducer를 export
export default subscriberSlice.reducer;
