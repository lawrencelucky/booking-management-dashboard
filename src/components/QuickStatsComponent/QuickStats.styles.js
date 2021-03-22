import styled from 'styled-components';

import { root } from './../../globalStyles';

export const QuickStatsContainer = styled.div`
  margin-top: 3rem;
`;

export const QuickStatsHeader = styled.h3`
  font-family: ${root.secondaryFont};
  font-size: 1.3rem;
`;

export const QuickStatsCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
  margin-top: 2rem;
`;

export const QuickStatsCard = styled.div`
  background: ${root.secondaryBgColor};
  padding: 2.5rem;
  border-radius: 10px;

  .approval {
    color: ${root.dangerColor};
  }
`;

export const QuickStatsTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${root.fadedTextColor};
`;

export const QuickStatsDigit = styled.h2`
  font-size: 3.3rem;
  font-weight: 900;
  margin-right: 1rem;
`;

export const QuickStatsRateContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const QuickStatsRateGraph = styled.img``;
