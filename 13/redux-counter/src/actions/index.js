/* action 객체를 만드는 액션 생성 함수들을 선언합니다. (action creators).
   여기서 () => ({}) 은 function () { return {} } 와 동일한 의미입니다.
*/
import * as types from "./ActionTypes";

// 카운터를 새로 만들 때 기본 색상을 받을 수 있도록 정의
export const create = color => ({
  type: types.CREATE,
  color
});

// 맨 마지막 카운터를 삭제하므로 index는 생략
export const remove = () => ({
  type: types.REMOVE
});

export const increment = index => ({
  type: types.INCREMENT,
  index
});

export const decrement = index => ({
  type: types.DECREMENT,
  index
});

// 다른 액션 생성자들과 달리 파라미터를 갖고 있습니다.
export const setColor = ({ index, color }) => ({
  type: types.SET_COLOR,
  index,
  color
});
