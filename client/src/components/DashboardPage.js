import React from 'react';

import MarketSelector from './MarketSelector';
import OrderBooksContainer from './OrderBooksContainer';

const DashboardPage = () => (
  <div className="container">
    <MarketSelector />
    <OrderBooksContainer />
  </div>
);

export default DashboardPage;
