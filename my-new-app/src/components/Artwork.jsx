
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaArrowUpRightFromSquare } from 'react-icons/fa';

const Section = styled.section`
  min-height: 100vh;
  background: #101114;
  color: #f4f1eb;
  padding: 2rem clamp(1.25rem, 5vw, 5rem) 6rem;
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

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  color: #d4c2a5;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.25s ease;

  &:hover {
    color: #fff;
  }
`;

const Index = styled.span`
  color: #77777d;
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Hero = styled.div`
  max-width: 900px;
  margin-bottom: 6rem;

  @media (max-width: 600px) {
    margin-bottom: 4rem;
  }
`;

const Eyebrow = styled.p`
  color: #c6a77b;
  font-size: 0.72rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const Title = styled(motion.h1)`
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 400;
  font-size: clamp(3rem, 8vw, 6.5rem);
  letter-spacing: -3px;
  line-height: 1.05;
  margin: 0 0 2rem;

  span {
    color: #c6a77b;
    font-style: italic;
  }

  @media (max-width: 600px) {
    letter-spacing: -1.5px;
  }
`;

const Intro = styled.p`
  max-width: 620px;
  color: #a8a8ae;
  font-size: 1.05rem;
  line-height: 1.9;
`;

const Divider = styled.div`
  height: 1px;
  background: #343439;
  margin: 3rem 0;
`;

const GallerySection = styled.section`
  margin-bottom: 6rem;
`;

const SectionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
  margin-bottom: 2rem;

  h2 {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 400;
    margin: 0;
  }

  p {
    color: #85858c;
    font-size: 0.8rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 500px) {
    align-items: start;
    flex-direction: column;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const ArtworkCard = styled(motion.article)`
  min-width: 0;

  &:hover .artwork-image {
    transform: scale(1.035);
  }

  &:hover .artwork-number {
    color: #c6a77b;
  }
`;

const ImageFrame = styled.div`
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: #1b1b20;
  margin-bottom: 1.25rem;
`;

const ArtworkImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
`;

const ArtworkTitle = styled.h3`
  color: #f4f1eb;
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 400;
  font-size: 1.4rem;
  margin: 0 0 0.5rem;
`;

const Description = styled.p`
  color: #99999f;
  font-size: 0.88rem;
  line-height: 1.7;
  margin: 0;
`;

const ArtworkNumber = styled.span`
  color: #77777d;
  font-size: 0.72rem;
  transition: color 0.25s ease;
`;

const MoreWork = styled(motion.section)`
  position: relative;
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

const MoreEyebrow = styled(Eyebrow)`
  margin-bottom: 1rem;
`;

const MoreTitle = styled.h2`
  max-width: 750px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2.4rem, 5vw, 4.5rem);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -1px;
  margin: 0 0 1.5rem;

  span {
    color: #c6a77b;
    font-style: italic;
  }
`;

const MoreDescription = styled.p`
  max-width: 680px;
  color: #aaaab0;
  line-height: 1.9;
  margin-bottom: 2rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
`;

const Tag = styled.span`
  border: 1px solid #454147;
  padding: 0.7rem 1rem;
  color: #ded8cf;
  font-size: 0.8rem;
`;

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #171614;
  background: #c6a77b;
  text-decoration: none;
  padding: 1rem 1.3rem;
  font-size: 0.85rem;
  transition: background 0.25s ease, transform 0.25s ease;

  &:hover {
    background: #e0c8a4;
    transform: translateY(-2px);
  }
`;

const artworks = [
  {
    image: '/digital-art1.jpg',
    alt: 'Digital giraffe artwork created in Krita',
    title: 'The Giraffe',
    description: 'Digital illustration created in Krita.',
    number: '01',
  },
  {
    image: '/digital-art2.jpg',
    alt: 'Digital evil rabbit artwork created in Krita',
    title: 'The Evil Rabbit',
    description: 'A character-focused digital illustration.',
    number: '02',
  },
  {
    image: '/digital-art3.jpg',
    alt: 'Digital hungry monkey artwork created in Krita',
    title: 'The Hungry Monkey',
    description: 'Digital character art created in Krita.',
    number: '03',
  },
  {
    image: '/painting1.jpg',
    alt: 'Acrylic painting of a plague doctor',
    title: 'The Plague Doctor',
    description: 'Acrylic painting exploring a darker subject.',
    number: '04',
  },
  {
    image: '/painting2.jpg',
    alt: 'Acrylic painting inspired by a spring breeze in Kurdistan',
    title: 'Spring in Kurdistan',
    description: 'An acrylic painting inspired by the landscapes of Kurdistan.',
    number: '05',
  },
  {
    image: '/painting3.jpg',
    alt: 'Acrylic painting of a jester',
    title: 'The Jester',
    description: 'An acrylic painting with a theatrical character.',
    number: '06',
  },
];

function Gallery({ title, subtitle, items, delay = 0 }) {
  return (
    <GallerySection>
      <SectionHeading>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </SectionHeading>

      <Grid>
        {items.map((artwork, index) => (
          <ArtworkCard
            key={artwork.image}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.55,
              delay: Math.min(index * 0.1, 0.3) + delay,
            }}
          >
            <ImageFrame>
              <ArtworkImage
                className="artwork-image"
                src={artwork.image}
                alt={artwork.alt}
                loading="lazy"
              />
            </ImageFrame>

            <CardMeta>
              <div>
                <ArtworkTitle>{artwork.title}</ArtworkTitle>
                <Description>{artwork.description}</Description>
              </div>

              <ArtworkNumber className="artwork-number">
                {artwork.number}
              </ArtworkNumber>
            </CardMeta>
          </ArtworkCard>
        ))}
      </Grid>
    </GallerySection>
  );
}

export default function Artwork() {
  const digitalArt = artworks.slice(0, 3);
  const paintings = artworks.slice(3);

  return (
    <Section id="artwork">
      <Container>
        <TopBar>
          <BackButton to="/">
            <FaHome />
            Back to Home
          </BackButton>

          <Index>Selected works / 2026</Index>
        </TopBar>

        <Hero>
          <Eyebrow>Art / Illustration / Experimentation</Eyebrow>

          <Title
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            A collection of
            <br />
            <span>creative explorations.</span>
          </Title>

          <Intro>
            A selection of digital illustrations and traditional
            paintings, bringing together experimentation, visual
            storytelling, and a love for creating things by hand.
          </Intro>
        </Hero>

        <Divider />

        <Gallery
          title="Digital Art"
          subtitle="01 — DIGITAL ILLUSTRATION"
          items={digitalArt}
        />

        <Gallery
          title="Paintings"
          subtitle="02 — TRADITIONAL MEDIA"
          items={paintings}
          delay={0.1}
        />

        <MoreWork
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <MoreEyebrow>Always creating</MoreEyebrow>

          <MoreTitle>
            The portfolio keeps <span>growing.</span>
          </MoreTitle>

          <MoreDescription>
            Since creating these pieces, I've continued exploring
            new ideas and expanding my work into book covers,
            product design, and other creative projects. This
            portfolio is an ongoing collection, with more work
            being developed and added over time.

            I'm also open to freelance opportunities and
            collaborations. If you have a project in mind,
            I'd love to hear about it.
          </MoreDescription>

          <Tags>
            <Tag>Book Covers</Tag>
            <Tag>Product Design</Tag>
            <Tag>Digital Illustration</Tag>
            <Tag>Freelance Projects</Tag>
          </Tags>

          <ContactLink href="mailto:YOUR_EMAIL@example.com">
            Let's work together
            <FaArrowUpRightFromSquare />
          </ContactLink>
        </MoreWork>
      </Container>
    </Section>
  );
}
