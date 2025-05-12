import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  background: linear-gradient(to right, #22222, #44333);
  color: white;
  padding: 2rem 1rem;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  border-top: 2px  #888;
  position: relative;
`;

const SpiralArt = styled.div`
  position: absolute;
  top: -30px;
  right: 20px;
  font-size: 3rem;
  opacity: 0.2;
  transform: rotate(30deg);
`;

export default function Footer() {
  return (
    <FooterSection>
      <SpiralArt>🌀</SpiralArt>
      <p>© {new Date().getFullYear()} Diya — Artist, Coder & Illustrator</p>
    </FooterSection>
  );
}
