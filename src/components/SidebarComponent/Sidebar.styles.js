import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Dashboard } from '@styled-icons/boxicons-solid';
import { LogOut, Calendar } from '@styled-icons/boxicons-regular';
import { List } from '@styled-icons/evaicons-solid';
import { Envelope, Users } from '@styled-icons/fa-solid';
import { Settings } from '@styled-icons/ionicons-outline';
import { BarGraph } from '@styled-icons/entypo/BarGraph';

import { root } from './../../globalStyles';

const activeClassName = 'active';

export const SidebarSection = styled.div`
  background: ${root.secondaryBgColor};
  border-right: 1px solid ${root.darkBorderColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0 5rem;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 5%;
`;

export const LogoContainer = styled.div`
  align-self: center;
`;

export const LogoImg = styled.img`
  width: 3.8rem;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavItem = styled(NavLink).attrs({ activeClassName })`
  display: flex;
  justify-content: center;
  width: 100%;
  transition: all 0.3s ease-in-out;

  &:not(:last-child) {
    margin-bottom: 3.5rem;
  }

  &.${activeClassName} {
    border-right: 3px solid ${root.oddColor};
    padding-right: 3px;

    .icon {
      color: ${root.secondaryDarkBgColor};
    }
  }
`;

export const DashboardIcon = styled(Dashboard)`
  width: 2.3rem;
  color: ${root.secondaryFadedTextColor};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${root.secondaryDarkBgColor};
  }
`;

export const GraphIcon = styled(BarGraph)`
  width: 2.3rem;
  color: ${root.secondaryFadedTextColor};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${root.secondaryDarkBgColor};
  }
`;

export const CalendarIcon = styled(Calendar)`
  width: 2.3rem;
  color: ${root.secondaryFadedTextColor};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${root.secondaryDarkBgColor};
  }
`;

export const ListIcon = styled(List)`
  width: 2.3rem;
  color: ${root.secondaryFadedTextColor};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${root.secondaryDarkBgColor};
  }
`;

export const EnvelopeIcon = styled(Envelope)`
  width: 2.3rem;
  color: ${root.secondaryFadedTextColor};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${root.secondaryDarkBgColor};
  }
`;

export const UsersIcon = styled(Users)`
  width: 2.3rem;
  color: ${root.secondaryFadedTextColor};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${root.secondaryDarkBgColor};
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 2.3rem;
  color: ${root.secondaryFadedTextColor};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${root.secondaryDarkBgColor};
  }
`;

export const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 4rem;
  width: 4rem;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${root.secondaryBgColor};
    box-shadow: 0px 6px 10px 2px ${root.boxShadowColor};

    .icon {
      color: ${root.secondaryDarkBgColor};
    }
  }
`;

export const LogoutIcon = styled(LogOut)`
  width: 2.3rem;
  color: ${root.secondaryFadedTextColor};
  transition: all 0.3s ease-in-out;
`;
