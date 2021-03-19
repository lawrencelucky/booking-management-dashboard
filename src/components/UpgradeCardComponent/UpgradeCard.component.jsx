import React from 'react';

import {
  CardContainer,
  CardBody,
  CardHeader,
  CardText,
  CardImageContainer,
  CrownIcon,
} from './UpgradeCard.styles';

const UpgradeCard = () => {
  return (
    <CardContainer>
      <CardBody>
        <CardHeader>
          Upgrade <br /> to PRO
        </CardHeader>
        <CardText>For more Profile Control</CardText>
      </CardBody>
      <CardImageContainer>
        <CrownIcon />
      </CardImageContainer>
    </CardContainer>
  );
};

export default UpgradeCard;
