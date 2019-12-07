import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as counterActions from "./modules/counter";
import * as postActions from "./modules/post";

class App extends Component {
  cancelRequest = null;

  handleCancel = () => {
    "handleCancel", this.cancelRequest;
    if (this.cancelRequest) {
      this.cancelRequest();
      this.cancelRequest = null;
    }
  };

  /* loadData = () => {
    const { PostActions, number } = this.props;
    PostActions.getPost(number)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }; */

  // ES7 문법 async/await
  // await를 쓸 함수의 앞부분에 async 키워드를 붙여 주고, 기다려야 할 Promise 앞에 await 키워드를 붙여주면 됩니다.
  // await를 사용할 때는 꼭 try catch 구문으로 오류를 처리해야 합니다.
  loadData = async () => {
    const { PostActions, number } = this.props;
    try {
      const p = PostActions.getPost(number);
      this.cancelRequest = p.cancel;
      const response = await p;
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    // postActions.getPost
    this.loadData();
    window.addEventListener("keyup", e => {
      if (e.key === "Escape") {
        this.handleCancel();
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // 이전 number와 현재 number가 다르면 요청을 시작합니다.
    if (this.props.number !== prevProps.number) {
      this.loadData();
    }
  }

  render() {
    const { CounterActions, number, post, error, loading } = this.props;

    return (
      <div>
        <h1>
          {number}
        </h1>
        {loading
          ? <h2>로딩중...</h2>
          : error
            ? <h2>오류 발생!</h2>
            : <div>
                <h2>
                  {post.title}
                </h2>
                <p>
                  {post.body}
                </p>
              </div>}
        <button onClick={CounterActions.increment}>+</button>
        <button onClick={CounterActions.decrement}>-</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    number: state.counter,
    post: state.post.data,
    loading: state.pender.pending["GET_POST"],
    error: state.pender.failure["GET_POST"]
  }),
  dispatch => ({
    CounterActions: bindActionCreators(counterActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(App);
