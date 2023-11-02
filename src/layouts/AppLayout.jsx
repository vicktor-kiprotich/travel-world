import React from 'react';
import Navbar from '../components/Navbar';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;