import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Diary from 'views/Diary';
import Fruits from 'views/Fruits';
import Bakery from 'views/Bakery';
import DetailsPage from 'views/DetailsPage';
import { routes } from 'routes';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} render={() => <Redirect to="/diaries" />} />
        <Route exact path={routes.diaries} component={Diary} />
        <Route path={routes.diary} component={DetailsPage} />
        <Route exact path={routes.bakeries} component={Bakery} />
        <Route path={routes.bakery} component={DetailsPage} />
        <Route exact path={routes.fruits} component={Fruits} />
        <Route path={routes.fruit} component={DetailsPage} />
      </Switch>
      </MainTemplate>
  </BrowserRouter>
);

export default Root;
