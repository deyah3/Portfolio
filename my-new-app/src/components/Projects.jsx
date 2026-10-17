
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import {
  FaExternalLinkAlt,
  FaFeatherAlt,
  FaPalette,
  FaShapes,
} from "react-icons/fa";

/* ---------- COLOR PALETTE ---------- */

const C = {
  background: "#20271f",
  backgroundDeep: "#191f19",
  surface: "#293126",
  surfaceHover: "#313a2d",
  khaki: "#b6c0a8",
  khakiLight: "#d1d8c6",
  sage: "#98a68b",
  sageDark: "#69765e",
  text: "#eeeee4",
  muted: "#b9c0b1",
  line: "rgba(190, 201, 175, 0.2)",
};

/* ---------- SECTION ---------- */

const Section = styled.section`
  position: relative;
  isolation: isolate;
  padding: clamp(5rem, 10vw, 9rem) clamp(1.25rem, 5vw, 5rem);
  overflow: hidden;
  color: ${C.text};
  background:
    radial-gradient(
      ellipse at 8% 10%,
      rgba(105, 118, 94, 0.18),
      transparent 38%
    ),
    radial-gradient(
      ellipse at 95% 90%,
      rgba(152, 166, 139, 0.08),
      transparent 35%
    ),
    ${C.background};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    opacity: 0.12;
    background-image: radial-gradient(
      rgba(209, 216, 198, 0.5) 0.6px,
      transparent 0.6px
    );
    background-size: 7px 7px;
    mask-image: linear-gradient(
      130deg,
      transparent,
      black 50%,
      transparent
    );
  }
`;

const Ornament = styled.div`
  position: absolute;
  z-index: -1;
  width: 360px;
  height: 360px;
  border: 1px solid rgba(182, 192, 168, 0.18);
  border-radius: 50%;
  pointer-events: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 22px;
    border: 1px solid rgba(152, 166, 139, 0.14);
    border-radius: 50%;
  }

  &::after {
    inset: 48px;
  }

  &.top {
    top: -190px;
    right: -100px;
  }

  &.bottom {
    bottom: -230px;
    left: -180px;
    width: 430px;
    height: 430px;
  }

  @media (max-width: 600px) {
    width: 240px;
    height: 240px;

    &.top {
      right: -150px;
    }
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 1250px;
  margin: 0 auto;
`;

/* ---------- INTRODUCTION ---------- */

const Intro = styled.div`
  max-width: 850px;
  margin: 0 auto 4.5rem;
  text-align: center;
`;

const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: ${C.sage};
  font-size: 0.7rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 0 0 1.5rem;

  &::before,
  &::after {
    content: "";
    width: 28px;
    height: 1px;
    background: ${C.sageDark};
  }
`;

const Title = styled(motion.h2)`
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 400;
  letter-spacing: -2px;
  line-height: 1.08;
  margin: 0 0 1.5rem;
  color: ${C.text};

  span {
    color: ${C.khaki};
    font-style: italic;
  }

  @media (max-width: 600px) {
    letter-spacing: -1px;
  }
`;

const IntroText = styled.p`
  max-width: 600px;
  margin: 0 auto;
  color: ${C.muted};
  font-size: 1rem;
  line-height: 1.9;
`;

const DecorativeLine = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 0 3rem;

  &::before,
  &::after {
    content: "";
    height: 1px;
    flex: 1;
    background: linear-gradient(
      to right,
      transparent,
      ${C.line}
    );
  }

  &::after {
    background: linear-gradient(
      to left,
      transparent,
      ${C.line}
    );
  }

  span {
    color: ${C.khaki};
    font-size: 0.7rem;
    letter-spacing: 3px;
    white-space: nowrap;
  }
`;

/* ---------- PROJECT GRID ---------- */

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 2.5vw, 2rem);
  align-items: stretch;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Card = styled(motion.article)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 0.8rem;
  background: linear-gradient(
    145deg,
    ${C.surface},
    ${C.backgroundDeep}
  );
  border: 1px solid ${C.line};
  transition:
    border-color 0.35s ease,
    background 0.35s ease,
    box-shadow 0.35s ease,
    transform 0.35s ease;

  &:hover {
    border-color: ${C.sageDark};
    background: linear-gradient(
      145deg,
      ${C.surfaceHover},
      ${C.surface}
    );
    box-shadow: 0 18px 45px rgba(8, 12, 8, 0.2);
    transform: translateY(-6px);
  }

  &:focus-within {
    border-color: ${C.khaki};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

const ImageFrame = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: ${C.backgroundDeep};
  border: 1px solid rgba(182, 192, 168, 0.15);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      transparent 55%,
      rgba(25, 31, 25, 0.45)
    );
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.65s cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  ${Card}:hover & img {
    transform: scale(1.045);
  }
`;

const ImageNumber = styled.span`
  position: absolute;
  z-index: 1;
  top: 0.85rem;
  left: 0.85rem;
  display: grid;
  place-items: center;
  width: 2.2rem;
  height: 2.2rem;
  color: ${C.khakiLight};
  background: rgba(32, 39, 31, 0.9);
  border: 1px solid rgba(182, 192, 168, 0.55);
  border-radius: 50%;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.78rem;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem 0.8rem 0.8rem;
`;

const Category = styled.p`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${C.sage};
  font-size: 0.67rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 0.9rem;

  svg {
    font-size: 0.85rem;
    flex-shrink: 0;
  }
`;

const CardTitle = styled.h3`
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 400;
  font-size: clamp(1.65rem, 2.4vw, 2.15rem);
  line-height: 1.2;
  letter-spacing: -0.5px;
  color: ${C.text};
  margin: 0 0 0.8rem;
`;

const Description = styled.p`
  color: ${C.muted};
  font-size: 0.9rem;
  line-height: 1.85;
  margin: 0 0 1.5rem;
  flex: 1;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${C.line};

  @media (max-width: 400px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const CardIndex = styled.span`
  color: #929b89;
  font-size: 0.7rem;
  letter-spacing: 1px;
`;

const ProjectLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: ${C.khakiLight};
  font-size: 0.82rem;
  text-decoration: none;
  transition: color 0.25s ease;
  white-space: nowrap;

  svg {
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${C.sage};
  }

  &:hover svg {
    transform: translate(3px, -3px);
  }

  &:focus-visible {
    outline: 2px solid ${C.khaki};
    outline-offset: 5px;
  }
`;

/* ---------- FOOTER DETAIL ---------- */

const FooterNote = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 4rem;
  color: ${C.muted};
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.95rem;
  font-style: italic;
  text-align: center;

  svg {
    color: ${C.sage};
    font-size: 0.8rem;
    flex-shrink: 0;
  }

  @media (max-width: 500px) {
    line-height: 1.8;
    gap: 0.65rem;
  }
`;

/* ---------- PROJECT DATA ---------- */

const projects = [
  {
    number: "01",
    image: "/artwork-image.jpg",
    alt: "A selection of digital and traditional artwork",
    category: "Art & Illustration",
    title: "Visual Explorations",
    description:
      "Digital illustrations and traditional paintings exploring character, atmosphere, and visual storytelling.",
    link: "/artwork",
    linkText: "Explore artwork",
    Icon: FaPalette,
  },
  {
    number: "02",
    image: "/writing-image.jpg",
    alt: "Creative writing and literary work",
    category: "Words & Ideas",
    title: "Written Worlds",
    description:
      "Poetry, reflective writing, and narrative pieces shaped by observation, emotion, and curiosity.",
    link: "/writing",
    linkText: "Read my writing",
    Icon: FaFeatherAlt,
  },
  {
    number: "03",
    image: "/work-image.jpg",
    alt: "Selected design and development projects",
    category: "Design & Development",
    title: "Selected Projects",
    description:
      "A collection of branding, book design, visual communication, and technical projects bringing ideas to life.",
    link: "/work",
    linkText: "View projects",
    Icon: FaShapes,
  },
];

/* ---------- COMPONENT ---------- */

export default function Projects() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.65, delay },
        };

  return (
    <Section id="projects">
      <Ornament className="top" aria-hidden="true" />
      <Ornament className="bottom" aria-hidden="true" />

      <Container>
        <Intro>
          <Eyebrow>Selected Collections · 2026</Eyebrow>

          <Title {...reveal()}>
            A little world of
            <br />
            <span>ideas and expression.</span>
          </Title>

          <IntroText>
            A collection of things I create, explore, and
            continue to learn from — where visual design,
            writing, and technology meet.
          </IntroText>
        </Intro>

        <DecorativeLine>
          <span>THE COLLECTION</span>
        </DecorativeLine>

        <Grid>
          {projects.map((project, index) => {
            const Icon = project.Icon;

            return (
              <Card
                key={project.number}
                {...reveal(index * 0.14)}
              >
                <ImageFrame>
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                  />
                  <ImageNumber>{project.number}</ImageNumber>
                </ImageFrame>

                <CardContent>
                  <Category>
                    <Icon aria-hidden="true" />
                    {project.category}
                  </Category>

                  <CardTitle>{project.title}</CardTitle>

                  <Description>{project.description}</Description>

                  <CardFooter>
                    <CardIndex>
                      COLLECTION / {project.number}
                    </CardIndex>

                    <ProjectLink to={project.link}>
                      {project.linkText}
                      <FaExternalLinkAlt aria-hidden="true" />
                    </ProjectLink>
                  </CardFooter>
                </CardContent>
              </Card>
            );
          })}
        </Grid>

        <FooterNote {...reveal(0.2)}>
          <FaShapes aria-hidden="true" />
          <span>Made with curiosity, patience, and intention.</span>
          <FaShapes aria-hidden="true" />
        </FooterNote>
      </Container>
    </Section>
  );
}
