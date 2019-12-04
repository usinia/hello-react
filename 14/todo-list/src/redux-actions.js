import { createAction, handleActions } from "redux-actions";

// 액션 타입
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET_COLOR = "SET_COLOR";

// createAction으로 액션 생성 자동화
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
// export const setColor = createAction(SET_COLOR);
export const setColor = createAction(SET_COLOR, ({ index, color }) => ({
  index,
  color
}));
// 어떤 파라미터를 받는지 코드상으로 명시

increment(3);
/*
{
  type: "INCREMENT",
  payload: 3
}
*/

setColor({ index: 5, color: "#fff" });
/*
{
  type: "SET_COLOR",
  payload: {
    index: 5,
    color: "#fff"
  }
}
*/

// switch 대신 handleActions 사용
// switch는 스코프가 리듀서 함수 전체여서 액션 별로 동일한 변수 이름을 사용하지 못한다.
// handleActions에 실행할 함수를 넣은 객체와 기본 상태값을 넘겨 사용한다.
const reducer = handleActions(
  {
    INCREMENT: (state, action) => ({
      counter: state.counter - action.payload
    }),
    DECREMENT: (state, action) => ({
      counter: state.counter - action.payload
    })
  },
  { counter: 0 }
);
