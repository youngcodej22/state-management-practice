import * as ActionTypes from "../../actions/action-types";

// reducers
// initialState
const initialState = {
  commentList: [],
  loading: false,
  error: null,
};
const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        commentList: action.payload,
        loading: false,
      };
    case ActionTypes.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      // if(state === undefiend) return state
      return state;
  }
};

export default commentsReducer;
