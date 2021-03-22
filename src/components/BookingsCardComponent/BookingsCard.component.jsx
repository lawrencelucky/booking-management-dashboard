import React from 'react';

import {
  BookingsCardContainer,
  CardHeader,
  CardName,
  CardBody,
  BodyServiceContainer,
  BodyServiceTitle,
  BodyService,
  BodySession,
  SessionDateContainer,
  SessionDateTitle,
  SessionDate,
  SessionTimeContainer,
  SessionTimeTitle,
  SessionTime,
  CardFooter,
  FooterAcceptButton,
  FooterDeclineButton,
} from './BookingsCard.styles';

const BookingsCard = ({ name }) => {
  return (
    <BookingsCardContainer>
      <CardHeader>
        <CardName>{name}</CardName>
      </CardHeader>
      <CardBody>
        <BodyServiceContainer>
          <BodyServiceTitle>Service</BodyServiceTitle>
          <BodyService>Physiotherapy</BodyService>
        </BodyServiceContainer>
        <BodySession>
          <SessionDateContainer>
            <SessionDateTitle>Date</SessionDateTitle>
            <SessionDate>25 Jul 2020</SessionDate>
          </SessionDateContainer>
          <SessionTimeContainer>
            <SessionTimeTitle>Time</SessionTimeTitle>
            <SessionTime>11:00 - 12:00</SessionTime>
          </SessionTimeContainer>
        </BodySession>
      </CardBody>
      <CardFooter>
        <FooterAcceptButton>Accept Booking</FooterAcceptButton>
        <FooterDeclineButton>Decline</FooterDeclineButton>
      </CardFooter>
    </BookingsCardContainer>
  );
};

export default BookingsCard;
