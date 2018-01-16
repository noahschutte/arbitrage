import React from 'react';

import Header from '../components/Header';
import OrderBooksContainer from './OrderBooksContainer';

const DashboardPage = () => (
  <div className="dashboard-page">
    <Header />
    <OrderBooksContainer />
  </div>
);

export default DashboardPage;
