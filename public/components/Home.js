import React from 'react';
import Header from './Header';
import App from '../app';

const Home = ({ children }) => {
  return (
    <App>
      <div className="container">
        <Header />
        {children}
      </div>
    </App>
  );
};

export default Home;
