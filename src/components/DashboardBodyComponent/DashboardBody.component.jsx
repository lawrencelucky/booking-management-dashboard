import React, { useState } from 'react';

import {
  DashboardBodySection,
  DashboardHeader,
  DashboardHeaderTitle,
  DashboardHeaderHead,
  DashboardHeaderSmall,
  DashboardButton,
  DashboardNavbar,
  DashboardNavbarUl,
  DashboardNavItems,
  BookingsContainer,
} from './DashboardBody.styles';

import QuickStats from '../QuickStatsComponent/QuickStats.component';
import BookingsCard from '../BookingsCardComponent/BookingsCard.component';

const DashboardBody = () => {
  const [bookings, setBookings] = useState(true);
  const [enquiries, setEnquiries] = useState(false);
  const [services, setServices] = useState(false);

  const bookingsHandler = () => {
    setBookings(true);
    setEnquiries(false);
    setServices(false);
  };

  const enquiriesHandler = () => {
    setBookings(false);
    setEnquiries(true);
    setServices(false);
  };

  const serviceHandler = () => {
    setBookings(false);
    setEnquiries(false);
    setServices(true);
  };

  return (
    <DashboardBodySection>
      <DashboardHeader>
        <DashboardHeaderTitle>
          <DashboardHeaderHead>Dashboard</DashboardHeaderHead>
          <DashboardHeaderSmall>Welcome Back!</DashboardHeaderSmall>
        </DashboardHeaderTitle>
        <DashboardButton>Customise Blocks</DashboardButton>
      </DashboardHeader>

      <QuickStats />

      <DashboardNavbar>
        <DashboardNavbarUl>
          <DashboardNavItems active={bookings} onClick={bookingsHandler}>
            Bookings
          </DashboardNavItems>

          <DashboardNavItems active={enquiries} onClick={enquiriesHandler}>
            Enquiries
          </DashboardNavItems>

          <DashboardNavItems active={services} onClick={serviceHandler}>
            My Services
          </DashboardNavItems>
        </DashboardNavbarUl>
      </DashboardNavbar>

      <BookingsContainer>
        <BookingsCard name='Amanda Chavez' />
        <BookingsCard name='Fionna Wade' />
        <BookingsCard name='Beatrice Carrol' />
        <BookingsCard name='Jasmine Palmer' />
        <BookingsCard name='Randy Elliot' />
        <BookingsCard name='Christine Powell' />
      </BookingsContainer>
    </DashboardBodySection>
  );
};

export default DashboardBody;
