import { createSlice } from "@reduxjs/toolkit";
// import * as ActionTypes from "../../actions/action-types";

const initialState = {
  count: 100,
};

export const viewsSlice = createSlice({
  name: "views",
  initialState,
  reducers: {
    addView: (state) => {
      state.count = state.count + 50;
    },
    setView: (state, action) => {
      state.count = state.count + Number(action.payload);
    },
  },
});

export const { addView, setView } = viewsSlice.actions;

// reducers가 아닌 하나의 큰 reducer를 export
export default viewsSlice.reducer;
