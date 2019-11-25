import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  // ES6 stage-2에서 소개한 transform-class-properties 문법
  static defaultProps = {
    name: "기본 이름"
  };
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
  };
  static state = {
    number: 0
  };

  /* constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  } */

  render() {
    return (
      <Fragment>
        <div>나의 새롭고 멋진 컴포넌트</div>
        <div>
          <p>
            안녕하세요, 제 이름은 {this.props.name} 입니다.
          </p>
          <p>
            저는 {this.props.age}살 입니다.
          </p>
          <p>
            숫자: {this.state.number}
          </p>
          <button
            onClick={() => {
              this.setState({
                number: this.state.number + 1
              });
            }}
          >
            더하기
          </button>
        </div>
      </Fragment>
    );
  }
}

/* MyComponent.defaultProps = {
  name: "기본 이름"
};

MyComponent.propTypes = {
  name: PropTypes.string
}; */

export default MyComponent;
