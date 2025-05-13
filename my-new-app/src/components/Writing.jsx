import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaPen, FaRegSquare, FaRegCircle } from "react-icons/fa";
import { FaHome } from 'react-icons/fa'; // Importing home icon
const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(180deg); }
  100% { transform: translateY(0) rotate(360deg); }
`;

const WritingSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #f9f6f0, #ece9e1);
  color: #2c2f36;
  position: relative;
  min-height: 100vh;
  text-align: center;
  box-shadow: 
    0 0 10px 5px rgba(86, 72, 255, 0.7), 
    0 0 20px 5px rgba(86, 72, 255, 0.5), 
    0 0 30px 5px rgba(86, 72, 0.4), 
    inset 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

const Heading = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  font-family: 'Merriweather', serif;
  background: linear-gradient(to right, #6a4c93, #ab7eb3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

const Info = styled.p`
  font-size: 1.2rem;
  color: #444;
  margin-top: 1rem;
  font-style: italic;
  font-family: 'Merriweather', serif;
`;

const Quote = styled.p`
  margin-top: 2rem;
  font-size: 1.1rem;
  color: #666;
  font-family: 'Georgia', serif;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-top: 3rem;
  font-family: 'Merriweather', serif;
  color: #4e3b62;
  text-decoration: underline;
`;

const PoemSection = styled.div`
  margin: 3rem 0;
  padding: 2rem;
  background-color: #faf9f5;
  border-left: 5px solid #6a4c93;
  font-family: 'Georgia', serif;
  font-size: 1.2rem;
  color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: left;
  margin-bottom: 2rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  background: linear-gradient(to right, rgb(161, 127, 210), #8e9eab); /* Gradient background */
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s ease;

  &:hover {
    background: linear-gradient(to right, rgb(156, 159, 162), rgb(172, 172, 181));
    transform: scale(1.05);
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const IconContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 2.5rem;
  color: #6a4c93;
`;

const SpiralArt = styled.div`
  position: absolute;
  font-size: 3rem;
  opacity: 0.15;
  pointer-events: none;
  user-select: none;
  animation: ${float} 12s ease-in-out infinite;
`;

export default function Writing() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <WritingSection>
      {/* Back Button */}
      <BackButton onClick={goBack}> <FaHome /> Back to Home</BackButton>

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
        Writing Collection
      </Heading>

      <Info>This is the detailed page for my Writing collection. Explore my poems, stories, and essays.</Info>
      <Quote>"To write is to exist." — Me on a random Tuesday</Quote>

      <SectionTitle>Poems</SectionTitle>
      {/* Poem 1 */}
      <PoemSection>
        <h3>Poem Title 1</h3>
        <p>"This is the first line of the poem.<br/>
           This is the second line.<br/>
           And here goes the third line, telling a story in rhythm."</p>
      </PoemSection>

      {/* Poem 2 */}
      <PoemSection>
        <h3>Poem Title 2</h3>
        <p>"Another beautiful poem begins here,<br/>
           Rhythmic words dancing on the page,<br/>
           With meaning to uncover and ideas to engage."</p>
      </PoemSection>

      {/* Add more poem sections as needed */}
      
      {/* Icons Section */}
      <IconContainer>
        <FaPen />
        <FaRegSquare />
        <FaRegCircle />
      </IconContainer>
    </WritingSection>
  );
}
