import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(180deg); }
  100% { transform: translateY(0) rotate(360deg); }
`;

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #f0f4ff, #dee4f1);
  text-align: center;
  color: #2c2f36;
  position: relative;

  box-shadow: 
    0 0 10px 5px rgba(86, 72, 255, 0.7), 
    0 0 20px 5px rgba(86, 72, 255, 0.5), 
    0 0 30px 5px rgba(86, 72, 255, 0.4), 
    inset 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

const Heading = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-family: 'Patrick Hand', cursive;
  background: linear-gradient(to right, #5f5dbd, #b66dff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

const Info = styled.p`
  font-size: 1.1rem;
  color: #444;
  margin-top: 1rem;
  font-style: italic;
`;

const Quote = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
  color: #666;
  font-family: 'Patrick Hand', cursive;
`;

const Socials = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Link = styled.a`
  color: #5f5dbd;
  font-weight: bold;
  font-size: 2rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #b66dff;
    transform: scale(1.2) rotate(-2deg);
  }
`;

const SpiralArt = styled.div`
  position: absolute;
  font-size: 3rem;
  opacity: 0.15;
  pointer-events: none;
  user-select: none;
  animation: ${float} 12s ease-in-out infinite;
`;

export default function Contact() {
  return (
    <ContactSection id="contact">
      {/* Decorative Spirals */}
      <SpiralArt style={{ top: '10%', left: '5%' }}>🌀</SpiralArt>
      <SpiralArt style={{ top: '20%', right: '10%' }}>🌀</SpiralArt>
      <SpiralArt style={{ top: '70%', left: '15%' }}>🌀</SpiralArt>
      <SpiralArt style={{ top: '50%', right: '20%' }}>🌀</SpiralArt>
      <SpiralArt style={{ top: '30%', left: '40%' }}>🌀</SpiralArt>
      <SpiralArt style={{ top: '80%', right: '35%' }}>🌀</SpiralArt>

      <Heading
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </Heading>
      <Info>Email: diyahushiyar@gmail.com</Info>
      <Quote>"Every journey begins with a single ping."</Quote>
      <Socials>
        <Link href="https://github.com/deyah3" target="_blank" aria-label="GitHub">
          <FaGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/diya-mustafa-67a667251/" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </Link>
        <Link href="https://instagram.com/yourartpage" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </Link>
      </Socials>
    </ContactSection>
  );
}
