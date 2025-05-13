import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaPen, FaRegSquare, FaRegCircle } from "react-icons/fa";
import { FaHome } from 'react-icons/fa'; // Importing home icon
const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(180deg); }
  100% { transform: translateY(0) rotate(360deg); }
`;

const WritingSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #f9f6f0, #ece9e1);
  color: #2c2f36;
  position: relative;
  min-height: 100vh;
  text-align: center;
  box-shadow: 
    0 0 10px 5px rgba(86, 72, 255, 0.7), 
    0 0 20px 5px rgba(86, 72, 255, 0.5), 
    0 0 30px 5px rgba(86, 72, 0.4), 
    inset 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

const Heading = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  font-family: 'Merriweather', serif;
  background: linear-gradient(to right, #6a4c93, #ab7eb3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

const Info = styled.p`
  font-size: 1.2rem;
  color: #444;
  margin-top: 1rem;
  font-style: italic;
  font-family: 'Merriweather', serif;
`;

const Quote = styled.p`
  margin-top: 2rem;
  font-size: 1.1rem;
  color: #666;
  font-family: 'Georgia', serif;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-top: 3rem;
  font-family: 'Merriweather', serif;
  color: #4e3b62;
  text-decoration: underline;
`;

const PoemSection = styled.div`
  margin: 3rem 0;
  padding: 2rem;
  background-color: #faf9f5;
  border-left: 5px solid #6a4c93;
  font-family: 'Georgia', serif;
  font-size: 1.2rem;
  color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: left;
  margin-bottom: 2rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  background: linear-gradient(to right, rgb(161, 127, 210), #8e9eab); /* Gradient background */
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s ease;

  &:hover {
    background: linear-gradient(to right, rgb(156, 159, 162), rgb(172, 172, 181));
    transform: scale(1.05);
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const IconContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 2.5rem;
  color: #6a4c93;
`;

const SpiralArt = styled.div`
  position: absolute;
  font-size: 3rem;
  opacity: 0.15;
  pointer-events: none;
  user-select: none;
  animation: ${float} 12s ease-in-out infinite;
`;

export default function Writing() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <WritingSection>
      {/* Back Button */}
      <BackButton onClick={goBack}> <FaHome /> Back to Home</BackButton>

      {/* Decorative Spirals */}
      <SpiralArt style={{ top: '10%', left: '5%' }}>🌀</SpiralArt>
      <SpiralArt style={{ top: '20%', right: '10%' }}>🌀</SpiralArt>
      <SpiralArt style={{ top: '70%', left: '15%' }}>🌀</SpiralArt>
      <SpiralArt style={{ top: '50%', right: '20%' }}>🌀</SpiralArt>
      <SpiralArt style={{ top: '30%', left: '40%' }}>🌀</SpiralArt>
      <SpiralArt style={{ top: '80%', right: '35%' }}>🌀</SpiralArt>

      <Heading
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Writing Collection
      </Heading>

      <Info>This is the detailed page for my Writing collection. Explore my poems, stories, and essays.</Info>
      <Quote>"To write is to exist." — Me on a random Tuesday</Quote>

      <SectionTitle>Poems</SectionTitle>
      {/* Poem 1 */}
      <PoemSection>
        <h3>Hunger</h3>
        <p>A poisonous fruit, I took a bite I liked it, I asked for more<br />
There were no more to feed my hunger<br />
No way of getting rid of my appetite<br />
Soft it was, smoother than the surface<br />
The table that I shared a meal on<br />
I could sense the need for company<br />
It took all of me, I lost my urge to eat<br />
No more of it, I no longer needed it<br />
I could live off of crumbs and bites<br />
Got to a point I couldn't feel a thing<br />
It was alright for a while, I even liked it<br />
Time passed, days gone, nights came<br />
The longer they got, the emptier I felt<br />
The point of no return, I saw the issue<br />
I needed to feel it again, the hunger strike<br />
I went to the kitchen, looked around<br />
Seemed like a foreign place, felt lost<br />
Eventually found what I was looking for<br />
It was right there for me, almost as if—<br />
Almost as if it was waiting for me to take it<br />
It was the case, or at least I believe it to be<br />
I took it all in and at the last second, I saw—<br />
I saw nothing but darkness. It worked.<br />
</p>
      </PoemSection>

      {/* Poem 2 */}
      <PoemSection>
        <h3>Reached Light</h3>
        <p>There's a bright light that keeps appearing,<br />
Its source unknown, its effect dreary.<br />
It grows so strong one might go blind;<br />
The more it shines, the harder to define.<br />
Resonating in my head, waves create<br />
Harmony, transcending into a myriad state.<br />
It shapes and shifts, ceaselessly evolving,<br />
Guiding seekers on paths revolving.<br />
I grasp the light, embracing its sound,<br />
Creating, forging, my purpose found.<br />
Relief floods in, a long-lost friend,<br />
I seize the source, reluctant to end.<br />
Gripping tightly, nearly breaking,<br />
Not fragile, just my hands quaking.<br />
Fear and nausea draw near;<br />
I step back, releasing fear.<br />
Yet it returns, relentless and strong,<br />
A magnet, pulling me along.<br />
With understanding, hope ignites,<br />
The light shines on, guiding my sights.<br />
Better things are coming, I sense the dawn;<br />
With open arms, I welcome them on.<br />
</p>
      </PoemSection>
      <PoemSection>
         <h3>Insect</h3>
         <p>
          There used to be in insect buzzing and panting in my room. I was looking for it in every corner, every part, I just couldn't trace it. It got to a point that I would get furious and think that it may be a fraction of my mind that makes such weird noises.
There was disturbance, and tremendously intense noise that will not stop. It kept on going for a long time, eventually I got used to it and even got to the point that whenever I was back to the room, l'd be patiently waiting for the sound and then say "hey buddy, I'm home", I got so used to it that the sound was a way to alert me and keep in touch with my surrounding. It's been a year now and there is no more sound, the buzz, the shrink, the pant is no longer there, and I am still waiting for it to come back again, not because it sounded nice or anything, just merely because it had a presence in my room and kept my company.
         </p>
      </PoemSection>

      {/* Add more poem sections as needed */}
      
      {/* Icons Section */}
      <IconContainer>
        <FaPen />
        <FaRegSquare />
        <FaRegCircle />
      </IconContainer>
    </WritingSection>
  );
}
