import React from 'react';

import {
  ReminderContainer,
  ReminderHead,
  ReminderHeader,
  ViewAllContainer,
  ViewAllText,
  ViewIcon,
  ReminderBody,
  ReminderCard,
  ExclamationIconContainer,
  ExclamationIcon,
  MessageIconContainer,
  MessageIcon,
  ReminderCardBody,
  ReminderCardText,
  ReminderCardSmallText,
} from './Reminder.styles';

const Reminder = () => {
  return (
    <ReminderContainer>
      <ReminderHeader>
        <ReminderHead>Reminders</ReminderHead>
        <ViewAllContainer>
          <ViewAllText>View All</ViewAllText>
          <ViewIcon />
        </ViewAllContainer>
      </ReminderHeader>

      <ReminderBody>
        <ReminderCard>
          <ExclamationIconContainer>
            <ExclamationIcon />
          </ExclamationIconContainer>
          <ReminderCardBody>
            <ReminderCardText>Booking Reminder</ReminderCardText>
            <ReminderCardSmallText>
              Lorem ipsum dolor sit amet, consetetur
            </ReminderCardSmallText>
          </ReminderCardBody>
        </ReminderCard>

        <ReminderCard>
          <MessageIconContainer>
            <MessageIcon />
          </MessageIconContainer>
          <ReminderCardBody>
            <ReminderCardText>New Message</ReminderCardText>
            <ReminderCardSmallText>
              Lorem ipsum dolor sit amet, consetetur
            </ReminderCardSmallText>
          </ReminderCardBody>
        </ReminderCard>

        <ReminderCard>
          <ExclamationIconContainer>
            <ExclamationIcon />
          </ExclamationIconContainer>
          <ReminderCardBody>
            <ReminderCardText>Upcoming Booking</ReminderCardText>
            <ReminderCardSmallText>
              Lorem ipsum dolor sit amet, consetetur
            </ReminderCardSmallText>
          </ReminderCardBody>
        </ReminderCard>
      </ReminderBody>
    </ReminderContainer>
  );
};

export default Reminder;
