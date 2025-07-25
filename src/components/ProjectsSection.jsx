import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import jejakGayaImg from '../assets/images/jejak.png';
import dapaStoreImg from '../assets/images/dapa.png';
import alquranImg from '../assets/images/alquran.png';
import zestooImg from '../assets/images/zestoo.png';


const projects = [
    {
    title: 'Jejak Gaya - Fullstack E-commerce',
    description: 'Mengembangkan aplikasi penjualan baju online responsif dengan ReactJS untuk frontend dan Node.js/Express.js sebagai backend.',
    image: jejakGayaImg,
    tags: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/ajangirhas313/jejak_gaya',
  },
  {
    title: 'Dapa Electronic Store - REST API',
    description: 'Merancang dan membangun REST API komprehensif untuk e-commerce menggunakan Java Spring Boot dan MySQL.',
    image: dapaStoreImg,
    tags: ['Java', 'Spring Boot', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/ajangirhas313/dapa_store',
  },
  {
    title: 'AlQuranku - Website Interaktif',
    description: 'Membangun website Al-Quran yang interaktif dan responsif dari awal menggunakan teknologi web fundamental.',
    image: alquranImg,
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/ajangirhas313/HTML_Project',
  },
  {
    title: 'Zestoo - Aplikasi Penjualan',
    description: 'Membangun aplikasi penjualan jajanan online menggunakan Java Spring Boot dan Thymeleaf dengan database MySQL.',
    image: zestooImg,
    tags: ['Java', 'Spring Boot', 'Thymeleaf'],
    liveUrl: '#',
    githubUrl: 'https://github.com/ajangirhas313/projekan',
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
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
`;

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
  /* Transisi zoom dihapus dari sini agar lebih halus */
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


// --- PERUBAHAN UTAMA ADA DI SINI ---
const ProjectCard = styled(motion.div)`
  background: var(--surface-color);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  /* Transisi yang lebih spesifik dan halus */
  transition: box-shadow 0.4s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    /* Efek zoom pada gambar dihapus dari sini */
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
      <h2>Projects</h2>
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
            whileHover={{ y: -5 }} // Efek angkat tetap ada karena halus
            transition={{ type: 'spring', stiffness: 400, damping: 15 }} // spring dibuat lebih 'kaku'
          >
            <CardImageContainer>
              <CardLinks>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
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