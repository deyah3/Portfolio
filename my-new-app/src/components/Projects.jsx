// src/components/Projects.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Section = styled.section`
  background: linear-gradient(to top right, #3e4e60, #6b7a8f); /* Soft muted blue-gray gradient */
  color: #fff;
  padding: 5rem 2rem;
  text-align: center;
  overflow: hidden;
`;

const Title = styled.h2`
  font-family: 'Press Start 2P', cursive;
  font-size: 3rem;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #d6a4b7, #8e9eab); /* Muted pink and soft blue gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 2px;
  text-shadow: 0px 0px 10px rgba(214, 164, 183, 0.4), 0px 0px 20px rgba(142, 158, 171, 0.4);
  animation: neonPulse 2s infinite alternate;

  @keyframes neonPulse {
    0% {
      text-shadow: 0px 0px 10px rgba(214, 164, 183, 0.4), 0px 0px 20px rgba(142, 158, 171, 0.4);
    }
    100% {
      text-shadow: 0px 0px 20px rgba(214, 164, 183, 0.6), 0px 0px 40px rgba(142, 158, 171, 0.6);
    }
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background-color: #2f3b46; /* Muted charcoal with soft blue tones */
  border-radius: 12px;
  padding: 2rem;
  width: 320px;
  box-shadow: 0 4px 20px rgba(144, 164, 174, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
 animation: neonPulse 2s infinite alternate;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(144, 164, 174, 0.3);
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
  object-fit: cover;
`;

const Tech = styled.p`
  font-family: 'Courier New', monospace;
  color: #aaa;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #ddd;
  margin-bottom: 1.5rem;
`;

const Button = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  background: linear-gradient(to right,rgb(161, 127, 210), #8e9eab); /* Muted pink to soft blue gradient */
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s ease;

  &:hover {
    background: linear-gradient(to right,rgb(156, 159, 162),rgb(172, 172, 181)); /* Reversed gradient */
    transform: scale(1.05);
  }
`;

export default function Projects() {
  return (
    <Section id="projects">
      <Title>Explore My Work</Title>
      <Grid>
        <Card
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProjectImage src="/artwork-image.jpg" alt="Artwork" />
          <Tech>Digital Art, Illustrator</Tech>
          <Description>A collection of my digital and physical artworks.</Description>
          <Button to="/artwork">View Artwork</Button>
        </Card>

        <Card
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ProjectImage src="/writing-image.jpg" alt="Writing" />
          <Tech>Creative Writing</Tech>
          <Description>Stories, essays, and narrative pieces.</Description>
          <Button to="/writing">View Writing</Button>
        </Card>

        <Card
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ProjectImage src="/work-image.jpg" alt="Work" />
          <Tech>UX Design, Freelance</Tech>
          <Description>Selected professional projects.</Description>
          <Button to="/work">View Projects</Button>
        </Card>
      </Grid>
    </Section>
  );
}
