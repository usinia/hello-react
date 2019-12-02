// redux가 제대로 import 됐는지 확인
// console.log(Redux);

// 액션 생성 함수 만들기
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const increment = diff => ({
  type: INCREMENT,
  diff: diff
});

const decrement = diff => ({
  type: DECREMENT,
  diff: diff
});

// console.log(increment(1));
// console.log(decrement(1));

// 리듀서 만들기
/* const initialState = {
    number: 0,
} */
const initialState = {
  number: 1,
  foo: "bar",
  baz: "quz"
};

// 리듀서 함수
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      //   return { number: state.number + action.diff };
      //   return Object.assign({}, state, { number: state.number + action.diff });
      return { ...state, number: state.number + action.diff };
    case DECREMENT:
      //   return { number: state.number - action.diff };
      //   return Object.assign({}, state, { number: state.number - action.diff });
      return { ...state, number: state.number - action.diff };
    default:
      return state;
  }
}

// console.log(counter(undefined, increment(1)));
// => 리덕스를 사용하면 리듀서 함수를 직접 실행하는 일은 없다. 이 함수는 리덕스가 실행한다.

const { createStore } = Redux;
/* 나중에 우리가 실제로 프로젝트에서 불러올 때는
   import { createState } from 'redux';
   이렇게 불러옵니다.
*/

// 스토어는 단 하나
const store = createStore(counter); // createStore(리듀서 함수, [store 기본 값]);

// 반환된 unsubscribe 함수를 변수에 저장
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
// subscribe에 파라미터로 전달한 함수 객체를 스토어에 변화가 일어날 때마다 실행

// 액션을 store에 전달
store.dispatch(increment(1));
store.dispatch(decrement(5));
store.dispatch(increment(10));
