// 액션 타입
const CREATE = "my-app/todos/CREATE";
const REMOVE = "my-app/todos/REMOVE";
const TOGGLE = "my-app/todos/TOGGLE";

// 액션 생성 함수
export const create = todo => ({
  type: CREATE,
  todo
});

export const remove = id => ({
  type: REMOVE,
  id
});

export const toggle = id => ({
  type: TOGGLE,
  id
});

const initialState = {
  // 초기상태...
};

// 리듀서
export default function reducer(state = initialState, action) {
  switch (action.type) {
  // 리듀서 관련 코드...
  }
}
