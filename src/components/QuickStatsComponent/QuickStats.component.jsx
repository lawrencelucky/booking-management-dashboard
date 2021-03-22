import React from 'react';

import {
  QuickStatsContainer,
  QuickStatsHeader,
  QuickStatsCardContainer,
  QuickStatsCard,
  QuickStatsTitle,
  QuickStatsDigit,
  QuickStatsRateContainer,
  QuickStatsRateGraph,
} from './QuickStats.styles';

import Increase from './../../assets/increase.svg';
import Decrease from './../../assets/decrease.svg';

const QuickStats = () => {
  return (
    <QuickStatsContainer>
      <QuickStatsHeader>Quick Stats</QuickStatsHeader>
      <QuickStatsCardContainer>
        <QuickStatsCard>
          <QuickStatsTitle>Total Bokings</QuickStatsTitle>
          <QuickStatsDigit>28,345</QuickStatsDigit>
        </QuickStatsCard>

        <QuickStatsCard>
          <QuickStatsTitle>Pending Approval</QuickStatsTitle>
          <QuickStatsDigit className='approval'>120</QuickStatsDigit>
        </QuickStatsCard>

        <QuickStatsCard>
          <QuickStatsTitle>New Clients this month</QuickStatsTitle>
          <QuickStatsRateContainer>
            <QuickStatsDigit>89</QuickStatsDigit>
            <QuickStatsRateGraph
              src={Increase}
              alt='Increase'
              draggable={false}
            />
          </QuickStatsRateContainer>
        </QuickStatsCard>

        <QuickStatsCard>
          <QuickStatsTitle>Returning Clients</QuickStatsTitle>
          <QuickStatsRateContainer>
            <QuickStatsDigit>46%</QuickStatsDigit>
            <QuickStatsRateGraph
              src={Decrease}
              alt='Decrease'
              draggable={false}
            />
          </QuickStatsRateContainer>
        </QuickStatsCard>
      </QuickStatsCardContainer>
    </QuickStatsContainer>
  );
};

export default QuickStats;
