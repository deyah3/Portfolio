
 // src/components/Hero.jsx
import styled, { keyframes } from "styled-components";
import SpiralSVG from "./SpiralSVG";

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 95vh;
  background:
    radial-gradient(
      circle at 50% 45%,
      rgba(166, 160, 120, 0.10),
      transparent 55%
    ),
    #101114;
  color: #f4f1eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const SpiralBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.22;
  animation: ${float} 8s ease-in-out infinite;
  pointer-events: none;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2.5rem, 5.5vw, 5rem);
  font-weight: 400;
  letter-spacing: -1.5px;
  line-height: 1.15;
  margin: 0 0 1.5rem;
  color: #f4f1eb;

  span {
    color: #a6a078;
    font-style: italic;
  }

  @media (max-width: 600px) {
    letter-spacing: -0.5px;
  }
`;

const Subtitle = styled.p`
  font-family: "Courier New", monospace;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  letter-spacing: 1.5px;
  line-height: 1.8;
  color: #c6a77b;
  margin: 0;
`;

export default function Hero() {
  return (
    <HeroSection>
      <SpiralBackground>
        <SpiralSVG />
      </SpiralBackground>

      <HeroContent>
        <Title>
          Diya's Spiraling <span>Portfolio</span>
        </Title>

        <Subtitle>
          Software Engineer, Designer &amp; Creator
        </Subtitle>
      </HeroContent>
    </HeroSection>
  );
}
