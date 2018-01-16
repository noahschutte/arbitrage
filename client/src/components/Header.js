import React from 'react';
import MarketSelector from './MarketSelector';
import ErrorContainer from './ErrorContainer';

const Header = () => (
  <header className="header">
    <div>
      <h1 className="title">Arbitrage</h1>
      <MarketSelector />
      <ErrorContainer />
    </div>
  </header>
);

export default Header;
