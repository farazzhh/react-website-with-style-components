import React from "react";
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import {
    ServicesContainer, ServicesWrapper, ServicesCard, ServicesH1, ServicesIcon, ServicesH2, ServicesP
} from './ServicesElement'
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />

          <ServicesH2>Reduce BadThings</ServicesH2>
          <ServicesP>
            We help to reduce your stress and increase your power mind
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />

          <ServicesH2>Health Things</ServicesH2>
          <ServicesP>
            We help to reduce your stress and increase your power mind
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />

          <ServicesH2>Feel More</ServicesH2>
          <ServicesP>
            We help to reduce your stress and increase your power mind
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
