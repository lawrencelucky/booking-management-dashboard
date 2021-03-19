import styled from 'styled-components';
import { Crown } from '@styled-icons/fa-solid/Crown';

import { root } from './../../globalStyles';

import Pattern from './../../assets/Pattern.svg';

export const CardContainer = styled.div`
  margin-top: 5rem;
  background-image: linear-gradient(
      to top right,
      ${root.opaqueSecondaryDarkBgColor},
      ${root.opaqueSecondaryDarkBgColor}
    ),
    url(${Pattern});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2.5rem;
`;

export const CardBody = styled.div``;

export const CardHeader = styled.h2`
  font-weight: 700;
  font-family: ${root.secondaryFont};
  color: ${root.secondaryBgColor};
`;

export const CardText = styled.div`
  color: ${root.secondaryBgColor};
  font-family: ${root.secondaryFont};
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

export const CardImageContainer = styled.div`
  background: ${root.oddColor};
  padding: 1rem;
  border-radius: 15px;
`;

export const CrownIcon = styled(Crown)`
  width: 4rem;
  color: ${root.secondaryBgColor};
`;
