import { Map, List } from "immutable";
import { handleActions, createAction } from "redux-actions";

const INSERT = "todos/INSERT";
const REMOVE = "todos/REMOVE";
const TOGGLE = "todos/TOGGLE";

export const insert = createAction(INSERT);
export const remove = createAction(REMOVE);
export const toggle = createAction(TOGGLE);

const initialState = List([
  Map({
    id: 0,
    text: "리액트 공부하기",
    done: true
  }),
  Map({
    id: 1,
    text: "컴포넌트 스타일링 해보기",
    done: false
  })
]);

export default handleActions(
  {
    [INSERT]: (state, action) => {
      /* payload 안에 있는 id, text, done의 레퍼런스
       push(Map(action.payload)) 해도 되지만, 나중에 어떤 데이터를 처리하는 액션인지 명확히 하기 위한 작업
    */
      const { id, text, done } = action.payload;
      return state.push(
        Map({
          id,
          text,
          done
        })
      );
    },
    [TOGGLE]: (state, action) => {
      const { payload: id } = action;
      /* const { index } = action.payload; // 와 동일하지만
       여기서 payload가 어떤 값을 의미하는지 쉽게 이해할 수 있다.
      */

      // TodoItem이 가지고 있는 id 값은 생성 당시의 index 번호이다.
      // id를 가지고 수정할 컴포넌트가 배열의 몇 번째 index인지 찾아서 수정한다.
      const index = state.findIndex(todo => todo.get("id") === id);
      return state.updateIn([index, "done"], done => !done);
    },
    [REMOVE]: (state, action) => {
      const { payload: id } = action;
      // TodoItem이 가지고 있는 id 값은 생성 당시의 index 번호이다.
      // id를 가지고 삭제할 컴포넌트가 배열의 몇 번째 index인지 찾아서 삭제한다.
      const index = state.findIndex(todo => todo.get("id") === id);
      return state.delete(index);
    }
  },
  initialState
);
