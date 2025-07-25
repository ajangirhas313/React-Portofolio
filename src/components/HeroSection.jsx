import React, { useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
`;

const NameTitle = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 700;
  margin: 0;
  color: var(--text-color);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--text-secondary-color);
  margin-bottom: 2rem;

  span {
    color: var(--primary-color);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeroButton = styled(motion.a)`
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary-color);
  background-color: transparent;
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(74, 144, 226, 0.1);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HeroSection = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particleOptions = {
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
            },
            modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
            color: { value: "#ffffff" },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.05,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: true,
                speed: 1,
                straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.1 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    }

  return (
    <HeroContainer>
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particleOptions}
            style={{ position: 'absolute', zIndex: 1, top: 0, left: 0, width: '100%', height: '100%' }}
        />
        <ContentWrapper variants={containerVariants} initial="hidden" animate="visible">
            <motion.p variants={itemVariants} style={{ color: 'var(--primary-color)', fontWeight: '400', fontFamily: "'Poppins', sans-serif" }}>
                Halo, nama saya adalah
            </motion.p>
            <NameTitle variants={itemVariants}>Ajang Irhas Rifai.</NameTitle>
            <Subtitle variants={itemVariants}>
              Saya seorang <span>Fullstack Developer.</span>
            </Subtitle>
            <HeroButton href="#projects" variants={itemVariants}>
                Lihat Karya Saya
            </HeroButton>
        </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection;