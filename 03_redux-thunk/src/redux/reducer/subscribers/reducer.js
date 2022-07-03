import * as ActionTypes from "../../actions/action-types";

// reducers
// initialState
const initialState = {
  count: 1,
};
const subscriberReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_SUBSCRIBER:
      return {
        ...state,
        count: state.count + 1,
      };
    case ActionTypes.REMOVE_SUBSCRIBER:
      // console.log("state", state);
      // console.log("action", action.payload);
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default subscriberReducer;
