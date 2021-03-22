import styled from 'styled-components';

import { root } from './../../globalStyles';

export const DashboardBodySection = styled.div`
  color: ${root.textColor};
  position: fixed;
  width: 67%;
  height: 100%;
  left: 5%;
  top: 0;
  overflow-y: scroll;
  padding: 2rem;
`;

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DashboardHeaderTitle = styled.div``;

export const DashboardHeaderHead = styled.h2`
  font-family: ${root.secondaryFont};
  font-size: 3.5rem;
`;

export const DashboardHeaderSmall = styled.p`
  color: ${root.fadedTextColor};
`;

export const DashboardButton = styled.button`
  font-size: 1.3rem;
  font-weight: 600;
  font-family: ${root.secondaryFont};
  padding: 1rem 2rem;
  border: 0;
  border-radius: 5px;
  background-color: ${root.secondaryDarkBgColor};
  color: ${root.secondaryBgColor};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${root.secondaryFadedDarkBgColor};
  }
`;

export const DashboardNavbar = styled.div`
  margin-top: 3rem;
  padding-left: 1rem;
  border-bottom: 1px solid ${root.darkBorderColor};
  transition: all 0.3s ease-in-out;
`;

export const DashboardNavbarUl = styled.ul`
  display: flex;
`;

export const DashboardNavItems = styled.li`
  list-style: none;
  color: ${({ active }) =>
    active ? root.textColor : root.fadedSecondaryDarkBgColor};
  font-size: 1.6rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-family: ${root.secondaryFont};
  padding-bottom: 1rem;
  border-bottom: ${({ active }) =>
    active ? `3px solid ${root.oddColor}` : ''};

  &:not(:last-child) {
    margin-right: 3rem;
  }

  &:hover {
    color: ${root.textColor};
  }
`;

export const BookingsContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  transition: all 0.3s ease-in-out;
`;
