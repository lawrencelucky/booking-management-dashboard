import React from 'react';

import {
  UserContainer,
  UserContainerTop,
  UserDesc,
  GreetUser,
  Username,
  Description,
  UserImageContainer,
  UserImage,
  UserContainerBottom,
  CopyContainer,
  UserLink,
  CopyIcon,
  Tooltip,
  TooltipText,
  EditButton,
} from './UserDetails.styles';

import User from './../../assets/user.svg';

const UserDetails = () => {
  return (
    <UserContainer>
      <UserContainerTop>
        <UserDesc>
          <GreetUser>Hello,</GreetUser>
          <Username>Jonathan!</Username>
          <Description>
            Copy your bio link and paste it in your profile to let people find
            you.
          </Description>
        </UserDesc>
        <UserImageContainer>
          <UserImage src={User} alt='User' draggable={false} />
        </UserImageContainer>
      </UserContainerTop>
      <UserContainerBottom>
        <CopyContainer>
          <UserLink>scheddo.com/jonathan</UserLink>
          <CopyIcon className='icon' />
          <Tooltip className='tooltip'>
            <TooltipText>Copy URL</TooltipText>
          </Tooltip>
        </CopyContainer>
        <EditButton>Edit Link</EditButton>
      </UserContainerBottom>
    </UserContainer>
  );
};

export default UserDetails;
