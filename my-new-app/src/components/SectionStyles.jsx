// SectionStyles.js
import styled from 'styled-components';

// General Section Style
export const BaseSection = styled.section`
  padding: 4rem 2rem;
  color: white;
  background: radial-gradient(circle at center, #1a1a1a, #000);
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
`;

// Title with neon gradient
export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  letter-spacing: 2px;
  background: linear-gradient(to right, #00e5ff, #18ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

// Subtitle for additional description
export const SubTitle = styled.p`
  font-size: 1rem;
  color: #cfcfcf;
  margin-bottom: 2rem;
`;

// Call-to-action Button
export const Button = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  background: linear-gradient(to right, #00e5ff, #18ffff);
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background: linear-gradient(to right, #18ffff, #00e5ff);
    transform: scale(1.05);
  }
`;
