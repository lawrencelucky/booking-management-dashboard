import styled from 'styled-components';
import {
  ChevronRightCircle,
  Menu,
  ChevronLeftCircle,
} from '@styled-icons/boxicons-regular';

import { root } from './../../globalStyles';

export const HeaderContainer = styled.div`
  @media screen and (max-width: 1200px) {
    position: fixed;
    width: 95%;
    left: 5%;
    top: 0;
    background: ${root.secondaryBgColor};
    padding: 1rem;
    border-bottom: 1px solid ${root.darkBorderColor};
    z-index: 999;
    display: flex;
    justify-content: flex-end;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    left: 0;
    justify-content: space-between;
  }
`;

export const SidebarToggler = styled.div`
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const MenuIcon = styled(Menu)`
  width: 3.5rem;
  color: ${root.oddColor};
  cursor: pointer;
`;

export const CloseMenuIcon = styled(ChevronLeftCircle)`
  width: 3.5rem;
  color: ${root.oddColor};
  cursor: pointer;
`;

export const LogoImageContainer = styled.div`
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const LogoImage = styled.img``;

export const UserImageContainer = styled.div``;

export const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

export const CloseIcon = styled(ChevronRightCircle)`
  width: 3.5rem;
  color: ${root.oddColor};
  cursor: pointer;
`;
