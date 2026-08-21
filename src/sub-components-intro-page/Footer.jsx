import { useState, useEffect } from "react";
import styled from "styled-components";

const FooterDiv = styled.footer`
  width: 100%;
  color: #808080;
  padding: 40px 0px 20px 20%;
  font-family: "Plus Jakarta Sans", serif;
  background-color: #000000;
`;

const FooterQuestions = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
`;

const FooterCallLink = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const FooterLinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px 20px;
  margin-bottom: 30px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const FooterLink = styled.a`
  color: #808080;
  font-size: 0.85rem;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #a0a0a0;
  }
`;

const FooterLanguageButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 6px;
  background-color: transparent;
  border: 1px solid #808080;
  border-radius: 2px;
  color: #808080;
  padding: 8px 12px;
  font-size: 0.85rem;
  cursor: pointer;
  margin-bottom: 20px;
  font-family: "Plus Jakarta Sans", serif;
`;

const FooterServiceCode = styled.button`
  background: transparent;
  border: 1px solid #808080;
  border-radius: 2px;
  color: #808080;
  padding: 6px 10px;
  font-size: 0.85rem;
  cursor: pointer;
  margin-bottom: 16px;
  font-family: "Plus Jakarta Sans", serif;
`;

const FooterCopyright = styled.p`
  font-size: 0.8rem;
  color: #808080;
`;

const footerLinks = [
  "FAQ",
  "Help Centre",
  "Account",
  "Media Centre",
  "Investor Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
  "Contact Us",
  "Speed Test",
  "Legal Notices",
];

export default function FooterIntroPage(props) {
  const handleFooterLinkClick = (label) => {
    console.log("Footer link clicked:", label);
  };
  const handleFooterLanguageClick = () => {
    console.log("Footer language selector clicked");
  };
  const handleServiceCodeClick = () => {
    console.log("Service code clicked");
  };
  return (
    <FooterDiv>
      <FooterQuestions>
        <FooterCallLink onClick={() => console.log("Phone number clicked")}>
          Questions? Contact us.
        </FooterCallLink>
      </FooterQuestions>
      <FooterLinksGrid>
        {footerLinks.map((label) => (
          <FooterLink key={label} onClick={() => handleFooterLinkClick(label)}>
            {label}
          </FooterLink>
        ))}
      </FooterLinksGrid>
      <FooterLanguageButton onClick={handleFooterLanguageClick}>
        🌐 English
      </FooterLanguageButton>
      <FooterServiceCode onClick={handleServiceCodeClick}>
        Service Code
      </FooterServiceCode>
      
      <FooterCopyright>StreamFlow</FooterCopyright>
    </FooterDiv>
  );
}
