import React, { Component } from "react";

class EventPractice extends Component {
  /*
  // 렌더링시 함수 만들어 전달
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          onChange={e => {
            this.setState({
              message: e.target.value
            });
          }}
        />

        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: ""
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
  */

  // 함수를 미리 선언 후 전달
  state = {
    username: "",
    message: ""
  };

  /* constructor(props) {
    super(props);
    // 컴포넌트 임의 메소드는 기본적으로 this에 접근할 수 없다. 따라서 생성자에서 각 메서드와 this를 바인딩해 줘야한다. 그렇지 않으면 this는 undefined
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  } */

  // Property Initializer Syntax 사용, 화살표 함수 형태로 선언하므로써 constructor에 메서드 추가 않고도 this 바인드
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      username: "",
      message: ""
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="유저명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
