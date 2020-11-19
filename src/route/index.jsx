import React, { lazy, Suspense, useContext } from "react";
import { Route, useParams, Switch, useRouteMatch, Redirect } from "react-router-dom";
//feature
import HomePage from '../feature/home/HomePage';
import TodoList from '../feature/todo/TodoList'

import { AuthContext } from "../hook/auth-context";

export default function AppRoute() {

  const { me, loading, isAdmin } = useContext(AuthContext);

  let isAdminLogin = isAdmin();
  return (
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route exact={true} path="/TodoList" component={TodoList} />
      <Route component={() => <h1>404 Not Found</h1>} />
    </Switch >

  );
}
