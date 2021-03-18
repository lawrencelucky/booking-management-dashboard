import React from 'react';

import { DashboardpageContainer } from './Dashboardpage.styles';

import Sidebar from '../../components/SidebarComponent/Sidebar.component';
import DashboardBody from '../../components/DashboardBodyComponent/DashboardBody.component';
import Profile from '../../components/ProfileComponent/Profile.component';

const Dashboard = () => {
  return (
    <DashboardpageContainer>
      <Sidebar />
      <DashboardBody />
      <Profile />
    </DashboardpageContainer>
  );
};

export default Dashboard;
