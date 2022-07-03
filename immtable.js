/**
 * asset 폴더에 이미지 참고
 *
 * redux에서는 왜 immutable (...state) 가 중요한지 설명
 *
 * ...state를 하지 않을 경우 state는 그 객체 속으로 계속 재할당 된다. (persist 사용 시 개발자 도구 Application에서 볼 수 있다.)
 */

//! mutable (변할수 있는)
const initialState = {
  count: 1,
};

const state = initialState;

console.log("state: ", state.count);

const state_reassign = { state };
state_reassign.count = state_reassign.count + 1;
console.log("state_reassign: ", state_reassign);

const state_reassign_reassign = { state_reassign };
state_reassign_reassign.count = state_reassign_reassign.count + 1;
console.log("state_reassign_reassign: ", state_reassign_reassign);

//! immutable (변경할 수 없는, 불변의)
// const initialState = {
//   count: 1,
// };

// const state = initialState;

// console.log("state: ", state.count);

// const state_reassign = { ...state };
// state_reassign.count = state_reassign.count + 1;
// console.log("state_reassign: ", state_reassign);

// const state_reassign_reassign = { ...state_reassign };
// state_reassign_reassign.count = state_reassign_reassign.count + 1;
// console.log("state_reassign_reassign: ", state_reassign_reassign);
