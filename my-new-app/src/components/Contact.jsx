import React from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaLaptopCode,
} from 'react-icons/fa';

const C = {
  bg: '#171a16',
  panel: '#20251e',
  green: '#9ca889',
  greenLight: '#c0c9ad',
  greenDark: '#626f56',
  parchment: '#e9e4d5',
  muted: '#b6b9ad',
  border: '#41483a',
};

const ContactSection = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 2rem 5vw 5rem;
  background: ${C.bg};
  color: ${C.parchment};

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 330px;
    height: 330px;
    top: 15%;
    right: -210px;
    border: 1px solid rgba(192, 201, 173, 0.15);
    border-radius: 50%;
    box-shadow:
      0 0 0 28px rgba(192, 201, 173, 0.025),
      0 0 0 56px rgba(192, 201, 173, 0.025);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 180px;
    height: 180px;
    bottom: 6%;
    left: -120px;
    border: 1px solid rgba(156, 168, 137, 0.18);
    transform: rotate(45deg);
    pointer-events: none;
  }

  @media (min-width: 1600px) {
    padding-right: max(5vw, calc((100vw - 1400px) / 2));
    padding-left: max(5vw, calc((100vw - 1400px) / 2));
  }
`;

const Container = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${C.border};

  span {
    color: ${C.green};
    font-size: 0.7rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.65rem;
  }
`;

const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${C.greenLight};
  font-size: 0.72rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 0 0 1.5rem;

  &::before {
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    background: ${C.green};
  }
`;

const Hero = styled.div`
  padding: 7rem 0 4rem;
  max-width: 900px;

  @media (max-width: 700px) {
    padding-top: 4.5rem;
  }
`;

const Heading = styled(motion.h1)`
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(3rem, 9vw, 7rem);
  line-height: 1.04;
  font-weight: 400;
  letter-spacing: -3px;
  margin: 0 0 2rem;

  span {
    display: block;
    color: ${C.green};
    font-style: italic;
  }

  @media (max-width: 600px) {
    letter-spacing: -1px;
  }
`;

const Intro = styled.p`
  max-width: 680px;
  color: ${C.muted};
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.95;
`;

const Status = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 1.5rem;
  padding: 0.8rem 1rem;
  border: 1px solid ${C.border};
  color: ${C.parchment};
  font-size: 0.82rem;
  line-height: 1.7;
  background: rgba(156, 168, 137, 0.07);
  max-width: 100%;
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${C.greenLight};
  flex-shrink: 0;
  box-shadow: 0 0 0 4px rgba(156, 168, 137, 0.12);
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    ${C.greenDark},
    ${C.border} 45%,
    transparent
  );
  margin: 1rem 0 4rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.9fr);
  gap: 4rem;
  align-items: start;

  @media (max-width: 900px) {
    gap: 2.5rem;
  }

  @media (max-width: 760px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Subheading = styled.h2`
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  line-height: 1.2;
  margin: 0 0 1.25rem;

  span {
    color: ${C.green};
    font-style: italic;
  }
`;

const BodyText = styled.p`
  color: ${C.muted};
  line-height: 1.9;
  margin: 0 0 1.5rem;
  font-size: 0.95rem;
`;

const EmailCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1.25rem;
  border: 1px solid ${C.border};
  background: rgba(156, 168, 137, 0.035);
  color: ${C.parchment};
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: border-color 0.25s ease, background 0.25s ease;

  &:hover {
    border-color: ${C.green};
    background: rgba(156, 168, 137, 0.09);
  }

  &:focus-visible {
    outline: 2px solid ${C.greenLight};
    outline-offset: 4px;
  }
`;

const EmailIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  color: ${C.greenLight};
  border: 1px solid ${C.greenDark};
  background: rgba(156, 168, 137, 0.08);
  font-size: 1.1rem;
`;

const EmailContent = styled.div`
  min-width: 0;
  flex: 1;

  small {
    display: block;
    color: ${C.green};
    font-size: 0.7rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 0.45rem;
  }

  strong {
    font-size: 0.9rem;
    font-weight: 400;
    overflow-wrap: anywhere;
  }
`;

const Arrow = styled(FaArrowRight)`
  color: ${C.greenLight};
  flex-shrink: 0;
  transition: transform 0.25s ease;

  ${EmailCard}:hover & {
    transform: translateX(4px);
  }
`;

const SocialHeading = styled.h3`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${C.green};
  margin: 2.5rem 0 1rem;
`;

const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.9rem 1rem;
  border: 1px solid ${C.border};
  background: rgba(156, 168, 137, 0.025);
  color: ${C.parchment};
  text-decoration: none;
  font-size: 0.85rem;
  transition:
    border-color 0.25s ease,
    color 0.25s ease,
    background 0.25s ease;

  svg {
    color: ${C.greenLight};
    font-size: 1.05rem;
  }

  &:hover {
    border-color: ${C.green};
    background: rgba(156, 168, 137, 0.09);
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid ${C.greenLight};
    outline-offset: 4px;
  }
`;

const ProfileCard = styled(motion.aside)`
  position: relative;
  overflow: hidden;
  padding: 2.5rem;
  background:
    radial-gradient(
      ellipse at top right,
      rgba(156, 168, 137, 0.13),
      transparent 60%
    ),
    ${C.panel};
  border: 1px solid ${C.border};

  &::after {
    content: '';
    position: absolute;
    width: 130px;
    height: 130px;
    right: -75px;
    bottom: -75px;
    border: 1px solid rgba(192, 201, 173, 0.2);
    border-radius: 50%;
    box-shadow: 0 0 0 18px rgba(192, 201, 173, 0.025);
    pointer-events: none;
  }

  @media (max-width: 500px) {
    padding: 1.5rem;
  }
`;

const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin-bottom: 2rem;
  color: ${C.greenLight};
  border: 1px solid ${C.greenDark};
  background: rgba(156, 168, 137, 0.08);
  font-size: 1.4rem;
`;

const ProfileTitle = styled.h3`
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.35;
  margin: 0 0 1rem;

  span {
    color: ${C.greenLight};
    font-style: italic;
  }
`;

const ProfileDescription = styled.p`
  color: ${C.muted};
  font-size: 0.9rem;
  line-height: 1.9;
  margin: 0 0 1.5rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const Skill = styled.span`
  padding: 0.6rem 0.75rem;
  border: 1px solid ${C.border};
  background: rgba(156, 168, 137, 0.045);
  color: ${C.greenLight};
  font-size: 0.75rem;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: ${C.green};
    background: rgba(156, 168, 137, 0.12);
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 6rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${C.border};

  p {
    color: ${C.muted};
    font-size: 0.78rem;
    line-height: 1.8;
    margin: 0;
  }

  span {
    color: ${C.greenLight};
  }
`;

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <ContactSection id="contact">
      <Container>
        <TopLine>
          <span>Contact / Opportunities</span>
          <span>Available for conversations</span>
        </TopLine>

        <Hero>
          <Eyebrow>Let's connect</Eyebrow>

          <Heading
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Have a project
            <span>or opportunity?</span>
          </Heading>

          <Intro>
            I'm a Software Engineering graduate with a minor in
            Business Administration, currently working as a
            designer and sample maker in a packaging factory.
            I'm looking to grow into the tech industry, apply my
            technical foundation, and keep developing my skills
            through practical experience. I'd love to connect
            with teams looking for a curious, creative, and
            motivated junior candidate.
          </Intro>

          <Status>
            <StatusDot />
            Open to junior IT, software development, and entry-level tech opportunities
          </Status>
        </Hero>

        <Divider />

        <ContentGrid>
          <div>
            <Subheading>
              Let's start a <span>conversation.</span>
            </Subheading>

            <BodyText>
              Whether you're hiring for an entry-level role,
              looking for a collaborator, or have a project to
              discuss, feel free to reach out. I'm happy to talk
              about my background, projects, and what I can bring
              to your team.
            </BodyText>

            <EmailCard href="mailto:diya.hoshyar3@gmail.com">
              <EmailIcon>
                <FaEnvelope aria-hidden="true" />
              </EmailIcon>

              <EmailContent>
                <small>Email me</small>
                <strong>diya.hoshyar3@gmail.com</strong>
              </EmailContent>

              <Arrow aria-hidden="true" />
            </EmailCard>

            <SocialHeading>Find me online</SocialHeading>

            <Socials>
              <SocialLink
                href="https://github.com/deyah3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </SocialLink>

              <SocialLink
                href="https://www.linkedin.com/in/diya-mustafa-67a667251/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
              >
                <FaLinkedin aria-hidden="true" />
                LinkedIn
              </SocialLink>
            </Socials>
          </div>

          <ProfileCard
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <ProfileIcon>
              <FaLaptopCode aria-hidden="true" />
            </ProfileIcon>

            <ProfileTitle>
              A creative mindset.
              <br />
              <span>A technical direction.</span>
            </ProfileTitle>

            <ProfileDescription>
              My background combines software engineering,
              visual design, and an understanding of business.
              I'm interested in opportunities where I can
              continue learning, contribute to real projects,
              and build a strong technical career.
            </ProfileDescription>

            <SkillList>
              <Skill>Software Engineering</Skill>
              <Skill>Web Development</Skill>
              <Skill>SQL / Databases</Skill>
              <Skill>Networking</Skill>
              <Skill>Visual Design</Skill>
              <Skill>Problem Solving</Skill>
            </SkillList>
          </ProfileCard>
        </ContentGrid>

        <Footer>
          <p>Designed with care and curiosity.</p>
          <p>
            Always learning. <span>Always building.</span>
          </p>
        </Footer>
      </Container>
    </ContactSection>
  );
}
