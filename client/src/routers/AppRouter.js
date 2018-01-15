import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashboardPage from '../components/DashboardPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
