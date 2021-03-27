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
  setModal,
}) => {
  return (
    <HeaderContainer>
      <SidebarToggler>
        {openSidebar ? (
          <CloseMenuIcon
            onClick={() => {
              setOpenSidebar(false);
              setModal(false);
            }}
          />
        ) : (
          <MenuIcon
            onClick={() => {
              setOpenSidebar(true);
              setModal(false);
            }}
          />
        )}
      </SidebarToggler>

      <LogoImageContainer>
        <LogoImage
          src={Logo}
          alt='logo'
          draggable={false}
          onClick={() => setModal(false)}
        />
      </LogoImageContainer>

      <UserImageContainer>
        {openProfile ? (
          <CloseIcon
            onClick={() => {
              setOpenProfile(false);
              setModal(false);
            }}
          />
        ) : (
          <UserImage
            src={User}
            alt='User'
            draggable={false}
            onClick={() => {
              setOpenProfile(true);
              setModal(false);
            }}
          />
        )}
      </UserImageContainer>
    </HeaderContainer>
  );
};

export default Header;
