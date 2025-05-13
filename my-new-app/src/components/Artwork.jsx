// src/components/Artwork.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa'; // Importing home icon

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
  background: linear-gradient(to right,rgb(230, 219, 223), #8e9eab); /* Muted pink and soft blue gradient */
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

const BackButton = styled(Link)`
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

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ArtworkCard = styled(motion.div)`
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
`;

const ArtworkImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
  object-fit: cover;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #ddd;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-family: 'Press Start 2P', cursive;
  font-size: 2.5rem;
  margin-top: 4rem;
  color:rgb(197, 155, 223);
`;

export default function Artwork() {
  return (
    <Section id="artwork">
      <BackButton to="/">
        <FaHome /> Back to Home
      </BackButton>

      <Title>Explore My Artwork</Title>

      {/* Digital Art Section */}
      <SectionTitle>Digital Art</SectionTitle>
      <Grid>
        <ArtworkCard
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ArtworkImage src="/digital-art1.jpg" alt="Digital Art 1" />
          <Description>
            A digital art of a Giraffe using krita.
          </Description>
        </ArtworkCard>

        <ArtworkCard
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ArtworkImage src="/digital-art2.jpg" alt="Digital Art 2" />
          <Description>
A digital art of an evil rabbit using krita.          </Description>
        </ArtworkCard>

        <ArtworkCard
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ArtworkImage src="/digital-art3.jpg" alt="Digital Art 3" />
          <Description>
A digital art of a hungry monkey using krita.          </Description>
        </ArtworkCard>
      </Grid>

      {/* Paintings Section */}
      <SectionTitle>Paintings</SectionTitle>
      <Grid>
        <ArtworkCard
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ArtworkImage src="/painting1.jpg" alt="Painting 1" />
          <Description>
            Acrylic painting of a plague doctor.
          </Description>
        </ArtworkCard>

        <ArtworkCard
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <ArtworkImage src="/painting2.jpg" alt="Painting 2" />
          <Description>
Acrylic painting of a spring breeze of kurdistan.          </Description>
        </ArtworkCard>

        <ArtworkCard
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <ArtworkImage src="/painting3.jpg" alt="Painting 3" />
          <Description>
            Acrylic painting of a jester.
          </Description>
        </ArtworkCard>
      </Grid>
    </Section>
  );
}
