import React from "react";
import { Route, Switch} from "react-router-dom";
//feature
import HomePage from '../feature/home/HomePage';
import TodoList from '../feature/todo/TodoList'


export default function AppRoute() {


  return (
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route exact={true} path="/TodoList" component={TodoList} />
      <Route component={() => <h1>404 Not Found</h1>} />
    </Switch >

  );
}
