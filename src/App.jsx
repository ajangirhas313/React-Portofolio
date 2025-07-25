import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection'; // <-- 1. Impor komponen baru
import ContactSection from './components/ContactSection';
import AnimatedSection from './components/AnimatedSection';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <MainContainer>
      <Navbar />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <AnimatedSection>
            <AboutSection />
          </AnimatedSection>
        </div>
        <div id="projects">
          <AnimatedSection>
            <ProjectsSection />
          </AnimatedSection>
        </div>
        
        {/* 2. Tambahkan section baru di sini */}
        <div id="certificates">
           {/* Tidak perlu AnimatedSection karena komponen ini sudah punya whileInView sendiri */}
          <CertificatesSection />
        </div>

        <div id="contact">
          <AnimatedSection>
            <ContactSection />
          </AnimatedSection>
        </div>
      </main>
    </MainContainer>
  );
}

export default App;