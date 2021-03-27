import React from 'react';

import {
  ProfileSection,
  ProfileHeader,
  SearchContainer,
  SearchIcon,
  SearchInput,
  NotificationContainer,
  NotificationIcon,
  Circle,
} from './Profile.styles';

import UserDetails from '../UserDetailsComponent/UserDetails.component';
import UpgradeCard from '../UpgradeCardComponent/UpgradeCard.component';
import Reminder from '../ReminderComponent/Reminder.component';

const Profile = ({ openProfile, modal, setModal }) => {
  return (
    <ProfileSection openProfile={openProfile}>
      <ProfileHeader>
        <SearchContainer>
          <SearchIcon />
          <SearchInput
            type='text'
            placeholder='Search keyword'
            className='input'
          />
        </SearchContainer>
        <NotificationContainer>
          <NotificationIcon />
          <Circle />
        </NotificationContainer>
      </ProfileHeader>

      <UserDetails modal={modal} setModal={setModal} />

      <UpgradeCard />

      <Reminder />
    </ProfileSection>
  );
};

export default Profile;
