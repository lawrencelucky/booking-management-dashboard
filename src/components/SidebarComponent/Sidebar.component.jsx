import React from 'react';

import {
  SidebarSection,
  LogoContainer,
  LogoImg,
  NavContainer,
  NavItem,
  NavItemLogo,
  LogoutContainer,
  LogoutIcon,
} from './Sidebar.styles';

import Logo from './../../assets/logo-icon.svg';
import HomeIcon from './../../assets/dashboard-active.svg';
import AppointmentIcon from './../../assets/appointments.svg';
import EnquiriesIcon from './../../assets/enquiries.svg';
import MessageIcon from './../../assets/messages.svg';
import UsersIcon from './../../assets/users.svg';
import SettingsIcon from './../../assets/settings.svg';

const Sidebar = () => {
  return (
    <SidebarSection>
      <LogoContainer>
        <LogoImg src={Logo} alt='logo' draggable={false} />
      </LogoContainer>

      <NavContainer>
        <NavItem>
          <NavItemLogo src={HomeIcon} alt='home' draggable={false} />
        </NavItem>
        <NavItem>
          <NavItemLogo
            src={AppointmentIcon}
            alt='appointment'
            draggable={false}
          />
        </NavItem>
        <NavItem>
          <NavItemLogo src={EnquiriesIcon} alt='enquiry' draggable={false} />
        </NavItem>
        <NavItem>
          <NavItemLogo src={MessageIcon} alt='message' draggable={false} />
        </NavItem>
        <NavItem>
          <NavItemLogo src={UsersIcon} alt='user' draggable={false} />
        </NavItem>
        <NavItem>
          <NavItemLogo src={SettingsIcon} alt='settings' draggable={false} />
        </NavItem>
      </NavContainer>

      <LogoutContainer>
        <LogoutIcon />
      </LogoutContainer>
    </SidebarSection>
  );
};

export default Sidebar;
