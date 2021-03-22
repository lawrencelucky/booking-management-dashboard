import React from 'react';

import {
  HeaderContainer,
  SidebarToggler,
  MenuIcon,
  CloseMenuIcon,
  LogoImageContainer,
  LogoImage,
  UserImageContainer,
  UserImage,
  CloseIcon,
} from './Header.styles';

import User from './../../assets/user.svg';
import Logo from './../../assets/logo-icon.svg';

const Header = ({
  setOpenProfile,
  openProfile,
  setOpenSidebar,
  openSidebar,
}) => {
  return (
    <HeaderContainer>
      <SidebarToggler>
        {openSidebar ? (
          <CloseMenuIcon onClick={() => setOpenSidebar(false)} />
        ) : (
          <MenuIcon onClick={() => setOpenSidebar(true)} />
        )}
      </SidebarToggler>

      <LogoImageContainer>
        <LogoImage src={Logo} alt='logo' draggable={false} />
      </LogoImageContainer>

      <UserImageContainer>
        {openProfile ? (
          <CloseIcon onClick={() => setOpenProfile(false)} />
        ) : (
          <UserImage
            src={User}
            alt='User'
            draggable={false}
            onClick={() => setOpenProfile(true)}
          />
        )}
      </UserImageContainer>
    </HeaderContainer>
  );
};

export default Header;
