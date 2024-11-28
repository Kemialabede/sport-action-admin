import React from 'react';
import Sidebar from '../sidebar';
import Header from '../header';
import './dashboard-layout.scss';

const DashboardLayout = ({ children, search, title }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header search={search} title={title} />
        <div className="content-area">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
