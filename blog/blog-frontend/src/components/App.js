import React from "react";
import { Switch, Route } from "react-router-dom";
import { ListPage, PostPage, EditorPage, NotFoundPage } from "pages";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ListPage} />
        <Route path="/page/:page" component={ListPage} />
        <Route path="/tag/:tag/:page?" component={ListPage} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="/editor" component={EditorPage} />
        {/* path를 지정하지 않았기 때문에 어떤 경우에도 렌더링된다.
            Switch로 감쌌기 때문에 먼저 매칭 된 라우트 하나만 보여준다.
            아무것도 매칭되지 않으면 NotFoundPage를 보여준다.
         */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
