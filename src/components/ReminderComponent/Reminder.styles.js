import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/boxicons-regular';
import { Exclamation } from '@styled-icons/bootstrap';
import { Envelope } from '@styled-icons/fa-solid';

import { root } from './../../globalStyles';

export const ReminderContainer = styled.div`
  margin-top: 5rem;
`;

export const ReminderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReminderHead = styled.h2`
  font-family: ${root.secondaryFont};
`;

export const ViewAllContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ViewAllText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${root.oddColor};
`;

export const ViewIcon = styled(ChevronRight)`
  width: 2rem;
  color: ${root.oddColor};
`;

export const ReminderBody = styled.div`
  margin-top: 3rem;
`;

export const ReminderCard = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const ExclamationIconContainer = styled.div`
  background: ${root.opaqueDangerColor};
  border-radius: 12px;
  margin-right: 2rem;
`;

export const ExclamationIcon = styled(Exclamation)`
  width: 4rem;
  color: ${root.dangerColor};
`;

export const MessageIconContainer = styled.div`
  background: ${root.opaqueOddColor};
  border-radius: 12px;
  margin-right: 2rem;
  padding: 1rem;
`;

export const MessageIcon = styled(Envelope)`
  width: 2rem;
  color: ${root.oddColor};
`;

export const ReminderCardBody = styled.div``;

export const ReminderCardText = styled.h3`
  font-family: ${root.secondaryFont};
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

export const ReminderCardSmallText = styled.p`
  font-family: ${root.secondaryFont};
  font-size: 1.2rem;
  color: ${root.fadedTextColor};
`;
