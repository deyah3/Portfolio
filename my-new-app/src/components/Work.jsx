import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const WorkSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(to top, #3a3a8b, #1b1b2f);
  color: #fff;
  text-align: center;
  position: relative;
  border: 4px solid rgb(85, 85, 130);
  border-radius: 20px;
  margin: 2rem;
  box-shadow: 0 0 20px rgba(60, 160, 150, 0.4);
`;

const Heading = styled(motion.h2)`
  font-family: 'Press Start 2P', cursive;
  font-size: 2.8rem;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #86c8bc, #a3f3d2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 2px;
  text-shadow: 0px 0px 20px rgba(100, 255, 255, 0.6);
  animation: neonPulse 1.5s infinite alternate;

  @keyframes neonPulse {
    0% {
      text-shadow: 0 0 10px #86c8bc, 0 0 20px #a3f3d2;
    }
    100% {
      text-shadow: 0 0 30px #86c8bc, 0 0 50px #a3f3d2;
    }
  }
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  background: linear-gradient(to right, rgb(161, 127, 210), #8e9eab);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: background 0.3s, transform 0.2s ease;

  &:hover {
    background: linear-gradient(to right, rgb(156, 159, 162), rgb(172, 172, 181));
    transform: scale(1.05);
  }

  svg {
    margin-right: 0.5rem;
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
  background: rgba(173, 216, 230, 0.1);
  border: 2px dashed #86c8bc;
  border-radius: 10px;
`;

const ProjectBox = styled.div`
  margin-top: 3rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: rgb(102, 102, 139);
  padding: 2rem;
  border-radius: 15px;
  border: 3px dotted rgb(102, 144, 104);
  box-shadow: inset 0 0 10px rgba(0, 255, 123, 0.4);
  text-align: left;
`;

const ProjectItem = styled.div`
  margin-bottom: 2rem;
  list-style: none;
  position: relative;
  padding-left: 2.2rem;

  &::before {
    content: "🖌️";
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1.4rem;
  }
`;

const ImageGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const ProfileImage = styled.img`
  border-radius: 80%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 5px solid rgb(200, 240, 230);
  box-shadow: 0 4px 20px rgba(131, 174, 195, 0.4);
  animation: pulse 1.5s infinite alternate;

  @keyframes pulse {
    0% {
      box-shadow: 0 4px 20px rgba(131, 174, 195, 0.4);
    }
    100% {
      box-shadow: 0 4px 40px rgba(131, 174, 195, 0.8);
    }
  }
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  border: 4px solid rgb(200, 240, 230);
  box-shadow: 0 4px 20px rgba(131, 174, 195, 0.3);
`;

export default function Work() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <WorkSection id="work">
      <BackButton onClick={goBack}>
        <FaHome /> Back to Home
      </BackButton>

      <Heading
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        🛠️ My Projects
      </Heading>

      <Description>
        Here's a collection of my freelance projects, internships, and teaching experiences. From designing logos and posters to building full-stack applications and educating the next generation in tech.
      </Description>

      {/* Freelance Work: Logos */}
      <ProjectBox>
        <h3>Freelance Work: Logo Design</h3>
        <p>Designed unique and meaningful logos tailored to client brand identity and goals.</p>
        <ImageGrid>
          <ProfileImage src="/logo1.jpg" alt="Logo 1" />
          <ProfileImage src="/logo2.jpg" alt="Logo 2" />
          <ProfileImage src="/logo3.jpg" alt="Logo 3" />
          <ProfileImage src="/logo4.jpg" alt="Logo 4" />
          <ProfileImage src="/logo5.jpg" alt="Logo 5" />
          <ProfileImage src="/logo6.jpg" alt="Logo 5" />
        </ImageGrid>
      </ProjectBox>

      <br />
        {/* Poster Design */}
      <ProjectBox>
        <h3>Course Trainer: Poster Design</h3>
        <p><strong>Duration:</strong> Mar 2025</p>
        <p>Designed a creative educational poster for a robotics course, balancing modern design with a child-friendly aesthetic.</p>
        <ImageGrid>
          <ProjectImage src="/poster1.jpg" alt="Poster Project" />
        </ImageGrid>
      </ProjectBox>
      <br></br>

      {/* Capstone */}
      <ProjectBox>
        <h3>PalettePicker Website– Capstone Project</h3>
        <p><strong>Duration:</strong> Sep 2024 – Dec 2024</p>
        <p>Worked on a real-world website project. Learned website structure, design, and development best practices using Next.js, Tailwind and mongoDB.</p>
        <ImageGrid>
          <ProjectImage src="/capstone.jpg" alt="Capstone Screenshot" />
        </ImageGrid>
      </ProjectBox>

     

    

      <br />

      {/* Website Development */}
      <ProjectBox>
        <h3>Internship: Website Development</h3>
        <p><strong>Duration:</strong> Jul 2024 – Sep 2024</p>
        <p>Built a fully functional website for a movie app during my internship, using modern frontend and backend tools (React, Node.js, MySQL).</p>
        <ImageGrid>
          <ProjectImage src="/website1.jpg" alt="Website Project" />
        </ImageGrid>
      </ProjectBox>
    </WorkSection>
  );
}
