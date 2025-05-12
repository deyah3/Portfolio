// src/components/Skills.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SkillsSection = styled.section`
  background: linear-gradient(to top left, #6b7a8f, #3e4e60); /* Soft muted blue-gray gradient */
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
`;

const SkillTitle = styled.h2`
  font-family: 'Press Start 2P', cursive;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #d6a4b7, #8e9eab); /* Muted pink and soft blue gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;

  /* Add neon glow effect */
  text-shadow: 0px 0px 10px rgba(214, 164, 183, 0.4), 0px 0px 20px rgba(142, 158, 171, 0.4);
  animation: neonPulse 2s infinite alternate;

  @keyframes neonPulse {
    0% {
      text-shadow: 0px 0px 10px rgba(214, 164, 183, 0.4), 0px 0px 20px rgba(142, 158, 171, 0.4);
    }
    100% {
      text-shadow: 0px 0px 20px rgba(214, 164, 183, 0.6), 0px 0px 40px rgba(142, 158, 171, 0.6);
    }
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Skill = styled(motion.span)`
  background: #fff;
  color: #2f3b46;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  font-weight: 600;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s, background 0.3s;

  &:hover {
    background: linear-gradient(to right, #8e9eab, #d6a4b7);
    color: #fff;
    transform: scale(1.1);
  }
`;

export default function Skills() {
  const skillNames = [
    "Photoshop", "Illustrator", "Figma", "React", "Styled-Components", "Branding", "UI/UX"
  ];

  return (
    <SkillsSection id="skills">
      <SkillTitle>My Creative Skills</SkillTitle>
      <SkillList>
        {skillNames.map((skill, index) => (
          <Skill
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {skill}
          </Skill>
        ))}
      </SkillList>
    </SkillsSection>
  );
}
