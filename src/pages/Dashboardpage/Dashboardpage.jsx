import React from 'react';

import { DashboardpageContainer } from './Dashboardpage.styles';

import Sidebar from '../../components/SidebarComponent/Sidebar.component';
import DashboardBody from '../../components/DashboardBodyComponent/DashboardBody.component';
import Profile from '../../components/ProfileComponent/Profile.component';

const Dashboard = ({ openProfile, openSidebar }) => {
  return (
    <DashboardpageContainer>
      <Sidebar openSidebar={openSidebar} />
      <DashboardBody />
      <Profile openProfile={openProfile} />
    </DashboardpageContainer>
  );
};

export default Dashboard;
