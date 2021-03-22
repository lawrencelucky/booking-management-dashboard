import styled from 'styled-components';

import { root } from './../../globalStyles';

export const BookingsCardContainer = styled.div`
  background: ${root.secondaryBgColor};
  padding: 2rem;
  border-radius: 10px;
`;

export const CardHeader = styled.div``;

export const CardName = styled.p`
  font-weight: 800;
  font-family: ${root.secondaryFont};
`;

export const CardBody = styled.div`
  margin: 2rem 0;
`;

export const BodyServiceContainer = styled.div`
  margin-bottom: 2rem;
`;

export const BodyServiceTitle = styled.p`
  font-size: 1.2rem;
  color: ${root.fadedTextColor};
  font-family: ${root.secondaryFont};
`;

export const BodyService = styled.p``;

export const BodySession = styled.div`
  display: flex;
`;

export const SessionDateContainer = styled.div`
  margin-right: 3rem;
`;

export const SessionDateTitle = styled.p`
  font-size: 1.2rem;
  color: ${root.fadedTextColor};
  font-family: ${root.secondaryFont};
`;

export const SessionDate = styled.p``;

export const SessionTimeContainer = styled.div``;

export const SessionTimeTitle = styled.p`
  font-size: 1.2rem;
  color: ${root.fadedTextColor};
  font-family: ${root.secondaryFont};
`;

export const SessionTime = styled.p``;

export const CardFooter = styled.div`
  border-top: 1px solid ${root.darkBorderColor};
  padding-top: 2rem;
`;

export const FooterAcceptButton = styled.button`
  border: 0;
  background: transparent;
  color: ${root.secondaryFadedDarkBgColor};
  font-weight: 700;
  font-family: ${root.secondaryFont};
  cursor: pointer;
  margin-right: 3rem;
`;

export const FooterDeclineButton = styled.button`
  border: 0;
  background: transparent;
  color: ${root.secondaryFadedTextColor};
  font-weight: 700;
  font-family: ${root.secondaryFont};
  cursor: pointer;
  margin-right: 3rem;
`;
