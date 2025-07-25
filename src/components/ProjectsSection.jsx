import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import jejakGayaImg from '../assets/images/jejak.png';
import dapaStoreImg from '../assets/images/dapa.png';
import alquranImg from '../assets/images/alquran.png';
import zestooImg from '../assets/images/zestoo.png';
// import sinemaImg from '../assets/images/sinema.png';

const projects = [
    {
    title: 'Jejak Gaya - Fullstack E-commerce',
    description: 'Mengembangkan aplikasi penjualan baju online responsif dengan ReactJS untuk frontend dan Node.js/Express.js sebagai backend.',
    image: jejakGayaImg,
    tags: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/ajangirhas313',
  },
  {
    title: 'Dapa Electronic Store - REST API',
    description: 'Merancang dan membangun REST API komprehensif untuk e-commerce menggunakan Java Spring Boot dan MySQL.',
    image: dapaStoreImg,
    tags: ['Java', 'Spring Boot', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/ajangirhas313',
  },
  {
    title: 'AlQuranku - Website Interaktif',
    description: 'Membangun website Al-Quran yang interaktif dan responsif dari awal menggunakan teknologi web fundamental.',
    image: alquranImg,
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/ajangirhas313',
  },
  {
    title: 'Zestoo - Aplikasi Penjualan',
    description: 'Membangun aplikasi penjualan jajanan online menggunakan Java Spring Boot dan Thymeleaf dengan database MySQL.',
    image: zestooImg,
    tags: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/ajangirhas313',
  },
  {
    title: 'Aplikasi Konsol Sinema',
    description: 'Mengembangkan aplikasi sistem bioskop berbasis konsol menggunakan bahasa C, fokus pada logika dan struktur data.',
    image: zestooImg,
    tags: ['C', 'Algoritma', 'Struktur Data'],
    liveUrl: '#',
    githubUrl: 'https://github.com/ajangirhas313',
  },
];

const ProjectsContainer = styled.section`
  text-align: center;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  gap: 2rem; /* Sedikit lebih banyak ruang antar kartu */
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
`;

// --- DESAIN KARTU BARU DIMULAI DI SINI ---

const CardLinks = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  gap: 1rem;
  z-index: 3;

  a {
    color: #fff;
    font-size: 1.5rem;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
  
  /* Gradien halus di atas gambar untuk menempatkan ikon */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 40%);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease-out;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  text-align: left;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  transition: color 0.3s ease;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary-color);
  line-height: 1.6;
  margin-bottom: 1.25rem;
`;

const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: rgba(74, 144, 226, 0.1);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;


const ProjectCard = styled(motion.div)`
  background: var(--surface-color);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    ${CardImage} {
      transform: scale(1.05);
    }
    ${CardTitle} {
      color: var(--primary-color);
    }
  }
`;

// Varian animasi entrance
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProjectsSection = () => {
  return (
    <ProjectsContainer>
      <h2>Proyek Pilihan</h2>
      <ProjectsGrid
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <ProjectCard 
            key={project.title}
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <CardImageContainer>
              <CardLinks>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
              </CardLinks>
              <CardImage src={project.image} alt={project.title} />
            </CardImageContainer>
            <CardContent>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <CardTags>
                {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
              </CardTags>
            </CardContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default ProjectsSection;