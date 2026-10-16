
import React from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaCode,
  FaLaptopCode,
} from 'react-icons/fa';

const ContactSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: 2rem clamp(1.25rem, 5vw, 5rem) 5rem;
  background: #101114;
  color: #f4f1eb;
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
  border-bottom: 1px solid #343439;

  span {
    color: #85858c;
    font-size: 0.7rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

const Eyebrow = styled.p`
  color: #c6a77b;
  font-size: 0.72rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const Hero = styled.div`
  padding: clamp(4rem, 10vw, 8rem) 0 4rem;
  max-width: 900px;
`;

const Heading = styled(motion.h1)`
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(3.2rem, 9vw, 7rem);
  line-height: 1.04;
  font-weight: 400;
  letter-spacing: -3px;
  margin: 0 0 2rem;

  span {
    display: block;
    color: #c6a77b;
    font-style: italic;
  }

  @media (max-width: 600px) {
    letter-spacing: -1px;
  }
`;

const Intro = styled.p`
  max-width: 680px;
  color: #b8b8bd;
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.95;
`;

const Status = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 1.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid #41413a;
  color: #ded8cf;
  font-size: 0.82rem;
  background: rgba(198, 167, 123, 0.05);
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #c6a77b;
  flex-shrink: 0;
`;

const Divider = styled.div`
  height: 1px;
  background: #343439;
  margin: 1rem 0 4rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.9fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: start;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Subheading = styled.h2`
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  line-height: 1.2;
  margin: 0 0 1.25rem;

  span {
    color: #c6a77b;
    font-style: italic;
  }
`;

const BodyText = styled.p`
  color: #a9a9b0;
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
  border: 1px solid #3a3835;
  color: #f4f1eb;
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: border-color 0.25s ease, background 0.25s ease;

  &:hover {
    border-color: #c6a77b;
    background: rgba(198, 167, 123, 0.05);
  }

  &:focus-visible {
    outline: 2px solid #c6a77b;
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
  color: #c6a77b;
  border: 1px solid #454147;
  font-size: 1.1rem;
`;

const EmailContent = styled.div`
  min-width: 0;
  flex: 1;

  small {
    display: block;
    color: #85858c;
    font-size: 0.7rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 0.45rem;
  }

  strong {
    font-size: 0.9rem;
    font-weight: 400;
  }
`;

const Arrow = styled(FaArrowRight)`
  color: #c6a77b;
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
  color: #85858c;
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
  border: 1px solid #3a3835;
  color: #ded8cf;
  text-decoration: none;
  font-size: 0.85rem;
  transition: border-color 0.25s ease, color 0.25s ease;

  svg {
    color: #c6a77b;
    font-size: 1.05rem;
  }

  &:hover {
    border-color: #c6a77b;
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid #c6a77b;
    outline-offset: 4px;
  }
`;

const ProfileCard = styled(motion.aside)`
  padding: clamp(1.5rem, 4vw, 2.5rem);
  background:
    radial-gradient(
      ellipse at top right,
      rgba(198, 167, 123, 0.1),
      transparent 60%
    ),
    #17171b;
  border: 1px solid #343439;
`;

const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin-bottom: 2rem;
  color: #c6a77b;
  border: 1px solid #514738;
  font-size: 1.4rem;
`;

const ProfileTitle = styled.h3`
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0 0 1rem;
`;

const ProfileDescription = styled.p`
  color: #aaaab1;
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
  border: 1px solid #414147;
  color: #ded8cf;
  font-size: 0.75rem;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 6rem;
  padding-top: 1.5rem;
  border-top: 1px solid #343439;

  p {
    color: #85858c;
    font-size: 0.78rem;
    line-height: 1.8;
    margin: 0;
  }

  span {
    color: #c6a77b;
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
            through practical experience.

            I'd love to connect with teams looking for a curious,
            creative, and motivated junior candidate.
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
              A technical direction.
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
