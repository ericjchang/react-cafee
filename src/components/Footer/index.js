import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMediaWrap,
  WebsiteRights
} from './FooterElements'

import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">Memberships</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/signin">Contact</FooterLink>
              <FooterLink to="/signin">Support</FooterLink>
              <FooterLink to="/signin">Sponsorship</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Brands Knowledge</FooterLinkTitle>
              <FooterLink to="/signin">Videos</FooterLink>
              <FooterLink to="/signin">Ambassadors</FooterLink>
              <FooterLink to="/signin">Influencers</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome}>cafeé</SocialLogo>
            <WebsiteRights>cafeé &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
