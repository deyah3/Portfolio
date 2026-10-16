
import React from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaHome,
  FaArrowRight,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const WorkSection = styled.section`
  min-height: 100vh;
  padding: 2rem clamp(1.25rem, 5vw, 5rem) 6rem;
  background: #101114;
  color: #f4f1eb;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 5rem;

  @media (max-width: 600px) {
    margin-bottom: 3.5rem;
  }
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0;
  border: none;
  background: transparent;
  color: #c6a77b;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.25s ease;

  &:hover {
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid #c6a77b;
    outline-offset: 5px;
  }
`;

const Index = styled.span`
  color: #85858c;
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Hero = styled.div`
  max-width: 900px;
  margin-bottom: 5rem;
`;

const Eyebrow = styled.p`
  color: #c6a77b;
  font-size: 0.72rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const Heading = styled(motion.h1)`
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 400;
  font-size: clamp(3rem, 8vw, 6.5rem);
  line-height: 1.05;
  letter-spacing: -3px;
  margin: 0 0 2rem;

  span {
    color: #c6a77b;
    font-style: italic;
  }

  @media (max-width: 600px) {
    letter-spacing: -1px;
  }
`;

const Description = styled.p`
  max-width: 680px;
  color: #b8b8bd;
  font-size: 1.05rem;
  line-height: 1.9;
`;

const Divider = styled.div`
  height: 1px;
  background: #343439;
  margin: 3rem 0;
`;

const SectionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
  margin-bottom: 2rem;

  h2 {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 400;
    margin: 0;
  }

  span {
    color: #85858c;
    font-size: 0.72rem;
    letter-spacing: 2px;
  }

  @media (max-width: 500px) {
    align-items: start;
    flex-direction: column;
  }
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProjectBox = styled(motion.article)`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(1.5rem, 4vw, 4rem);
  align-items: center;
  padding: clamp(1.5rem, 4vw, 3rem);
  background: #17171b;
  border: 1px solid #343439;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #75634b;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`;

const ProjectInfo = styled.div`
  min-width: 0;
`;

const ProjectNumber = styled.p`
  color: #c6a77b;
  font-size: 0.72rem;
  letter-spacing: 3px;
  margin: 0 0 1rem;
`;

const ProjectTitle = styled.h3`
  color: #f4f1eb;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.7rem, 3vw, 2.5rem);
  font-weight: 400;
  line-height: 1.2;
  margin: 0 0 1rem;
`;

const ProjectDescription = styled.p`
  color: #b2b2b8;
  font-size: 0.94rem;
  line-height: 1.85;
  margin: 0 0 1rem;
`;

const Duration = styled.p`
  color: #85858c;
  font-size: 0.8rem;
  line-height: 1.7;
  margin: 0 0 1.25rem;

  strong {
    color: #d6c5a8;
    font-weight: 500;
  }
`;

const ProjectImageArea = styled.div`
  min-width: 0;
  width: 100%;
`;

const ProjectImage = styled.img`
  display: block;
  width: 100%;
  max-height: 440px;
  object-fit: contain;
  background: #202025;
  transition: transform 0.4s ease;

  ${ProjectBox}:hover & {
    transform: scale(1.015);
  }
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 450px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const LogoFrame = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  padding: 0.6rem;
  background: #202025;
  border: 1px solid #37373c;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.35s ease;
  }

  &:hover img {
    transform: scale(1.06);
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.5rem;
`;

const Tag = styled.span`
  padding: 0.55rem 0.8rem;
  border: 1px solid #454147;
  color: #d6c5a8;
  font-size: 0.75rem;
`;

const MoreSection = styled(motion.section)`
  margin-top: 6rem;
  padding: clamp(2rem, 6vw, 5rem);
  border: 1px solid #3a3835;
  background:
    radial-gradient(
      ellipse at top right,
      rgba(198, 167, 123, 0.1),
      transparent 55%
    ),
    #151518;
`;

const MoreTitle = styled.h2`
  max-width: 750px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2.3rem, 5vw, 4rem);
  font-weight: 400;
  line-height: 1.2;
  margin: 0 0 1.5rem;

  span {
    color: #c6a77b;
    font-style: italic;
  }
`;

const MoreDescription = styled.p`
  max-width: 680px;
  color: #b8b8bd;
  line-height: 1.9;
`;

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
  padding: 1rem 1.3rem;
  background: #c6a77b;
  color: #171614;
  text-decoration: none;
  font-size: 0.85rem;
  transition: background 0.25s ease, transform 0.25s ease;

  &:hover {
    background: #e0c8a4;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #f4f1eb;
    outline-offset: 4px;
  }
`;

export default function Work() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const animation = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.1 },
          transition: { duration: 0.55, delay },
        };

  return (
    <WorkSection id="work">
      <Container>
        <TopBar>
          <BackButton onClick={() => navigate('/')}>
            <FaHome aria-hidden="true" />
            Back to Home
          </BackButton>

          <Index>Selected work / Portfolio</Index>
        </TopBar>

        <Hero>
          <Eyebrow>Design / Development / Collaboration</Eyebrow>

          <Heading
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Work that brings
            <br />
            <span>ideas to life.</span>
          </Heading>

          <Description>
            A selection of creative and technical projects, from
            logo and poster design to website development.
            Each project represents a different opportunity to
            explore ideas, solve problems, and develop new skills.
          </Description>
        </Hero>

        <Divider />

        <SectionHeading>
          <h2>Selected Projects</h2>
          <span>01 — 04</span>
        </SectionHeading>

        <ProjectList>
          <ProjectBox {...animation(0)}>
            <ProjectInfo>
              <ProjectNumber>01 / BRANDING</ProjectNumber>
              <ProjectTitle>Freelance Logo Design</ProjectTitle>
              <ProjectDescription>
                Designed unique and meaningful logos tailored
                to client brand identities and goals.
              </ProjectDescription>
              <Tags>
                <Tag>Logo Design</Tag>
                <Tag>Brand Identity</Tag>
                <Tag>Visual Design</Tag>
              </Tags>
            </ProjectInfo>

            <ProjectImageArea>
              <LogoGrid>
                {Array.from({ length: 6 }, (_, index) => (
                  <LogoFrame key={index}>
                    <img
                      src={`/logo${index + 1}.jpg`}
                      alt={`Logo design ${index + 1}`}
                      loading="lazy"
                    />
                  </LogoFrame>
                ))}
              </LogoGrid>
            </ProjectImageArea>
          </ProjectBox>

          <ProjectBox {...animation(0.05)}>
            <ProjectInfo>
              <ProjectNumber>02 / EDUCATION</ProjectNumber>
              <ProjectTitle>Course Trainer: Poster Design</ProjectTitle>
              <Duration>
                <strong>Duration:</strong> March 2025
              </Duration>
              <ProjectDescription>
                Designed an educational poster for a robotics
                course, balancing an engaging, child-friendly
                aesthetic with clear visual communication.
              </ProjectDescription>
              <Tags>
                <Tag>Poster Design</Tag>
                <Tag>Education</Tag>
              </Tags>
            </ProjectInfo>

            <ProjectImageArea>
              <ProjectImage
                src="/poster1.jpg"
                alt="Educational robotics course poster"
                loading="lazy"
              />
            </ProjectImageArea>
          </ProjectBox>

          <ProjectBox {...animation(0.05)}>
            <ProjectInfo>
              <ProjectNumber>03 / CAPSTONE</ProjectNumber>
              <ProjectTitle>PalettePicker Website</ProjectTitle>
              <Duration>
                <strong>Duration:</strong> September–December 2024
              </Duration>
              <ProjectDescription>
                Collaborated on a capstone website project,
                gaining experience with website structure,
                interface design, and development using Next.js,
                Tailwind CSS, and MongoDB.
              </ProjectDescription>
              <Tags>
                <Tag>Next.js</Tag>
                <Tag>Tailwind CSS</Tag>
                <Tag>MongoDB</Tag>
              </Tags>
            </ProjectInfo>

            <ProjectImageArea>
              <ProjectImage
                src="/capstone.jpg"
                alt="PalettePicker capstone website screenshot"
                loading="lazy"
              />
            </ProjectImageArea>
          </ProjectBox>

          <ProjectBox {...animation(0.05)}>
            <ProjectInfo>
              <ProjectNumber>04 / INTERNSHIP</ProjectNumber>
              <ProjectTitle>Website Development</ProjectTitle>
              <Duration>
                <strong>Duration:</strong> July–September 2024
              </Duration>
              <ProjectDescription>
                Developed a movie application website during
                an internship, gaining practical exposure to
                frontend and backend development with React,
                Node.js, and MySQL.
              </ProjectDescription>
              <Tags>
                <Tag>React</Tag>
                <Tag>Node.js</Tag>
                <Tag>MySQL</Tag>
              </Tags>
            </ProjectInfo>

            <ProjectImageArea>
              <ProjectImage
                src="/website1.jpg"
                alt="Movie application website project"
                loading="lazy"
              />
            </ProjectImageArea>
          </ProjectBox>
        </ProjectList>

        <MoreSection {...animation(0)}>
          <Eyebrow>What's next</Eyebrow>

          <MoreTitle>
            Always learning.
            <br />
            <span>Always creating.</span>
          </MoreTitle>

          <MoreDescription>
            My work continues to evolve as I explore new ideas,
            develop my design skills, and revisit technical
            projects. I'm interested in taking on new creative
            challenges and collaborating on projects that value
            thoughtful design and meaningful ideas.
          </MoreDescription>

          <ContactLink href="diya.hoshyar3@gmail.com">
            Let's work together
            <FaExternalLinkAlt aria-hidden="true" />
          </ContactLink>
        </MoreSection>
      </Container>
    </WorkSection>
  );
}
