// src/components/Hero.jsx
import styled, { keyframes } from "styled-components";
import SpiralSVG from "./SpiralSVG";
import { BaseSection, SectionTitle, SubTitle, Button } from './SectionStyles';  // Importing styles from SectionStyles.js


const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  background: radial-gradient(circle at 30% 30%, #3a2a6f, #1e1e2f);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const SpiralBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0.2;
  animation: ${float} 5s ease-in-out infinite;
`;

const HeroContent = styled.div`
  z-index: 1;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 4rem;
  letter-spacing: 3px;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ff6ec4, #7873f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-family: 'Courier New', monospace;
  font-size: 1.2rem;
`;

export default function Hero() {
  return (
    <HeroSection>
      <SpiralBackground>
        <SpiralSVG />
      </SpiralBackground>
      <HeroContent>
        <Title>Diya's Spiraling Portfolio</Title>
        <Subtitle>Software Engineer, Designer & Creator</Subtitle>
      </HeroContent>
    </HeroSection>
  );
}

