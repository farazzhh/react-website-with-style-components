import React from "react";
import { FaFacebook,FaInstagram,FaYoutube,FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebSiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElement";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink tp="/">How it Works</FooterLink>
              <FooterLink tp="/">Testimonials</FooterLink>
              <FooterLink tp="/">Careers</FooterLink>
              <FooterLink tp="/">Invsetors</FooterLink>
              <FooterLink tp="/">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink tp="/">Contact</FooterLink>
              <FooterLink tp="/">Support</FooterLink>
              <FooterLink tp="/">Destinations</FooterLink>
              <FooterLink tp="/">Sponsorship</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Video</FooterLinkTitle>
              <FooterLink tp="/">Submit Video</FooterLink>
              <FooterLink tp="/">Ambassadors</FooterLink>
              <FooterLink tp="/">Agency</FooterLink>
              <FooterLink tp="/">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink tp="/">Instagram</FooterLink>
              <FooterLink tp="/">Facebook</FooterLink>
              <FooterLink tp="/">Youtube</FooterLink>
              <FooterLink tp="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Company</SocialLogo>
            <WebSiteRights>
              Company {new Date().getFullYear()} All Rights reserved.
            </WebSiteRights>
            <SocialIcons>
              <SocialIconLink hred="//www.facebook.com" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink hred="//www.instagram.com" target="_blank" aria-label="Instgaram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink hred="//www.youtube.com" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink hred="//www.twitter.com" target="_blank" aria-label="Twiiter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
