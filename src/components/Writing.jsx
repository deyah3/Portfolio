
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';
import { FaHome, FaPen, FaRegCircle, FaRegSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(12deg); }
`;

const WritingSection = styled.section`
  min-height: 100vh;
  padding: 2rem clamp(1.25rem, 5vw, 5rem) 6rem;
  background: #f5f1e9;
  color: #29252e;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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
  color: #655176;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  &:hover {
    color: #30213f;
  }

  &:focus-visible {
    outline: 2px solid #80639b;
    outline-offset: 5px;
  }
`;

const Index = styled.span`
  color: #8a818d;
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Hero = styled.div`
  max-width: 800px;
  margin-bottom: 4rem;
`;

const Eyebrow = styled.p`
  color: #826895;
  font-size: 0.72rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const Heading = styled(motion.h1)`
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(3rem, 8vw, 6.5rem);
  line-height: 1.05;
  font-weight: 400;
  letter-spacing: -2px;
  margin: 0 0 1.75rem;

  span {
    color: #826895;
    font-style: italic;
  }

  @media (max-width: 600px) {
    letter-spacing: -1px;
  }
`;

const Info = styled.p`
  max-width: 650px;
  color: #655f68;
  font-size: 1.05rem;
  line-height: 1.9;
`;

const Quote = styled.blockquote`
  max-width: 650px;
  margin: 2rem 0 0;
  padding: 1rem 0 1rem 1.5rem;
  border-left: 2px solid #b59ac8;
  color: #76677f;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.15rem;
  font-style: italic;
  line-height: 1.8;
`;

const Divider = styled.div`
  height: 1px;
  background: #ded6df;
  margin: 3rem 0;
`;

const CollectionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
  margin-bottom: 2rem;

  h2 {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    font-weight: 400;
    margin: 0;
  }

  span {
    color: #918797;
    font-size: 0.75rem;
    letter-spacing: 2px;
  }
`;

const PoemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const PoemCard = styled(motion.article)`
  min-width: 0;
  background: #fbf9f5;
  border: 1px solid #e7dfe8;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: #b9a2c8;
    transform: translateY(-3px);
  }

  &:last-child:nth-child(odd) {
    grid-column: 1 / -1;

    @media (max-width: 750px) {
      grid-column: auto;
    }
  }
`;

const PoemNumber = styled.p`
  color: #9a83aa;
  font-size: 0.7rem;
  letter-spacing: 3px;
  margin: 0 0 1rem;
`;

const PoemTitle = styled.h3`
  color: #44334f;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 400;
  margin: 0 0 1.5rem;
`;

const PoemText = styled.p`
  color: #57515b;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1rem;
  line-height: 2;
  white-space: pre-line;
  overflow-wrap: anywhere;
  margin: 0;
`;

const Closing = styled.div`
  margin-top: 5rem;
  padding: 2.5rem 1rem;
  text-align: center;
  border-top: 1px solid #ded6df;

  p {
    color: #776780;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 1.1rem;
    font-style: italic;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
  margin-top: 1.5rem;
  color: #826895;
  font-size: 1.2rem;

  svg:nth-child(2) {
    font-size: 0.8rem;
  }
`;

const SpiralArt = styled.div`
  position: absolute;
  color: #9b83ae;
  opacity: 0.13;
  pointer-events: none;
  user-select: none;
  font-size: 4rem;
  animation: ${float} 12s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const poems = [
  {
    title: 'Hunger',
    text: `A poisonous fruit, I took a bite I liked it, I asked for more
There were no more to feed my hunger
No way of getting rid of my appetite
Soft it was, smoother than the surface
The table that I shared a meal on
I could sense the need for company
It took all of me, I lost my urge to eat
No more of it, I no longer needed it
I could live off of crumbs and bites
Got to a point I couldn't feel a thing
It was alright for a while, I even liked it
Time passed, days gone, nights came
The longer they got, the emptier I felt
The point of no return, I saw the issue
I needed to feel it again, the hunger strike
I went to the kitchen, looked around
Seemed like a foreign place, felt lost
Eventually found what I was looking for
It was right there for me, almost as if—
Almost as if it was waiting for me to take it
It was the case, or at least I believe it to be
I took it all in and at the last second, I saw—
I saw nothing but darkness. It worked.`,
  },
  {
    title: 'Reached Light',
    text: `There's a bright light that keeps appearing,
Its source unknown, its effect dreary.
It grows so strong one might go blind;
The more it shines, the harder to define.
Resonating in my head, waves create
Harmony, transcending into a myriad state.
It shapes and shifts, ceaselessly evolving,
Guiding seekers on paths revolving.
I grasp the light, embracing its sound,
Creating, forging, my purpose found.
Relief floods in, a long-lost friend,
I seize the source, reluctant to end.
Gripping tightly, nearly breaking,
Not fragile, just my hands quaking.
Fear and nausea draw near;
I step back, releasing fear.
Yet it returns, relentless and strong,
A magnet, pulling me along.
With understanding, hope ignites,
The light shines on, guiding my sights.
Better things are coming, I sense the dawn;
With open arms, I welcome them on.`,
  },
  {
    title: 'Insect',
    text: `There used to be in insect buzzing and panting in my room. I was looking for it in every corner, every part, I just couldn't trace it. It got to a point that I would get furious and think that it may be a fraction of my mind that makes such weird noises.
There was disturbance, and tremendously intense noise that will not stop. It kept on going for a long time, eventually I got used to it and even got to the point that whenever I was back to the room, l'd be patiently waiting for the sound and then say "hey buddy, I'm home", I got so used to it that the sound was a way to alert me and keep in touch with my surrounding. It's been a year now and there is no more sound, the buzz, the shrink, the pant is no longer there, and I am still waiting for it to come back again, not because it sounded nice or anything, just merely because it had a presence in my room and kept my company.`,
  },
];

export default function Writing() {
  const reduceMotion = useReducedMotion();

  return (
    <WritingSection id="writing">
      <SpiralArt style={{ top: '16%', right: '5%' }}>✳</SpiralArt>
      <SpiralArt style={{ top: '55%', left: '2%' }}>✳</SpiralArt>
      <SpiralArt style={{ bottom: '8%', right: '8%' }}>✳</SpiralArt>

      <Container>
        <TopBar>
          <BackButton to="/">
            <FaHome aria-hidden="true" />
            Back to Home
          </BackButton>
          <Index>Words / Personal collection</Index>
        </TopBar>

        <Hero>
          <Eyebrow>Poetry / Reflection / Prose</Eyebrow>

          <Heading
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            A place for
            <br />
            <span>unspoken things.</span>
          </Heading>

          <Info>
            A collection of poems and personal writing exploring
            emotions, changing perspectives, quiet observations,
            and the things that are sometimes difficult to put into words.
          </Info>

          <Quote>
            "To write is to exist." — Me on a random Tuesday
          </Quote>
        </Hero>

        <Divider />

        <CollectionHeading>
          <h2>The Writing Collection</h2>
          <span>03 PIECES</span>
        </CollectionHeading>

        <PoemGrid>
          {poems.map((poem, index) => (
            <PoemCard
              key={poem.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : index * 0.1,
              }}
            >
              <PoemNumber>
                {String(index + 1).padStart(2, '0')} / POEM
              </PoemNumber>
              <PoemTitle>{poem.title}</PoemTitle>
              <PoemText>{poem.text}</PoemText>
            </PoemCard>
          ))}
        </PoemGrid>

        <Closing>
          <p>Some thoughts find their way onto a page.</p>
          <IconContainer aria-hidden="true">
            <FaPen />
            <FaRegCircle />
            <FaRegSquare />
          </IconContainer>
        </Closing>
      </Container>
    </WritingSection>
  );
}
