// 이 컴포넌트는 클라이언트 쪽에서만 사용하기 때문에 App 이 아닌 Root로 지정한다.
// App 컴포넌트는 components 디렉터리 내부에 존재하며,
// Root 컴포넌트는 App 컴포넌트를 웹 브라우저에서 사용하는 라우터인 BrowserRouter 컴포넌트 안에 감싼다.
// 서버사이드 렌더링을 구현할 때는 서버 렌더링 전용 라우터인 StaticRouter 컴포넌트에 App을 감싸서 사용한다.
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "components/App";
import { Provider } from "react-redux";
import configure from "store/configure";

const store = configure();

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
