import React, { useState } from 'react';

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
  InputModal,
  EditInput,
  SubmitEditButton,
} from './UserDetails.styles';

import User from './../../assets/user.svg';

const UserDetails = ({ modal, setModal }) => {
  const [username, setUsername] = useState('jonathan');

  const editUserHandler = (e) => {
    setUsername(e.target.value);
  };

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
          <UserLink>sheddo.com/{username}</UserLink>
          <CopyIcon className='icon' />
          <Tooltip className='tooltip'>
            <TooltipText>Copy URL</TooltipText>
          </Tooltip>
        </CopyContainer>
        <EditButton onClick={() => setModal(true)}>Edit Link</EditButton>
      </UserContainerBottom>
      {modal && (
        <InputModal onClick={() => setModal(false)}>
          <EditInput
            type='text'
            value={username}
            onChange={editUserHandler}
            autoFocus
            placeholder='Your name here.'
          />
          <SubmitEditButton onClick={() => setModal(false)}>
            Submit
          </SubmitEditButton>
        </InputModal>
      )}
    </UserContainer>
  );
};

export default UserDetails;
