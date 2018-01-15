import React from 'react';

import MarketSelector from './MarketSelector';
import OrderBooksContainer from './OrderBooksContainer';
import ErrorContainer from './ErrorContainer';

const DashboardPage = () => (
  <div className="container">
    <MarketSelector />
    <ErrorContainer />
    <OrderBooksContainer />
  </div>
);

export default DashboardPage;
