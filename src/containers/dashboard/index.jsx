import React from 'react';
import DashboardLayout from '../../components/layout/dashboardLayout';
import AggregateCard from './aggregateCard';
import './dashboard.scss';
import AdminIcon from '../../assets/icons/total-admins.svg';
import TotalBoards from '../../assets/icons/total-game-board.svg';

import RecentGameBoards from './recentGameBoards';

const Dashboard = () => {
  return (
    <DashboardLayout search>
      <div className="aggregateContainer">
        <AggregateCard
          count={'100'}
          title="Total Admins"
          percentage={'24%'}
          icon={AdminIcon}
          style={{
            marginTop: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          }}
          duration={'from last month'}
        />
        <AggregateCard
          count={'596'}
          title="Total Game Boards"
          percentage={'5%'}
          icon={TotalBoards}
          style={{
            marginTop: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          }}
          duration={'from last month'}
        />
      </div>
        <RecentGameBoards />
    </DashboardLayout>
  );
};

export default Dashboard;
