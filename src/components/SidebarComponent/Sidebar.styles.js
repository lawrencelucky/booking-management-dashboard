import styled from 'styled-components';
import { LogOut } from '@styled-icons/boxicons-regular';

import { root } from './../../globalStyles';

export const SidebarSection = styled.div`
  flex: 0.07;
  background: ${root.secondaryBgColor};
`;

export const LogoContainer = styled.div``;

export const LogoImg = styled.img``;

export const NavContainer = styled.div``;

export const NavItem = styled.div``;

export const NavItemLogo = styled.img``;

export const LogoutContainer = styled.div``;

export const LogoutIcon = styled(LogOut)`
  width: 2rem;
  color: ${root.secondaryFadedTextColor};
`;
