import React from "react";

// 사용: asyncComponent(() => import('./Home'));
// 컴포넌트를 import 하는 함수를 반환하는 함수를 파라미터로 전달
export default function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    constructor(props) {
      // 컴포넌트를 실제로 렌더링할 때 getComponent 실행을 통해 파일을 불러옴
      super(props);
      if (AsyncComponent.Component) {
        // 컴포넌트가 언마운트 후 다시 마운트 될 때,
        // 컴포넌트를 다시 불러오지 않고 static에 남아 있는 값을 재사용
        return;
      }
      // (import('./Home'))().then(({default: 직접 지정})=>{})
      getComponent().then(({ default: Component }) => {
        AsyncComponent.Component = Component;
        this.setState({ Component });
      });
    }

    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return null;
    }
  };
}
