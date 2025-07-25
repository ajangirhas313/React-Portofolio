import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import basicReactImg from '../assets/images/certificates/basic_react.jpg';
import javaadvanceImg from '../assets/images/certificates/java_advance.jpg';
import dataStructureImg from '../assets/images/certificates/data_structure_c.jpg';
import htmlCssJsImg from '../assets/images/certificates/html_css_js.jpg';
import gitHubImg from '../assets/images/certificates/github.jpg';
import logicAlgorithmImg from '../assets/images/certificates/logika_algoritma_c.jpg';
import javaFundamentalImg from '../assets/images/certificates/java_fundamental.jpg';
import mySqlImg from '../assets/images/certificates/mysql_database.jpg';


// Menambahkan informasi penyelenggara
const certificates = [
  {
    title: 'Basic React Training',
    image: basicReactImg,
    description: 'Pelatihan intensif untuk membangun antarmuka pengguna yang dinamis menggunakan fundamental React.',
    provider: 'Diselenggarakan oleh PUB Training Center',
  },
  {
    title: 'Advanced Back-end Programming (Java)',
    image: javaadvanceImg,
    description: 'Mendalami konsep pemrograman back-end tingkat lanjut dengan studi kasus menggunakan Bahasa Java.',
    provider: 'Diselenggarakan oleh PUB Training Center',
  },
  {
    title: 'Data Structure Programming (C)',
    image: dataStructureImg,
    description: 'Pelatihan fundamental mengenai struktur data yang efisien dan implementasinya menggunakan Bahasa C.',
    provider: 'Diselenggarakan oleh PUB Training Center',
  },
  {
    title: 'Web Programming (HTML, CSS, JS)',
    image: htmlCssJsImg,
    description: 'Pelatihan dasar untuk membangun pondasi pengembangan web yang kuat dengan trio teknologi fundamental.',
    provider: 'Diselenggarakan oleh PUB Training Center',
  },
  {
    title: 'Git & GitHub Training',
    image: gitHubImg,
    description: 'Menguasai sistem kontrol versi esensial untuk kolaborasi dan manajemen kode yang efisien.',
    provider: 'Diselenggarakan oleh PUB Training Center',
  },
  {
    title: 'Database Programming (MySQL)',
    image: mySqlImg,
    description: 'Pelatihan komprehensif tentang desain, kueri, dan manajemen database relasional menggunakan MySQL.',
    provider: 'Diselenggarakan oleh PUB Training Center',
  },
  {
    title: 'Fundamental Back-end Programming (Java)',
    image: javaFundamentalImg,
    description: 'Mempelajari dasar-dasar pemrograman sisi server yang solid menggunakan Bahasa Java.',
    provider: 'Diselenggarakan oleh PUB Training Center',
  },
  {
    title: 'Logic Algorithm Programming (C)',
    image: logicAlgorithmImg,
    description: 'Mengasah kemampuan pemecahan masalah melalui pelatihan logika dan algoritma dengan Bahasa C.',
    provider: 'Diselenggarakan oleh PUB Training Center',
  },
];

const CertificatesContainer = styled.section`
  text-align: center;
  background-color: var(--surface-color);
  padding: 100px 8%;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;

const CertificatesGrid = styled(motion.div)`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

// --- Perubahan utama pada style kartu ---
const CertificateCard = styled(motion.a)`
  border-radius: 12px;
  text-decoration: none;
  /* 1. Latar Belakang Gradien Halus */
  background: linear-gradient(145deg, var(--surface-color), var(--background-color));
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  &:hover {
    /* 2. Efek "Glow" Saat Hover */
    transform: translateY(-10px);
    box-shadow: 0 10px 30px -5px rgba(74, 144, 226, 0.2);
    border-color: var(--primary-color);
  }
`;

const ImageContainer = styled(motion.div)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const CertificateImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1.41 / 1;
  object-fit: cover;
  display: block;
`;

const CardContent = styled.div`
  padding-top: 1.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CertificateTitle = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`;

const CertificateDescription = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary-color);
  line-height: 1.5;
  flex-grow: 1; /* Mendorong provider ke bawah */
  margin-bottom: 1rem;
`;

const CertificateProvider = styled.span`
  font-size: 0.8rem;
  font-style: italic;
  color: var(--text-secondary-color);
  opacity: 0.7;
`;


// Varian animasi
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const CertificatesSection = () => {
  return (
    <CertificatesContainer>
      <h2>Sertifikat & Pencapaian</h2>
      <CertificatesGrid
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certificates.map((cert) => (
          <CertificateCard
            key={cert.title}
            href={cert.image}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover="hover" // Trigger state 'hover' pada Framer Motion
          >
            {/* 3. Efek Angkat Berlapis (Parallax) */}
            <ImageContainer
              variants={{ hover: { y: -15 } }} // Saat card di-hover, gambar akan naik 15px
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <CertificateImage src={cert.image} alt={cert.title} />
            </ImageContainer>

            <CardContent>
              <CertificateTitle>{cert.title}</CertificateTitle>
              <CertificateDescription>{cert.description}</CertificateDescription>
              <CertificateProvider>{cert.provider}</CertificateProvider>
            </CardContent>
          </CertificateCard>
        ))}
      </CertificatesGrid>
    </CertificatesContainer>
  );
};

export default CertificatesSection;