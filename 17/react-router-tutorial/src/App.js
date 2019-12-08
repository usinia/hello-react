import React from "react";
import { Route } from "react-router-dom";
import { Home, About, Posts } from "pages"; // 개발
// import { Home, About, Posts } from "pages/index.async.js"; // 운영
import Menu from "components/Menu";
// import AsyncSplitMe from "./components/AsyncSplitMe";

const App = () => {
  return (
    <div>
      <Menu />
      {/* <AsyncSplitMe /> */}
      {/* <div>"리액트 라우터를 배워봅시다"</div> */}
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/about" component={About} /> */}
      <Route path="/about/:name?/:msg?" component={About} />
      <Route path="/posts" component={Posts} />
    </div>
  );
};

export default App;
