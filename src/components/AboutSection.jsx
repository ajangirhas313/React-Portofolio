import React from 'react';
import styled from 'styled-components';

// 1. Impor foto Anda dari folder assets
import fotoProfil from '../assets/images/fotoku.jpg'; // Pastikan nama file dan ekstensinya sesuai

const AboutContainer = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 4rem; /* Memberi lebih banyak ruang */
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
`;

const TextContent = styled.div`
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
      @media (max-width: 992px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  p {
    color: var(--text-secondary-color);
    margin-bottom: 1rem;
    max-width: 600px;
     @media (max-width: 992px) {
        margin: 0 auto 1rem auto;
     }
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 10px;
  list-style: none;
  margin-top: 2rem;
  padding: 0;
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const Skill = styled.li`
  color: var(--text-secondary-color);
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--primary-color);
  }
`;

// Container untuk membungkus dan memberi style pada foto
const ImageWrapper = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  border-radius: 12px;
  background: var(--primary-color);
  
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
        <SkillsList>
          <Skill>JavaScript (ES6+)</Skill>
          <Skill>React.JS</Skill>
          <Skill>Node.js</Skill>
          <Skill>Java & Spring Boot</Skill>
          <Skill>SQL (MySQL & Postgres)</Skill>
          <Skill>HTML & CSS</Skill>
        </SkillsList>
      </TextContent>
      
      {/* Ganti Scene3D dengan wrapper dan gambar ini */}
      <ImageWrapper>
        <ProfileImage src={fotoProfil} alt="Foto Profil Ajang Irhas Rifai" />
      </ImageWrapper>

    </AboutContainer>
  );
};

export default AboutSection;