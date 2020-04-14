import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Diary from 'views/Diary';
import Fruits from 'views/Fruits';
import Bakery from 'views/Bakery';
import DetailsPage from 'views/DetailsPage';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Diary} />
        <Route path="/bakery" component={Bakery} />
        <Route path="/fruits" component={Fruits} />
        <Route exact path="/" render={() => <Redirect to="/diary" />} />
        <Route exact path="/diary" component={Diary} />
        <Route path="/diary/:id" component={DetailsPage} />
        <Route exact path="/bakery" component={Bakery} />
        <Route path="/bakery/:id" component={DetailsPage} />
        <Route exact path="/fruits" component={Fruits} />
        <Route path="/fruits/:id" component={DetailsPage} />
      </Switch>
      </MainTemplate>
  </BrowserRouter>
);

export default Root;
