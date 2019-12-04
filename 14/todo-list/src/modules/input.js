import { Map } from "immutable";
import { handleActions, createAction } from "redux-actions";

const SET_INPUT = "input/SET_INPUT"; // reducer_name/action_name. reducer가 다를 때도 같은 action_name 가능

export const setInput = createAction(SET_INPUT);

const initialState = Map({
  value: ""
});

export default handleActions(
  {
    [SET_INPUT]: (state, action) => {
      return state.set("value", action.payload);
    }
  },
  initialState
);
