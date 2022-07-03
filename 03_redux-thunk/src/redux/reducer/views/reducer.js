import * as ActionTypes from "../../actions/action-types";

const initialState = {
  count: 100,
};
const viewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_VIEW:
      return {
        ...state,
        count: state.count + 50,
      };
    case ActionTypes.SET_VIEW:
      // console.log("state", state);
      console.log("action", action);
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

export default viewsReducer;
