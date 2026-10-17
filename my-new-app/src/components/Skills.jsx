
import React from "react";
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaPalette,
  FaPenNib,
  FaShapes,
  FaCode,
  FaLeaf,
  FaArrowRight,
} from "react-icons/fa";

/* ---------- SECTION ---------- */

const SkillsSection = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: clamp(5rem, 9vw, 8rem) clamp(1.25rem, 6vw, 6rem);
  color: #f5f1e6;

  background:
    radial-gradient(
      ellipse at 88% 18%,
      rgba(218, 215, 178, 0.2),
      transparent 32%
    ),
    radial-gradient(
      ellipse at 4% 90%,
      rgba(44, 56, 36, 0.28),
      transparent 38%
    ),
    linear-gradient(135deg, #788263 0%, #687453 52%, #85876a 100%);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    opacity: 0.16;
    background-image: radial-gradient(
      rgba(246, 241, 222, 0.65) 0.7px,
      transparent 0.7px
    );
    background-size: 8px 8px;
    mask-image: linear-gradient(
      90deg,
      black,
      transparent 55%,
      black
    );
  }
`;

const DecorativeCircle = styled.div`
  position: absolute;
  z-index: -1;
  width: 420px;
  height: 420px;
  right: -125px;
  top: -165px;
  border: 1px solid rgba(246, 241, 222, 0.24);
  border-radius: 50%;
  pointer-events: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 22px;
    border: 1px solid rgba(246, 241, 222, 0.18);
    border-radius: 50%;
  }

  &::after {
    inset: 52px;
  }

  @media (max-width: 600px) {
    width: 270px;
    height: 270px;
    right: -130px;
    top: -90px;
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 1250px;
  margin: 0 auto;
`;

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.2rem;
  margin-bottom: clamp(3rem, 6vw, 5rem);
  border-bottom: 1px solid rgba(246, 241, 222, 0.32);

  @media (max-width: 500px) {
    align-items: flex-start;
  }
`;

const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0;
  color: #f0e8cf;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;

  svg {
    font-size: 0.85rem;
  }
`;

const Edition = styled.span`
  color: rgba(250, 246, 231, 0.72);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.85rem;
  font-style: italic;
`;

const HeadingLayout = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(2rem, 7vw, 7rem);
  align-items: end;
  margin-bottom: 4rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
`;

const HeadingGroup = styled.div`
  position: relative;
`;

const SmallLabel = styled.p`
  margin: 0 0 1.1rem;
  color: #e2d9b8;
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const SkillTitle = styled(motion.h2)`
  margin: 0;
  color: #f7f2e5;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(3.5rem, 7.5vw, 7rem);
  font-weight: 400;
  letter-spacing: -3px;
  line-height: 0.96;

  span {
    display: block;
    color: #e2d6ad;
    font-style: italic;
    font-weight: 400;
    padding-top: 0.12em;
  }

  @media (max-width: 600px) {
    font-size: clamp(3.2rem, 13vw, 5rem);
    letter-spacing: -1.5px;
  }
`;

const Description = styled.p`
  max-width: 430px;
  margin: 0 0 0.35rem;
  color: rgba(250, 247, 234, 0.88);
  font-size: 1rem;
  line-height: 1.95;

  strong {
    color: #fff7df;
    font-weight: 600;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 0 1.25rem;

  &::before {
    content: "";
    width: 42px;
    height: 2px;
    background: #e1d4a9;
  }

  span {
    color: #eee5ca;
    font-size: 0.67rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

/* ---------- SKILL CARDS ---------- */

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    gap: 0.7rem;
  }
`;

const SkillCard = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 180px;
  padding: 1.4rem;
  overflow: hidden;

  color: #343b2b;
  background: rgba(236, 231, 210, 0.94);
  border: 1px solid rgba(246, 241, 222, 0.48);
  border-radius: 2px;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    width: 95px;
    height: 95px;
    right: -36px;
    bottom: -42px;
    border: 1px solid rgba(80, 91, 61, 0.19);
    border-radius: 50%;
    transition: transform 0.4s ease;
    pointer-events: none;
  }

  &:hover {
    background: #39432f;
    color: #f5f0df;
    border-color: #d9d0ad;
    transform: translateY(-5px);
  }

  &:hover::after {
    transform: scale(1.5);
  }

  &:hover .skill-icon {
    color: #e0d4a9;
    transform: rotate(-8deg);
  }

  @media (max-width: 480px) {
    min-height: 155px;
    padding: 1rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }

    &::after {
      transition: none;
    }
  }
`;

const SkillTop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.8rem;
`;

const SkillIcon = styled.span`
  display: grid;
  place-items: center;
  width: 2.6rem;
  height: 2.6rem;
  border: 1px solid rgba(72, 81, 55, 0.28);
  border-radius: 50%;
  color: #5a6847;
  font-size: 1rem;
  transition:
    color 0.3s ease,
    transform 0.3s ease;

  svg {
    display: block;
  }
`;

const SkillNumber = styled.span`
  color: #737b61;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.85rem;
  font-style: italic;
`;

const SkillName = styled.h3`
  position: relative;
  z-index: 1;
  margin: 0 0 0.5rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.15rem, 1.8vw, 1.55rem);
  font-weight: 400;
  line-height: 1.25;
  overflow-wrap: anywhere;
`;

const SkillType = styled.p`
  position: relative;
  z-index: 1;
  margin: 0;
  color: #747860;
  font-size: 0.65rem;
  letter-spacing: 1.4px;
  text-transform: uppercase;

  ${SkillCard}:hover & {
    color: #d9d9bd;
  }
`;

/* ---------- BOTTOM NOTE ---------- */

const BottomNote = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 3.5rem;
  padding-top: 1.3rem;
  border-top: 1px solid rgba(246, 241, 222, 0.3);

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const NoteText = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0;
  color: #f0e8cf;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.95rem;
  font-style: italic;

  svg {
    flex-shrink: 0;
  }
`;

const ExploreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  color: #f7f0d9;
  font-size: 0.72rem;
  letter-spacing: 1.5px;
  text-decoration: none;
  text-transform: uppercase;

  svg {
    transition: transform 0.25s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }

  &:focus-visible {
    outline: 2px solid #f7f0d9;
    outline-offset: 5px;
  }
`;

/* ---------- SKILL DATA ---------- */

const skills = [
  {
    name: "Painting",
    type: "Traditional art",
    Icon: FaPalette,
  },
  {
    name: "Krita",
    type: "Digital illustration",
    Icon: FaPalette,
  },
  {
    name: "Figma",
    type: "Interface design",
    Icon: FaShapes,
  },
  {
    name: "Branding",
    type: "Visual identity",
    Icon: FaPenNib,
  },
  {
    name: "UI / UX",
    type: "Digital experience",
    Icon: FaShapes,
  },
  {
    name: "React",
    type: "Frontend development",
    Icon: FaCode,
  },
  {
    name: "Styled Components",
    type: "Interface styling",
    Icon: FaCode,
  },
  {
    name: "Writing",
    type: "Words & storytelling",
    Icon: FaFeatherAlt,
  },
];

/* ---------- COMPONENT ---------- */

export default function Skills() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: {
            duration: 0.55,
            delay,
            ease: "easeOut",
          },
        };

  return (
    <SkillsSection id="skills">
      <DecorativeCircle aria-hidden="true" />

      <Container>
        <TopLine>
          <Eyebrow>
            <FaLeaf aria-hidden="true" />
            FIELD NOTES / CREATIVE PRACTICE
          </Eyebrow>

          <Edition>Vol. 01 — 2026</Edition>
        </TopLine>

        <HeadingLayout>
          <HeadingGroup>
            <SmallLabel>Things I make & explore</SmallLabel>

            <SkillTitle {...reveal()}>
              My creative
              <span>language.</span>
            </SkillTitle>
          </HeadingGroup>

          <div>
            <Divider>
              <span>A practice in progress</span>
            </Divider>

            <Description>
              A growing collection of skills shaped by
              <strong> curiosity, experimentation,</strong> and
              the desire to bring ideas to life — from tactile
              artwork and visual identities to digital
              experiences and words.
            </Description>
          </div>
        </HeadingLayout>

        <SkillGrid>
          {skills.map((skill, index) => {
            const Icon = skill.Icon;

            return (
              <SkillCard
                key={skill.name}
                {...reveal(index * 0.07)}
              >
                <SkillTop>
                  <SkillIcon className="skill-icon">
                    <Icon aria-hidden="true" />
                  </SkillIcon>

                  <SkillNumber>
                    {String(index + 1).padStart(2, "0")}
                  </SkillNumber>
                </SkillTop>

                <SkillName>{skill.name}</SkillName>
                <SkillType>{skill.type}</SkillType>
              </SkillCard>
            );
          })}
        </SkillGrid>

        <BottomNote>
          <NoteText>
            <FaLeaf aria-hidden="true" />
            Always learning. Always becoming.
          </NoteText>

          <ExploreLink href="#projects">
            Explore my work
            <FaArrowRight aria-hidden="true" />
          </ExploreLink>
        </BottomNote>
      </Container>
    </SkillsSection>
  );
}
