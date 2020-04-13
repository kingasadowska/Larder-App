import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Diary from 'views/Diary';
import Fruits from 'views/Fruits';
import Bakery from 'views/Bakery';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Diary} />
        <Route path="/fruits" component={Fruits} />
        <Route path="/bakery" component={Bakery} />
      </Switch>
      </MainTemplate>
  </BrowserRouter>
);

export default Root;
