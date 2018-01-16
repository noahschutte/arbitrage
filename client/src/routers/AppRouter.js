import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashboardPage from '../components/DashboardPage';

const AppRouter = () => (
  <BrowserRouter>
    <div className="overflow">
      <Switch>
        <Route path="/" component={DashboardPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
