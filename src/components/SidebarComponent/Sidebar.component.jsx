import React from 'react';

import {
  SidebarSection,
  LogoContainer,
  LogoImg,
  NavContainer,
  NavItem,
  DashboardIcon,
  GraphIcon,
  CalendarIcon,
  ListIcon,
  EnvelopeIcon,
  UsersIcon,
  SettingsIcon,
  LogoutContainer,
  LogoutIcon,
} from './Sidebar.styles';

import Logo from './../../assets/logo-icon.svg';

const Sidebar = ({ openSidebar }) => {
  return (
    <SidebarSection openSidebar={openSidebar}>
      <LogoContainer>
        <LogoImg src={Logo} alt='logo' draggable={false} />
      </LogoContainer>

      <NavContainer>
        <NavItem to='/' exact>
          <DashboardIcon className='icon' />
        </NavItem>
        <NavItem to='/stats' exact>
          <GraphIcon className='icon' />
        </NavItem>
        <NavItem to='/appointment' exact>
          <CalendarIcon className='icon' />
        </NavItem>
        <NavItem to='/enquiry' exact>
          <ListIcon className='icon' />
        </NavItem>
        <NavItem to='/messages' exact>
          <EnvelopeIcon className='icon' />
        </NavItem>
        <NavItem to='/users' exact>
          <UsersIcon className='icon' />
        </NavItem>
        <NavItem to='/settings' exact>
          <SettingsIcon className='icon' />
        </NavItem>
      </NavContainer>

      <LogoutContainer>
        <LogoutIcon className='icon' />
      </LogoutContainer>
    </SidebarSection>
  );
};

export default Sidebar;
