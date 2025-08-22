import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiMysql } from 'react-icons/si';
import fotoProfil from '../assets/images/fotoku.jpg';

// --- PERUBAHAN UTAMA: Menggunakan Flexbox ---
const AboutContainer = styled.section`
  display: flex; /* Menggunakan flexbox */
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 960px) {
    flex-direction: column; /* Kunci: Mengubah arah menjadi vertikal di mobile */
    gap: 3rem;
  }
`;

const TextContent = styled.div`
  flex: 3; /* Mengambil 3 bagian dari ruang yang tersedia */
  
  @media (max-width: 960px) {
    order: 2;
    width: 100%; /* Memastikan lebar penuh di mobile */
    text-align: center;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 50px;
      height: 4px;
      background: var(--primary-color);
      @media (max-width: 960px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  p {
    color: var(--text-secondary-color);
    margin-bottom: 1rem;
    max-width: 600px;
     @media (max-width: 960px) {
        margin-left: auto;
        margin-right: auto;
     }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  max-width: 500px;
  @media (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary-color);
  font-size: 0.9rem;
  transition: color 0.3s ease, transform 0.3s ease;

  svg {
    font-size: 3rem;
  }
  
  &:hover {
    color: var(--primary-color);
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  flex: 2; /* Mengambil 2 bagian dari ruang yang tersedia */
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  border-radius: 12px;
  background: var(--primary-color);
  
  @media (max-width: 960px) {
    order: 1;
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid var(--primary-color);
    border-radius: 12px;
    top: 15px;
    left: 15px;
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover::before {
    top: 0;
    left: 0;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 12px;
  display: block;
  position: relative;
  z-index: 2;
  filter: grayscale(100%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;


const AboutSection = () => {
  return (
    <AboutContainer>
      <TextContent>
        <h2>Tentang Saya</h2>
        <p>
          Saya adalah seorang developer dengan keahlian dalam pengembangan aplikasi web yang responsif dan user-friendly, fokus pada pengembangan fullstack. Saya mampu membangun aplikasi secara end-to-end, mulai dari antarmuka pengguna hingga integrasi dengan API dan database.
        </p>
        <p>
          Berikut adalah beberapa teknologi utama yang saya kuasai:
        </p>
        <SkillsGrid>
          <Skill><FaReact /><p>React</p></Skill>
          <Skill><FaNodeJs /><p>Node.js</p></Skill>
          <Skill><FaJava /><p>Java</p></Skill>
          <Skill><SiSpringboot /><p>Spring</p></Skill>
          <Skill><FaJsSquare /><p>JavaScript</p></Skill>
          <Skill><SiMysql /><p>MySQL</p></Skill>
          <Skill><SiPostgresql /><p>PostgreSQL</p></Skill>
          <Skill><FaHtml5 /><p>HTML5</p></Skill>
          <Skill><FaCss3Alt /><p>CSS3</p></Skill>
          <Skill><FaGitAlt /><p>Git</p></Skill>
        </SkillsGrid>
      </TextContent>
      
      <ImageWrapper>
        <ProfileImage src={fotoProfil} alt="Foto Profil Ajang Irhas Rifai" />
      </ImageWrapper>

    </AboutContainer>
  );
};

export default AboutSection;