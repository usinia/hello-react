import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollTop, scrollHeight, clientHeight } = this.box; // 스크롤바 위치, 스크롤박스 내부 높이, 스크롤박스 외부 높이
    /* 비구조화 문법
    const scrollHeight = this.box.scrollHeight;
    const clientHeight = this.box.clientHeight;
    와 동일한 의미
    */
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      width: "300px",
      height: "300px",
      overflow: "auto",
      position: "relative"
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)"
    };

    return (
      <div style={style} ref={ref => (this.box = ref)}>
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
