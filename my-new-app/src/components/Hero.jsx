
import styled, { keyframes } from "styled-components";
import SpiralSVG from "./SpiralSVG";

const float = keyframes`
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-8px) scale(1.015); }
`;

const HeroSection = styled.section`
  position: relative;
  isolation: isolate;
  min-height: 95vh;
  padding: 5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  background:
    radial-gradient(
      ellipse at 15% 20%,
      rgba(193, 200, 178, 0.5),
      transparent 45%
    ),
    radial-gradient(
      ellipse at 85% 75%,
      rgba(125, 140, 112, 0.22),
      transparent 48%
    ),
    linear-gradient(
      135deg,
      #b8c0ae 0%,
      #aab49d 48%,
      #c0c5b5 100%
    );

  color: #252b24;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    opacity: 0.18;
    background-image: radial-gradient(
      rgba(47, 57, 44, 0.4) 0.6px,
      transparent 0.6px
    );
    background-size: 7px 7px;
    mask-image: linear-gradient(
      135deg,
      transparent 5%,
      black 50%,
      transparent 95%
    );
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: min(72vw, 850px);
    aspect-ratio: 1;
    border: 1px solid rgba(56, 68, 52, 0.2);
    border-radius: 50%;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    min-height: 82vh;
    padding: 4rem 1rem;
  }
`;

const SpiralBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.4;
  animation: ${float} 12s ease-in-out infinite;
  pointer-events: none;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 600px) {
    opacity: 0.3;
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

  &::before {
    content: "DESIGN / TECHNOLOGY / EXPRESSION";
    display: block;
    margin-bottom: 2rem;
    color: #465443;
    font-family: "Courier New", monospace;
    font-size: 0.68rem;
    letter-spacing: 0.22em;
  }

  @media (max-width: 600px) {
    padding: 1rem 0.5rem;
  }
`;

const Title = styled.h1`
  max-width: 1000px;
  margin: 0 auto 1.5rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2.8rem, 7.5vw, 6.7rem);
  font-weight: 400;
  letter-spacing: -0.065em;
  line-height: 1.06;
  color: #252b24;

  span {
    display: inline-block;
    color: #586b52;
    font-style: italic;
    font-weight: 400;
  }

  @media (max-width: 600px) {
    letter-spacing: -0.045em;
  }
`;

const Divider = styled.div`
  width: 58px;
  height: 1px;
  margin: 2rem auto;
  background: #65745d;
`;

const Subtitle = styled.p`
  margin: 0;
  color: #394537;
  font-family: "Courier New", monospace;
  font-size: clamp(0.75rem, 1.5vw, 0.95rem);
  letter-spacing: 0.13em;
  line-height: 1.9;
  text-transform: uppercase;

  @media (max-width: 600px) {
    letter-spacing: 0.07em;
  }
`;

const CornerLabel = styled.div`
  position: absolute;
  right: clamp(1rem, 4vw, 3rem);
  bottom: 2rem;
  color: #4c5948;
  font-family: "Courier New", monospace;
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  writing-mode: vertical-rl;

  @media (max-width: 600px) {
    right: 0.75rem;
    bottom: 1rem;
    font-size: 0.55rem;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <SpiralBackground aria-hidden="true">
        <SpiralSVG />
      </SpiralBackground>

      <HeroContent>
        <Title>
          Diya's Spiraling <span>Portfolio</span>
        </Title>

        <Divider />

        <Subtitle>
          Software Engineer, Designer &amp; Creator
        </Subtitle>
      </HeroContent>

      <CornerLabel>AN ONGOING STUDY — 2026</CornerLabel>
    </HeroSection>
  );
}
