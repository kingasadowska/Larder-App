import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Diaries from 'views/Diaries';
import Fruits from 'views/Fruits';
import Bakeries from 'views/Bakeries';
import DetailsPage from 'views/DetailsPage';
import { routes } from 'routes';

const Root = () => (
<Provider store={store}>
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} render={() => <Redirect to="/diaries" />} />
        <Route exact path={routes.diaries} component={Diaries} />
        <Route path={routes.diary} component={DetailsPage} />
        <Route exact path={routes.bakeries} component={Bakeries} />
        <Route path={routes.bakery} component={DetailsPage} />
        <Route exact path={routes.fruits} component={Fruits} />
        <Route path={routes.fruit} component={DetailsPage} />
      </Switch>
      </MainTemplate>
  </BrowserRouter>
</Provider>
);

export default Root;
