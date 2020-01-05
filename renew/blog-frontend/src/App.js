import React from "react";
import { Route } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import PostPage from "./pages/PostPage";

const App = () => {
  return (
    <>
      <Route component={PostListPage} path={["/@:username", "/"]} exact />
      <Route component={LoginPage} path={["/login"]} exact />
      <Route component={RegisterPage} path={["/register"]} exact />
      <Route component={WritePage} path={["/write"]} exact />
      <Route component={PostPage} path={["/post"]} exact />
    </>
  );
};

export default App;
