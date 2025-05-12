import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(to top, #1a1a40, #060612);
  color: #fff;
  text-align: center;
  overflow: hidden;
  position: relative;
  border: 4px double #00ffcc;
  border-radius: 20px;
  margin: 2rem;
  box-shadow: 0 0 20px #00f0ff;
`;

const Heading = styled(motion.h2)`
  font-family: 'Press Start 2P', cursive;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #9b4dff, #00b5cc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 2px;
  text-shadow: 0px 0px 20px rgba(155, 77, 255, 0.6);
  animation: neonPulse 1.5s infinite alternate;

  @keyframes neonPulse {
    0% {
      text-shadow: 0 0 10px #9b4dff, 0 0 20px #00b5cc;
    }
    100% {
      text-shadow: 0 0 30px #9b4dff, 0 0 50px #00b5cc;
    }
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #ccc;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto 2rem auto;
  font-family: 'Press Start 2P', cursive;
  text-align: left;
  padding: 1rem;
  background: rgba(0, 255, 204, 0.08);
  border: 2px dashed #00ffcc;
  border-radius: 10px;
`;

const FunBox = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  color: #fff;
  max-width: 700px;
  margin: 0 auto 2rem auto;
  background-color: #12122b;
  padding: 1.5rem;
  border-radius: 12px;
  border: 3px dotted #9b4dff;
  box-shadow: inset 0 0 10px #9b4dff;
  text-align: left;
`;

const FunItem = styled.li`
  margin-bottom: 1.5rem;
  list-style: none;
  position: relative;
  padding-left: 2.2rem;

  &::before {
    content: "🎮";
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1.4rem;
  }
`;

const StatsBar = styled.div`
  margin: 2rem auto;
  max-width: 500px;
  background: #222;
  border: 2px solid #00ffcc;
  padding: 1rem;
  border-radius: 10px;
`;

const Stat = styled.div`
  text-align: left;
  margin-bottom: 1rem;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.7rem;
  color: #00ffcc;
  span {
    float: right;
    color: #fff;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 5px solid #9b4dff;
  box-shadow: 0 4px 20px rgba(155, 77, 255, 0.4);
  animation: pulse 1.5s infinite alternate;

  @keyframes pulse {
    0% {
      box-shadow: 0 4px 20px rgba(155, 77, 255, 0.4);
    }
    100% {
      box-shadow: 0 4px 40px rgba(155, 77, 255, 0.8);
    }
  }
`;

export default function AboutMe() {
  return (
    <AboutSection id="about">
      <Heading
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        👾 About Me
      </Heading>

      <Description>
        💻 Freshly grad Software Engineer with a degree in Business Administration (how cool is that!).
        <br />🎨 I turn wild ideas into web magic using code (sometimes), color, and creativity.
        <br />🧠 Forever curious, I constantly learn new skills and enjoy pushing boundaries through tech (I am a fast learner, I promise).
      </Description>
{/* 
      <FunBox>
        <ul>
          <FunItem>Once made a game where the bugs were the boss fights.</FunItem>
          <FunItem>My favorite IDE theme? Synthwave '84, obviously 💜</FunItem>
          <FunItem>Working on an 8-bit RPG just for fun (and snacks).</FunItem>
        </ul>
      </FunBox> */}

      <StatsBar>
        <Stat>Creativity <span>🔥🔥🔥🔥🔥</span></Stat>
        <Stat>Art Making<span>🎨🎨🎨🎨</span></Stat>
        <Stat>Code Sorcery <span>💻💻💻</span></Stat>
        <Stat>Coffee Intake <span>☕☕☕☕☕</span></Stat>
      </StatsBar>

      <ImageWrapper>
        <ProfileImage src="/profile-image.jpg" alt="Profile" />
      </ImageWrapper>
    </AboutSection>
  );
}
