
import React from "react";
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";

const SkillsSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 5rem);
  color: #f7f3e8;
  background:
    radial-gradient(circle at 90% 10%, rgba(226, 219, 183, 0.2), transparent 28%),
    linear-gradient(135deg, #7b8565 0%, #687653 55%, #899078 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Decoration = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -180px;
  right: -150px;
  border: 1px solid rgba(248, 243, 222, 0.3);
  border-radius: 50%;
  pointer-events: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 25px;
    border: 1px solid rgba(248, 243, 222, 0.2);
    border-radius: 50%;
  }

  &::after {
    inset: 55px;
  }

  @media (max-width: 600px) {
    width: 250px;
    height: 250px;
    right: -130px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid rgba(248, 243, 222, 0.3);
`;

const Eyebrow = styled.p`
  margin: 0;
  color: #eee5c8;
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const Edition = styled.span`
  color: #eee5c8;
  font-family: Georgia, serif;
  font-size: 0.85rem;
  font-style: italic;
`;

const Intro = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: end;
  margin-bottom: 3.5rem;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Title = styled(motion.h2)`
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(3.5rem, 7vw, 6.5rem);
  line-height: 0.98;
  letter-spacing: -2px;
  font-weight: 400;

  span {
    display: block;
    margin-top: 0.12em;
    color: #e5d8ad;
    font-style: italic;
  }

  @media (max-width: 500px) {
    font-size: clamp(3rem, 12vw, 4.5rem);
    letter-spacing: -1px;
  }
`;

const IntroText = styled.p`
  max-width: 430px;
  margin: 0;
  color: #f1eedf;
  font-size: 0.98rem;
  line-height: 1.95;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
  color: #eee5c8;
  font-size: 0.68rem;
  letter-spacing: 2px;
  text-transform: uppercase;

  &::before {
    content: "";
    width: 35px;
    height: 1px;
    background: #e5d8ad;
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 450px) {
    gap: 0.65rem;
  }
`;

const SkillCard = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 165px;
  padding: 1.4rem;
  overflow: hidden;
  color: #37402d;
  background: #e5e0ca;
  border: 1px solid rgba(255, 251, 234, 0.6);
  border-radius: 2px;
  transition:
    background 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    width: 90px;
    height: 90px;
    right: -35px;
    bottom: -45px;
    border: 1px solid rgba(72, 83, 53, 0.25);
    border-radius: 50%;
    pointer-events: none;
  }

  &:hover {
    background: #3c4933;
    color: #f7f3e8;
    transform: translateY(-5px);
  }

  &:hover span {
    color: #e5d8ad;
  }

  @media (max-width: 450px) {
    min-height: 140px;
    padding: 1rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

const SkillNumber = styled.span`
  position: relative;
  z-index: 1;
  color: #788064;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.9rem;
  font-style: italic;
`;

const SkillName = styled.h3`
  position: relative;
  z-index: 1;
  margin: 1.5rem 0 0.45rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.1rem, 1.8vw, 1.5rem);
  font-weight: 400;
  line-height: 1.25;
  overflow-wrap: anywhere;
`;

const SkillType = styled.p`
  position: relative;
  z-index: 1;
  margin: 0;
  color: #737b60;
  font-size: 0.64rem;
  letter-spacing: 1px;
  text-transform: uppercase;

  ${SkillCard}:hover & {
    color: #d9d9bd;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(248, 243, 222, 0.3);

  @media (max-width: 550px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const FooterText = styled.p`
  margin: 0;
  color: #f0e8cf;
  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
  font-size: 0.95rem;
`;

const FooterLink = styled.a`
  color: #fff6dc;
  font-size: 0.72rem;
  letter-spacing: 1.5px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: #e5d8ad;
  }

  &:focus-visible {
    outline: 2px solid #fff6dc;
    outline-offset: 4px;
  }
`;

const skills = [
  { name: "Painting", type: "Traditional art" },
  { name: "Krita", type: "Digital illustration" },
  { name: "Figma", type: "Interface design" },
  { name: "Branding", type: "Visual identity" },
  { name: "UI / UX", type: "Digital experiences" },
  { name: "React", type: "Frontend development" },
  { name: "Styled Components", type: "Interface styling" },
  { name: "Writing", type: "Words and storytelling" },
];

export default function Skills() {
  const reduceMotion = useReducedMotion();

  const animation = (index = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.1 },
          transition: {
            duration: 0.45,
            delay: index * 0.06,
          },
        };

  return (
    <SkillsSection id="skills">
      <Decoration aria-hidden="true" />

      <Container>
        <Header>
          <Eyebrow>Creative practice / Field notes</Eyebrow>
          <Edition>Vol. 01 — 2026</Edition>
        </Header>

        <Intro>
          <div>
            <Label>Things I make and explore</Label>
            <Title {...animation()}>
              My creative
              <span>language.</span>
            </Title>
          </div>

          <IntroText>
            A growing collection of skills shaped by curiosity
            and experimentation, connecting traditional art,
            visual identity, digital experiences, and writing.
          </IntroText>
        </Intro>

        <Label>The current collection</Label>

        <SkillGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              {...animation(index)}
            >
              <SkillNumber>
                {String(index + 1).padStart(2, "0")}
              </SkillNumber>

              <div>
                <SkillName>{skill.name}</SkillName>
                <SkillType>{skill.type}</SkillType>
              </div>
            </SkillCard>
          ))}
        </SkillGrid>

        <Footer>
          <FooterText>
            Always learning. Always becoming.
          </FooterText>

          <FooterLink href="#projects">
            Explore my work →
          </FooterLink>
        </Footer>
      </Container>
    </SkillsSection>
  );
}
