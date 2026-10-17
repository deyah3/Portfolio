
import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaAsterisk,
  FaCode,
  FaFeatherAlt,
  FaPalette,
} from "react-icons/fa";

/* ---------- ANIMATIONS ---------- */

const drift = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
`;

const shimmer = keyframes`
  0%, 100% { opacity: 0.35; }
  50% { opacity: 0.8; }
`;

/* ---------- SECTION ---------- */

const AboutSection = styled.section`
  --ink: #191d17;
  --ink-soft: #232920;
  --khaki: #b6b397;
  --khaki-light: #d4d0b9;
  --sage: #98a58a;
  --sage-dark: #66745c;
  --paper: #f0eddf;
  --muted: #b9bcae;
  --line: rgba(212, 208, 185, 0.2);

  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: clamp(5rem, 10vw, 9rem) clamp(1.25rem, 6vw, 6rem);
  color: var(--paper);
  background:
    radial-gradient(
      ellipse at 88% 18%,
      rgba(152, 165, 138, 0.13),
      transparent 32%
    ),
    radial-gradient(
      ellipse at 8% 82%,
      rgba(182, 179, 151, 0.08),
      transparent 34%
    ),
    var(--ink);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    opacity: 0.13;
    background-image: radial-gradient(
      rgba(212, 208, 185, 0.5) 0.65px,
      transparent 0.65px
    );
    background-size: 7px 7px;
    mask-image: linear-gradient(
      110deg,
      transparent 15%,
      black 70%,
      transparent 100%
    );
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
`;

/* ---------- TOP LINE ---------- */

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.3rem;
  margin-bottom: clamp(3rem, 6vw, 5rem);
  border-bottom: 1px solid var(--line);

  .index,
  .caption {
    color: var(--khaki);
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.22em;
  }

  .caption {
    color: var(--muted);
    text-align: right;
  }
`;

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
  gap: clamp(3rem, 7vw, 7rem);
  align-items: center;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }
`;

/* ---------- TYPOGRAPHY ---------- */

const MainCopy = styled.div`
  position: relative;
`;

const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.8rem;
  color: var(--sage);

  span {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.22em;
  }

  &::before {
    content: "";
    width: 34px;
    height: 1px;
    background: var(--khaki);
  }
`;

const Heading = styled(motion.h2)`
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(3.4rem, 7.7vw, 7.3rem);
  font-weight: 400;
  line-height: 0.98;
  letter-spacing: -0.075em;

  .line {
    display: block;
  }

  .indented {
    padding-left: clamp(1.2rem, 5vw, 5rem);
  }

  .highlight {
    color: var(--khaki);
    font-style: italic;
    font-weight: 400;
  }

  .outline {
    color: transparent;
    -webkit-text-stroke: 1px var(--sage);
  }

  @media (max-width: 480px) {
    font-size: clamp(3rem, 15vw, 4.5rem);
  }
`;

const Description = styled.div`
  max-width: 660px;
  margin-top: 2.5rem;
  padding-left: clamp(0rem, 5vw, 5rem);

  p {
    margin: 0 0 1.15rem;
    color: var(--muted);
    font-size: 0.98rem;
    line-height: 1.95;
  }

  strong {
    color: var(--paper);
    font-weight: 500;
  }

  .signature {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-top: 2rem;
    color: var(--khaki-light);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.05rem;
    font-style: italic;
  }

  .signature svg {
    color: var(--sage);
    font-size: 0.8rem;
  }
`;

/* ---------- ARTISTIC VISUAL PANEL ---------- */

const VisualPanel = styled(motion.div)`
  position: relative;
  min-height: 420px;
  aspect-ratio: 0.82;
  padding: 1.1rem;
  border: 1px solid rgba(212, 208, 185, 0.34);
  background: var(--khaki);
  color: var(--ink);
  transform: rotate(2deg);

  @media (max-width: 850px) {
    width: min(100%, 480px);
    min-height: 380px;
    margin: 0 auto;
    aspect-ratio: 1;
  }

  @media (max-width: 480px) {
    min-height: 340px;
  }
`;

const Artwork = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 390px;
  overflow: hidden;
  padding: clamp(1.2rem, 3vw, 2rem);
  background:
    linear-gradient(
      145deg,
      rgba(240, 237, 223, 0.2),
      transparent 45%
    ),
    #a4ad94;

  @media (max-width: 850px) {
    min-height: 350px;
  }

  @media (max-width: 480px) {
    min-height: 310px;
  }
`;

const ArtworkTop = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .number {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 0.85rem;
    letter-spacing: 0.08em;
  }

  .asterisk {
    font-size: 1.5rem;
    animation: ${drift} 6s ease-in-out infinite;
  }
`;

const ArtComposition = styled.div`
  position: absolute;
  inset: 12% 5% 13%;
  display: grid;
  place-items: center;

  .outer-ring {
    position: absolute;
    width: 78%;
    aspect-ratio: 1;
    border: 1px solid rgba(25, 29, 23, 0.5);
    border-radius: 50%;
  }

  .middle-ring {
    position: absolute;
    width: 61%;
    aspect-ratio: 1;
    border: 1px solid rgba(25, 29, 23, 0.4);
    border-radius: 50%;
  }

  .inner-ring {
    position: absolute;
    width: 43%;
    aspect-ratio: 1;
    border: 1px dashed rgba(25, 29, 23, 0.6);
    border-radius: 50%;
    animation: ${shimmer} 5s ease-in-out infinite;
  }

  .disc {
    position: absolute;
    width: 35%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--ink);
    box-shadow: 12px 12px 0 rgba(240, 237, 223, 0.75);
  }

  .vertical {
    position: absolute;
    width: 1px;
    height: 100%;
    background: rgba(25, 29, 23, 0.35);
  }

  .horizontal {
    position: absolute;
    height: 1px;
    width: 100%;
    background: rgba(25, 29, 23, 0.35);
  }

  .diamond {
    position: absolute;
    width: 15%;
    aspect-ratio: 1;
    border: 1px solid var(--ink);
    transform: rotate(45deg) translate(95%, -95%);
  }

  .small-disc {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--paper);
    transform: translate(360%, -250%);
  }

  .arc {
    position: absolute;
    width: 65%;
    height: 32%;
    border: 1px solid var(--ink);
    border-bottom: 0;
    border-radius: 100% 100% 0 0;
    transform: translateY(85%) rotate(-28deg);
  }
`;

const ArtworkBottom = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(25, 29, 23, 0.35);

  .title {
    max-width: 190px;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.5rem, 3vw, 2.15rem);
    line-height: 1.02;
    letter-spacing: -0.05em;
  }

  .sub {
    max-width: 90px;
    font-size: 0.58rem;
    line-height: 1.7;
    text-align: right;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }
`;

const FloatingNote = styled.div`
  position: absolute;
  z-index: 3;
  right: -1.5rem;
  top: 20%;
  width: 92px;
  height: 92px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--ink);
  color: var(--khaki-light);
  text-align: center;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.8rem;
  line-height: 1.5;
  transform: rotate(8deg);

  @media (max-width: 480px) {
    right: -0.5rem;
    width: 76px;
    height: 76px;
    font-size: 0.7rem;
  }
`;

/* ---------- DETAILS ---------- */

const LowerGrid = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: clamp(3rem, 7vw, 7rem);
  margin-top: clamp(5rem, 10vw, 9rem);
  padding-top: 2rem;
  border-top: 1px solid var(--line);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const LowerIntro = styled.div`
  .small-title {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1.3rem;
    color: var(--khaki);
    font-size: 0.67rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }

  h3 {
    max-width: 360px;
    margin: 0;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(2rem, 4vw, 3.4rem);
    font-weight: 400;
    line-height: 1.12;
    letter-spacing: -0.05em;
  }

  h3 em {
    color: var(--sage);
    font-weight: 400;
  }

  p {
    max-width: 350px;
    margin-top: 1.3rem;
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.8;
  }
`;

const Details = styled.div`
  border-top: 1px solid var(--line);
`;

const Detail = styled(motion.div)`
  display: grid;
  grid-template-columns: minmax(105px, 0.7fr) 1.3fr;
  align-items: center;
  gap: 1rem;
  padding: 1.35rem 0;
  border-bottom: 1px solid var(--line);

  .label {
    color: var(--sage);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
  }

  .value {
    color: var(--paper);
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.05rem, 2vw, 1.4rem);
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    gap: 0.55rem;
  }
`;

const Quote = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: start;
  gap: clamp(1rem, 3vw, 2.5rem);
  margin-top: clamp(4rem, 8vw, 7rem);
  padding: clamp(1.5rem, 4vw, 3rem);
  border: 1px solid rgba(182, 179, 151, 0.35);
  background:
    linear-gradient(
      115deg,
      rgba(182, 179, 151, 0.1),
      rgba(152, 165, 138, 0.035)
    );

  .quote-mark {
    color: var(--khaki);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 4rem;
    line-height: 0.8;
  }

  p {
    margin: 0;
    color: var(--khaki-light);
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.4rem, 3vw, 2.3rem);
    font-style: italic;
    line-height: 1.5;
  }

  .end-mark {
    align-self: end;
    color: var(--sage);
    font-size: 1.2rem;
  }

  @media (max-width: 550px) {
    grid-template-columns: auto 1fr;

    .end-mark {
      display: none;
    }
  }
`;

const FooterLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  color: var(--muted);
  font-size: 0.63rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;

  .scroll {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    color: var(--khaki);
  }
`;

/* ---------- COMPONENT ---------- */

export default function AboutMe() {
  const details = [
    { label: "Currently", value: "Designer & Visual Maker" },
    { label: "Background", value: "Software Engineering" },
    { label: "Creative field", value: "Art, Illustration & Design" },
    { label: "Exploring", value: "Code, Ideas & New Mediums" },
  ];

  return (
    <AboutSection id="about">
      <Container>
        <TopLine>
          <span className="index">01 — About the artist</span>
          <span className="caption">Visual thinking / Digital craft</span>
        </TopLine>

        <IntroGrid>
          <MainCopy>
            <Eyebrow>
              <span>A little introduction</span>
            </Eyebrow>

            <Heading
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <span className="line">An artist’s</span>
              <span className="line indented">
                eye, <span className="highlight">always</span>
              </span>
              <span className="line">
                <span className="outline">observing.</span>
              </span>
            </Heading>

            <Description>
              <p>
                Hello! I’m a <strong>visual storyteller</strong> fascinated by
                the way images, materials, and ideas can communicate what words
                sometimes cannot.
              </p>

              <p>
                My practice moves between{" "}
                <strong>traditional art, digital illustration, and visual
                design</strong>. I enjoy experimenting with different
                techniques and discovering the visual language each project
                deserves.
              </p>

              <p>
                With a background in <strong>software engineering</strong>,
                I’m equally drawn to structure and spontaneity — the balance
                between thoughtful systems and creative freedom.
              </p>

              <div className="signature">
                <FaAsterisk />
                Making space for curiosity.
              </div>
            </Description>
          </MainCopy>

          <VisualPanel
            initial={{ opacity: 0, y: 25, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Artwork>
              <ArtworkTop>
                <span className="number">STUDY Nº 001</span>
                <FaAsterisk className="asterisk" />
              </ArtworkTop>

              <ArtComposition aria-hidden="true">
                <div className="outer-ring" />
                <div className="middle-ring" />
                <div className="inner-ring" />
                <div className="vertical" />
                <div className="horizontal" />
                <div className="disc" />
                <div className="diamond" />
                <div className="small-disc" />
                <div className="arc" />
              </ArtComposition>

              <ArtworkBottom>
                <div className="title">
                  Form
                  <br />
                  & feeling.
                </div>
                <div className="sub">
                  Art meets
                  <br />
                  intention
                  <br />
                  — 2026
                </div>
              </ArtworkBottom>
            </Artwork>

            <FloatingNote>
              Curiosity
              <br />
              over
              <br />
              convention
            </FloatingNote>
          </VisualPanel>
        </IntroGrid>

        <LowerGrid>
          <LowerIntro>
            <div className="small-title">
              <FaAsterisk />
              A few details
            </div>

            <h3>
              Different disciplines.
              <br />
              One <em>curious mind.</em>
            </h3>

            <p>
              I’m interested in the connections between visual expression,
              thoughtful design, and technology — and in always having
              something new to learn.
            </p>
          </LowerIntro>

          <Details>
            {details.map((detail, index) => (
              <Detail
                key={detail.label}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="label">{detail.label}</div>
                <div className="value">{detail.value}</div>
              </Detail>
            ))}
          </Details>
        </LowerGrid>

        <Quote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="quote-mark">“</span>
          <p>
            Creating with intention, learning with curiosity, and finding
            unexpected connections between design and technology.
          </p>
          <FaFeatherAlt className="end-mark" />
        </Quote>

        <FooterLine>
          <span>Thoughtfully made · Always evolving</span>
          <span className="scroll">
            Keep exploring <FaArrowDown />
          </span>
        </FooterLine>
      </Container>
    </AboutSection>
  );
}
