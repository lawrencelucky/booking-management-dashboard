import React from 'react';

import { DashboardpageContainer } from './Dashboardpage.styles';

import Sidebar from '../../components/SidebarComponent/Sidebar.component';
import DashboardBody from '../../components/DashboardBodyComponent/DashboardBody.component';
import Profile from '../../components/ProfileComponent/Profile.component';

const Dashboard = ({ openProfile, openSidebar, modal, setModal }) => {
  return (
    <DashboardpageContainer>
      <Sidebar openSidebar={openSidebar} />
      <DashboardBody />
      <Profile openProfile={openProfile} modal={modal} setModal={setModal} />
    </DashboardpageContainer>
  );
};

export default Dashboard;
