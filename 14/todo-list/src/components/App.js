import React, { Component } from "react";
import TodoInputContainer from "../container/TodoInputContainer";
import TodoListContainer from "../container/TodoListContainer";
import PageTemplate from "./PageTemplate";

export default class App extends Component {
  render() {
    return (
      <div>
        <PageTemplate>
          <TodoInputContainer />
          <TodoListContainer />
        </PageTemplate>
      </div>
    );
  }
}
