import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./index.css";

// 리덕스 관련 불러오기
import { createStore } from "redux";
// import reducers from "./reducers";
import reducers from "./reducers_new";
import { Provider } from "react-redux";

// 스토어 생성
// const store = createStore(reducers);

// 스토어 생성 + Redux DevTools
const store = createStore(
  reducers,
  /* window.devToolsExtension && window.devToolsExtension() // 이전버전 */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
