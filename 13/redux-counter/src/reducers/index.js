// import * as types from "../actions/ActionTypes";

// // 초기 상태를 정의합니다.
// const initialState = {
//   color: "black",
//   number: 0
// };
// /* 리듀서 함수를 정의합니다. 리듀서는 state와 action을 파라미터로 받습니다.
//    state가 undefined일 때(스토어가 생성될 때) state 기본 값을 initialState로 사용합니다.
//    action.type에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
//    이 때 주의할 점은 state를 직접 수정하면 안되고,
//    기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야 합니다.
// */

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case types.INCREMENT:
//       return {
//         ...state,
//         number: state.number + 1
//       };
//     case types.DECREMENT:
//       return {
//         ...state,
//         number: state.number - 1
//       };
//     case types.SET_COLOR:
//       return {
//         ...state,
//         color: action.color
//       };
//     default:
//       return state;
//   }
// }

// export default counter;

// 서브 리듀서와 루트 리듀서
import number from "./number";
import color from "./color";

import { combineReducers } from "redux";

/* 서브 리듀서들을 하나로 합칩니다.
   combineReducers를 실행하고 나면, 나중에 store 형태를
   파라미터로 전달한 객체 모양대로 만듭니다.
   {
     numberData: {number:0},
     colorData: {color:'black'}
   }
*/

const reducers = combineReducers({
  numberData: number,
  colorData: color
});

export default reducers;
