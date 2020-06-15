import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <span>&copy;{new Date().getFullYear()} Dmitry Polyakov</span>
    </FooterContainer>
  );
};

export default Footer;

// Footer container
const FooterContainer = styled.footer`
  background: #344;
  height: 3rem;
  color: #000;
  display: flex;
  align-items: center;
  padding: 20px;
  color: #ccc;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;
