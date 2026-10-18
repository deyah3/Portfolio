
import React from "react";
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaHome,
  FaArrowRight,
  FaExternalLinkAlt,
  FaBookOpen,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/* ---------- PAGE ---------- */

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
  color: #c6c09a;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.25s ease;

  &:hover {
    color: #f4f1eb;
  }

  &:focus-visible {
    outline: 2px solid #a6a078;
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
  position: relative;
  max-width: 1000px;
  margin-bottom: 5rem;
  padding: clamp(1rem, 3vw, 2rem) 0;

  &::before {
    content: "";
    position: absolute;
    width: 240px;
    height: 240px;
    right: 3%;
    top: -10%;
    border: 1px solid rgba(166, 160, 120, 0.17);
    border-radius: 50%;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    width: 170px;
    height: 170px;
    right: calc(3% + 35px);
    top: calc(-10% + 35px);
    border: 1px solid rgba(198, 167, 123, 0.12);
    border-radius: 50%;
    pointer-events: none;
  }

  @media (max-width: 700px) {
    &::before,
    &::after {
      right: 0;
      opacity: 0.5;
    }
  }
`;

const Eyebrow = styled.p`
  color: #a6a078;
  font-size: 0.72rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 0 0 1.5rem;
`;

const Heading = styled(motion.h1)`
  position: relative;
  z-index: 1;
  font-family: Georgia, "Times New Roman", serif;
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
  position: relative;
  z-index: 1;
  max-width: 680px;
  color: #b8b8bd;
  font-size: 1.05rem;
  line-height: 1.9;
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(
    to right,
    #a6a078,
    #393933 40%,
    transparent
  );
  margin: 3rem 0 4rem;
`;

/* ---------- SECTION HEADINGS ---------- */

const SectionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
  margin-bottom: 2rem;

  h2 {
    font-family: Georgia, "Times New Roman", serif;
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

const SectionNote = styled.p`
  max-width: 620px;
  margin: -0.5rem 0 2.5rem;
  color: #99999f;
  font-size: 0.93rem;
  line-height: 1.8;
`;

/* ---------- BOOK DESIGN GALLERY ---------- */

const BooksSection = styled.section`
  margin-bottom: 6rem;
`;

const BookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 2.5vw, 2rem);

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const BookCard = styled(motion.article)`
  min-width: 0;
  cursor: default;
`;

const BookArtwork = styled.div`
  position: relative;
  aspect-ratio: 3 / 4.2;
  overflow: hidden;
  background: #1b1b19;
  border: 1px solid #38372f;
  padding: 0.75rem;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 60%,
      rgba(16, 17, 20, 0.18)
    );
    pointer-events: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  ${BookCard}:hover & img {
    transform: scale(1.035);
  }

  ${BookCard}:hover & {
    border-color: #a6a078;
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      transition: none;
    }
  }
`;

const BookCorner = styled.span`
  position: absolute;
  z-index: 1;
  top: 1.1rem;
  left: 1.1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem;
  height: 2.2rem;
  border: 1px solid rgba(198, 167, 123, 0.65);
  color: #d6c5a8;
  background: rgba(16, 17, 20, 0.72);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.8rem;
`;

const BookInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid #343439;
`;

const BookTitle = styled.h3`
  font-family: Georgia, "Times New Roman", serif;
  color: #f4f1eb;
  font-size: clamp(1.25rem, 2vw, 1.65rem);
  font-weight: 400;
  line-height: 1.3;
  margin: 0 0 0.55rem;
`;

const BookDescription = styled.p`
  color: #a8a8ae;
  font-size: 0.85rem;
  line-height: 1.7;
  margin: 0;
`;

const BookArrow = styled.span`
  flex-shrink: 0;
  padding-top: 0.2rem;
  color: #a6a078;
  transition: transform 0.3s ease;

  ${BookCard}:hover & {
    transform: translate(3px, -3px);
  }
`;

const BookLabel = styled.p`
  color: #a6a078;
  font-size: 0.68rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 0.65rem;
`;

/* ---------- EXISTING PROJECTS ---------- */

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
    border-color: #756c4d;
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
  color: #a6a078;
  font-size: 0.72rem;
  letter-spacing: 3px;
  margin: 0 0 1rem;
`;

const ProjectTitle = styled.h3`
  color: #f4f1eb;
  font-family: Georgia, "Times New Roman", serif;
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
  border: 1px solid #45443b;
  color: #c6c09a;
  font-size: 0.75rem;
`;

const MoreSection = styled(motion.section)`
  position: relative;
  margin-top: 6rem;
  padding: clamp(2rem, 6vw, 5rem);
  border: 1px solid #3a3835;
  background:
    radial-gradient(
      ellipse at top right,
      rgba(166, 160, 120, 0.12),
      transparent 55%
    ),
    #151518;
  overflow: hidden;

  &::after {
    content: "✳";
    position: absolute;
    right: 5%;
    bottom: -30%;
    color: rgba(166, 160, 120, 0.08);
    font-size: clamp(10rem, 25vw, 20rem);
    line-height: 1;
    pointer-events: none;
  }
`;

const MoreTitle = styled.h2`
  position: relative;
  z-index: 1;
  max-width: 750px;
  font-family: Georgia, "Times New Roman", serif;
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
  position: relative;
  z-index: 1;
  max-width: 680px;
  color: #b8b8bd;
  line-height: 1.9;
`;

const ContactLink = styled.a`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
  padding: 1rem 1.3rem;
  background: #c6c09a;
  color: #171714;
  text-decoration: none;
  font-size: 0.85rem;
  transition: background 0.25s ease, transform 0.25s ease;

  &:hover {
    background: #d9d2ac;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #f4f1eb;
    outline-offset: 4px;
  }
`;

/* ---------- BOOK DATA ---------- */

const books = [
  {
    image: "/book1.jpeg",
    number: "01",
    label: "Education",
    title: "Family Upbringing",
    description:
      "A book cover concept exploring family dynamics and education within family written by an educator.",
  },
  {
    image: "/book2.jpeg",
    number: "02",
    label: "Sci-fi",
    title: "The World Was Never Ours",
    description:
      "A different visual direction shaped by imagination and fantasy, telling the tale of 3 siblings, written by an aspiring young writer.",
  },
  {
    image: "/book3.jpg",
    number: "03",
    label: "Memoir",
    title: "Simple Days",
    description:
      "An independent cover design for a mini autobiography for a strong, female kurdish writer.",
  },
];

/* ---------- COMPONENT ---------- */

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
          <BackButton onClick={() => navigate("/")}>
            <FaHome aria-hidden="true" />
            Back to Home
          </BackButton>

          <Index>Selected work / Portfolio</Index>
        </TopBar>

        <Hero>
          <Eyebrow>Design / Development / Collaboration</Eyebrow>

          <Heading
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 25 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                })}
          >
            Work that brings
            <br />
            <span>ideas to life.</span>
          </Heading>

          <Description>
            A selection of creative and technical projects, from
            visual identities and editorial design to website
            development. Each project is an opportunity to explore
            ideas, solve problems, and bring thoughtful concepts
            into the world.
          </Description>
        </Hero>

        <Divider />

        {/* BOOK DESIGN SECTION */}

        <BooksSection id="book-design">
          <SectionHeading>
            <h2>Between the Covers</h2>
            <span>01 — 03 / BOOK DESIGN</span>
          </SectionHeading>

          <SectionNote>
            Three book-cover designs exploring visual storytelling,
            composition, and the relationship between imagery and
            typography. Each cover has its own character and mood.
          </SectionNote>

          <BookGrid>
            {books.map((book, index) => (
              <BookCard
                key={book.image}
                {...animation(index * 0.12)}
              >
                <BookArtwork>
                  <BookCorner>{book.number}</BookCorner>
                  <img
                    src={book.image}
                    alt={`${book.title} cover design`}
                    loading="lazy"
                  />
                </BookArtwork>

                <BookInfo>
                  <div>
                    <BookLabel>{book.label}</BookLabel>
                    <BookTitle>{book.title}</BookTitle>
                    <BookDescription>
                      {book.description}
                    </BookDescription>
                  </div>

                  <BookArrow aria-hidden="true">
                    <FaArrowRight />
                  </BookArrow>
                </BookInfo>
              </BookCard>
            ))}
          </BookGrid>
        </BooksSection>

        <Divider />

        {/* OTHER SELECTED PROJECTS */}

        <SectionHeading>
          <h2>Other Selected Projects</h2>
          <span>04 — 07</span>
        </SectionHeading>

        <ProjectList>
          <ProjectBox {...animation(0)}>
            <ProjectInfo>
              <ProjectNumber>04 / BRANDING</ProjectNumber>
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
              <ProjectNumber>05 / EDUCATION</ProjectNumber>
              <ProjectTitle>Course Trainer: Poster Design</ProjectTitle>
              <Duration>
                <strong>Duration:</strong> March 2025
              </Duration>
              <ProjectDescription>
                Designed an educational poster for a robotics
                course, balancing an engaging aesthetic with
                clear visual communication.
              </ProjectDescription>
              <Tags>
                <Tag>Poster Design</Tag>
                <Tag>Education</Tag>
              </Tags>
            </ProjectInfo>

            <ProjectImageArea>
              <ProjectImage
                src="/poster1.jpeg"
                alt="Educational robotics course poster"
                loading="lazy"
              />
            </ProjectImageArea>
          </ProjectBox>

          <ProjectBox {...animation(0.05)}>
            <ProjectInfo>
              <ProjectNumber>06 / CAPSTONE</ProjectNumber>
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
              <ProjectNumber>07 / INTERNSHIP</ProjectNumber>
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
                src="/website1.png"
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
            projects. I'm interested in creative challenges and
            collaborations that value thoughtful design and
            meaningful ideas.
          </MoreDescription>

          <ContactLink href="mailto:diya.hoshyar3@gmail.com">
            Let's work together
            <FaExternalLinkAlt aria-hidden="true" />
          </ContactLink>
        </MoreSection>
      </Container>
    </WorkSection>
  );
}
