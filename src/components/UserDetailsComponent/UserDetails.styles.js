import styled from 'styled-components';
import { Copy } from '@styled-icons/ionicons-outline/';

import { root } from './../../globalStyles';

export const UserContainer = styled.div`
  margin-top: 5rem;
`;

export const UserContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserDesc = styled.div``;

export const GreetUser = styled.h2`
  font-weight: 400;
  font-family: ${root.secondaryFont};
`;

export const Username = styled.h1`
  font-family: ${root.secondaryFont};
`;

export const Description = styled.p`
  color: ${root.fadedTextColor};
  font-size: 1.2rem;
  width: 90%;
  margin-top: 0.5rem;
`;

export const UserImageContainer = styled.div``;

export const UserImage = styled.img``;

export const UserContainerBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const CopyContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: ${root.primaryBgColor};
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  cursor: default;
  position: relative;

  &:hover {
    box-shadow: 0px 6px 10px 2px ${root.boxShadowColor};

    .icon {
      color: ${root.secondaryDarkBgColor};
    }

    .tooltip {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const UserLink = styled.p`
  font-family: ${root.secondaryFont};
  font-size: 1.3rem;
  border-right: 2px solid ${root.secondaryFadedTextColor};
  padding-right: 1rem;
`;

export const CopyIcon = styled(Copy)`
  width: 2rem;
  margin-left: 1rem;
  color: ${root.secondaryFadedTextColor};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 5rem;
  right: -5%;
  border: 1px solid ${root.darkBorderColor};
  border-radius: 5px;
  padding: 1rem;
  z-index: 2;
  transition: all 0.3s ease-in-out;
  visibility: hidden;
  opacity: 0;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 43%;
    background: ${root.secondaryBgColor};
    border-left: 1px solid ${root.darkBorderColor};
    border-top: 1px solid ${root.darkBorderColor};
    height: 8px;
    width: 8px;
    transform: rotate(45deg) translateY(-50%);
    z-index: 1;
  }
`;

export const TooltipText = styled.p`
  font-size: 1rem;
  font-family: ${root.secondaryFont};
  font-weight: 600;
`;

export const EditButton = styled.button`
  border: 0;
  border-radius: 5rem;
  padding: 1rem 1.5rem;
  background: ${root.fadedSecondaryDarkBgColor};
  color: ${root.secondaryDarkBgColor};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${root.secondaryDarkBgColor};
    color: ${root.primaryBgColor};
  }
`;
