import React, { Component } from "react";
import Buttons from "../components/Buttons";
import CounterListContainer from "./CounterListContainer";
import getRandomColor from "../lib/getRandomColor";

import { connect } from "react-redux";
import * as actions from "../actions";

class App extends Component {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div className="App">
        <Buttons onCreate={onCreate} onRemove={onRemove} />
        <CounterListContainer />
      </div>
    );
  }
}

// 액션 생성 함수 준비
const mapToDispatch = dispatch => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: () => dispatch(actions.remove())
});

export default connect(null, mapToDispatch)(App);
/* AppContainer를 따로 만들어 export default connect(null, mapToDispatch)(App) 하지 않고
   App에서 컴포넌트를 정의하고 바로 연결할 수 있다.
*/
