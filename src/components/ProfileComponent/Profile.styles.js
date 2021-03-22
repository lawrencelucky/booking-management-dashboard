import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular';
import { NotificationsOutline } from '@styled-icons/zondicons/NotificationsOutline';

import { root } from './../../globalStyles';

export const ProfileSection = styled.div`
  height: 100%;
  width: 28%;
  position: fixed;
  right: 0;
  top: 0;
  background: ${root.secondaryBgColor};
  border-left: 1px solid ${root.darkBorderColor};
  padding: 3rem;
  overflow-y: scroll;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 1200px) {
    right: ${({ openProfile }) => (openProfile ? 0 : '-100%')};
    width: 35%;
    padding-top: 10rem;
  }

  @media screen and (max-width: 1050px) {
    width: auto;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (max-width: 400px) {
    padding: 8rem 2rem 2rem;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchContainer = styled.div`
  background: ${root.primaryBgColor};
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8rem;
  width: 80%;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 6px 10px 2px ${root.boxShadowColor};

    .input::placeholder {
      color: ${root.textColor};
      transition: all 0.3s ease-in-out;
    }
  }

  @media screen and (max-width: 400px) {
    width: auto;
  }
`;

export const SearchIcon = styled(Search)`
  width: 2.2rem;
  margin-right: 1rem;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: 0;
  border-left: 2px solid ${root.secondaryFadedTextColor};
  padding: 0 1rem;
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: ${root.secondaryFadedTextColor};
  }
`;

export const NotificationContainer = styled.div`
  background: ${root.primaryBgColor};
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 6px 10px 2px ${root.boxShadowColor};
  }
`;

export const NotificationIcon = styled(NotificationsOutline)`
  width: 2.1rem;
`;

export const Circle = styled.div`
  height: 8px;
  width: 8px;
  background: red;
  border-radius: 100%;
  border: 1px solid ${root.secondaryBgColor};
  position: absolute;
  top: 35%;
  right: 26%;
`;
