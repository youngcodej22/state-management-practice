// ! createSlice: reducer를 만드는 것을 도와준다.
import { createSlice } from "@reduxjs/toolkit";
// import * as ActionTypes from "../../actions/action-types";

// reducers
// initialState
const initialState = {
  commentList: [],
  loading: false,
  error: null,
};

// ! reducers: swtich case에서 fucntion으로 바꾼다.
export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    fetchCommentsRequest: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // ! 기존 방식과 다르게 return을 생략, spread operator 필요 없다.
      state.loading = true;
    },
    fetchCommentsSuccess: (state, action) => {
      // state.commentList = action.payload.data;
      state.commentList = action.payload;
      state.loading = false;
    },
    fetchCommentsFailure: (state, action) => {
      // state.error = action.payload.data;
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
// export const {
//   fetchCommentsRequest,
//   fetchCommentsSuccess,
//   fetchCommentsFailure,
// } = commentsSlice.actions;
export const commentsActions = commentsSlice.actions;

// reducers가 아닌 하나의 큰 reducer를 export
export default commentsSlice.reducer;

// const commentsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ActionTypes.FETCH_COMMENTS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case ActionTypes.FETCH_COMMENTS_SUCCESS:
//       return {
//         ...state,
//         commentList: action.payload,
//         loading: false,
//       };
//     case ActionTypes.FETCH_COMMENTS_FAILURE:
//       return {
//         ...state,
//         error: action.payload,
//         loading: false,
//       };
//     default:
//       // if(state === undefiend) return state
//       return state;
//   }
// };

// export default commentsReducer;
