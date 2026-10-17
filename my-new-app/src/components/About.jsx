
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: #101114;
  color: #f4f1eb;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Eyebrow = styled.p`
  color: #c6a77b;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 1.5rem;
`;

const Heading = styled(motion.h2)`
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 400;
  font-size: clamp(2.7rem, 6vw, 5rem);
  line-height: 1.1;
  letter-spacing: -2px;
  margin: 0 0 3rem;

  span {
    color: #c6a77b;
    font-style: italic;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 5rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Description = styled.div`
  font-size: 1.05rem;
  line-height: 2;
  color: #b8b8bd;

  p {
    margin: 0 0 1.5rem;
  }

  strong {
    color: #f4f1eb;
    font-weight: 500;
  }
`;

const Details = styled.div`
  border-top: 1px solid #343439;
`;

const Detail = styled.div`
  padding: 1.25rem 0;
  border-bottom: 1px solid #343439;

  .label {
    color: #c6a77b;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0.6rem;
  }

  .value {
    color: #f4f1eb;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 1.2rem;
  }
`;

const Quote = styled(motion.p)`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #343439;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-style: italic;
  color: #d7c4a8;
  max-width: 750px;
  line-height: 1.6;
`;

export default function AboutMe() {
  return (
    <AboutSection id="about">
      <Container>
        <Eyebrow>01 / A little introduction</Eyebrow>

        <Heading
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          An artist’s eye,
          <br />
          always <span>observing.</span>
        </Heading>

        <Content>
          <Description>
            <p>Hello! I’m an <strong>artist and visual storyteller</strong> drawn to the way images, materials, and ideas can express what words sometimes cannot.</p>
            <p>My creative practice moves between <strong>traditional and digital art, illustration, and visual design</strong>. I enjoy exploring different techniques and letting each project find its own visual language.</p>
            <p>I’m interested in the relationship between structure and spontaneity, and in how color, composition, and detail can shape a viewer’s experience.</p>
            <p>I see every piece as part of a larger conversation: a chance to experiment, learn, and make something honest.</p>
          </Description>

          <Details>
            <Detail>
              <div className="label">Currently</div>
              <div className="value">
                Product Designer
              </div>
            </Detail>

            <Detail>
              <div className="label">Industry</div>
              <div className="value">
                Design and Tech 
              </div>
            </Detail>

            <Detail>
              <div className="label">Education</div>
              <div className="value">
                Software Engineering
              </div>
            </Detail>

            <Detail>
              <div className="label">Also interested in</div>
              <div className="value">
                Writing & Experimentation
              </div>
            </Detail>
          </Details>
        </Content>

        <Quote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          “Creating with intention, learning with curiosity,
          and finding connections between design and technology.”
        </Quote>
      </Container>
    </AboutSection>
  );
}
