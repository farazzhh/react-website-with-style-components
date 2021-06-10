import React from "react";
import { Button } from "react-scroll";

const infoSection = () => {
  return (
    <div>
      <infoContainer id={id}>
        <infoWrapper>
          <infoRow>
                      <Column1>
                          <TextWrapper>
                              <TopLine>
                                  TopLine
                              </TopLine>
                              <Heading>
                                  Heading
                              </Heading>
                              <SubTitle>SubTitle</SubTitle>
                              <BtnWrap>
                                  <Button to='home'>Button</Button>
                              </BtnWrap>
                      </TextWrapper>
                      </Column1>
          </infoRow>
        </infoWrapper>
      </infoContainer>
    </div>
  );
};

export default infoSection;
