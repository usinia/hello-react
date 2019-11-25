import React, { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button
          onClick={() =>
            this.scrollBox.scrollToBottom()} /* ref를 통해 컴포넌트 내부 메서드 접근 */
        >
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
