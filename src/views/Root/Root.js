import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Products from 'views/Products';
import Edit from 'views/Edit';
import Settings from 'views/Settings';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/edit" component={Edit} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
