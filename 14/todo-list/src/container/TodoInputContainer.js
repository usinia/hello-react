import React, { Component } from "react";
import TodoInput from "../components/TodoInput";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// 액션 생성 함수들을 한꺼번에 불러오기
import * as inputActions from "../modules/input";
import * as todosActions from "../modules/todos";

class TodoInputContainer extends Component {
  id = 1;
  getId = () => ++this.id;

  handleChange = e => {
    const { value } = e.target;
    const { InputActions } = this.props;
    InputActions.setInput(value);
  };

  handleInsert = () => {
    const { InputActions, TodosActions, value } = this.props;
    const todo = {
      id: this.getId(),
      text: value,
      done: false
    };
    TodosActions.insert(todo);
    InputActions.setInput("");
  };

  render() {
    const { value } = this.props;
    const { handleChange, handleInsert } = this;
    return (
      <TodoInput
        onChange={handleChange}
        onInsert={handleInsert}
        value={value}
      />
    );
  }
}

// mapStateToProps와 mapDispatchToProps를 내부에서 바로 정의
export default connect(
  state => ({ value: state.input.get("value") }) /* mapStateToProps */,
  dispatch => ({
    /* bindActionCreators 를 사용하면 자동으로 다음 작업들을 한다.
    {
      actionCreator: (...params) => dispatch(actionCreator(...params))
    }
    ex)
    InputActions: {
      setInput: (value) => dispatch(inputActions.setInput(value))
    }
    따라서 별도로 dispatch 할 필요는 없다. 호출할 때는 this.props.InputActions.setInput
    */
    InputActions: bindActionCreators(inputActions, dispatch),
    TodosActions: bindActionCreators(todosActions, dispatch)
  }) /* mapDispatchToProps */
)(TodoInputContainer);
