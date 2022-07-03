// import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from './types';
// import { actionCreator } from './redux.js';
import * as ActionTypes from "./action-types";

// export const increase = actionCreator(Actions.INCREASE_COUNTER);

// export const actionCreator = (type) => (payload) => ({
//   type,
//   payload,
// });

/**
 * ! 1. 정의한 actino-types를 연결하고
 * ! 2. action을 정의하면서 payload가 있다면 연결
 * ! 3. action에서 연결한 payload를 reducer에 연결시킬 수 있다. (store설정도)
 * ! 4. 사실 component에서 호출한 action이 1~3까지의 코드를 가지고 있기 때문에 실행 가능한 것이다
 */

export const addSubscriber = () => {
  return {
    // type: ADD_SUBSCRIBER,
    type: ActionTypes.ADD_SUBSCRIBER,
  };
};

export const removeSubscriber = () => {
  return {
    // type: REMOVE_SUBSCRIBER,
    type: ActionTypes.REMOVE_SUBSCRIBER,
  };
};

export const addView = () => {
  return {
    type: ActionTypes.ADD_VIEW,
  };
};

export const setView = (number) => {
  return {
    type: ActionTypes.SET_VIEW,
    // useState에서 type string이다. 여기서 변환
    payload: Number(number),
  };
};

//! redux-thunk를 설치했기 때문에 dispatch를 parameter에 넣는 함수를 return 받는다.
// export const fetchComments = () => {
//   return (dispatch) => {
//     dispatch(fetchCommentsRequest());
//     fetch("https://jsonplaceholder.typicode.com/comments")
//       .then((response) => response.json())
//       .then((data) => dispatch(fetchCommentsSuccess(data)))
//       .catch((error) => dispatch(fetchCommentsFailure(error)));
//   };
// };

export const fetchComments = () => (dispatch) => {
  dispatch(fetchCommentsRequest());
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => dispatch(fetchCommentsSuccess(data)))
    .catch((error) => dispatch(fetchCommentsFailure(error)));
};

export const fetchCommentsRequest = () => {
  return {
    type: ActionTypes.FETCH_COMMENTS_REQUEST,
  };
};

export const fetchCommentsSuccess = (data) => {
  return {
    type: ActionTypes.FETCH_COMMENTS_SUCCESS,
    payload: data,
  };
};

export const fetchCommentsFailure = (error) => {
  return {
    type: ActionTypes.FETCH_COMMENTS_FAILURE,
    payload: error,
  };
};
