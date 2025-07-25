import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'; // Impor ikon

// --- Styled Components ---

const Nav = styled(motion.nav)`
  width: 100%;
  padding: 1rem 8%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  
  /* Menggunakan theme provider untuk warna background dan opacity */
  background-color: ${({ $scrolled }) => $scrolled ? `${({ theme }) => theme.surface}e6` : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
  -webkit-backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
`;

const NavLogo = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  z-index: 10; /* Agar di atas menu mobile */
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    /* Menu mobile fullscreen */
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--surface-color);
    transition: transform 0.3s ease-in-out;
    transform: ${({ $isOpen }) => $isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  }
`;

const NavLink = styled.a`
  color: var(--text-secondary-color);
  text-decoration: none;
  font-weight: 600;
  position: relative;
  transition: color 0.3s ease;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    color: var(--text-color);
  }

  &:hover {
    color: var(--primary-color);
  }
`;

const ToggleButton = styled(motion.button)`
  background: transparent;
  border: 1px solid var(--primary-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--primary-color);
  
  @media (max-width: 768px) {
    order: -1; /* Pindahkan tombol tema ke atas di menu mobile */
  }
`;

const MenuToggle = styled.div`
  display: none; /* Sembunyikan di desktop */
  z-index: 10;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block; /* Tampilkan di mobile */
  }
`;

// --- Komponen Utama ---

const Navbar = ({ toggleTheme, themeMode }) => { 
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Nav
      $scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <NavLogo href="#home" onClick={handleLinkClick}>Ajang Irhas R.</NavLogo>

      <MenuToggle onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuToggle>

      <NavLinksContainer $isOpen={isOpen}>
        <NavLink href="#about" onClick={handleLinkClick}>About</NavLink>
        <NavLink href="#projects" onClick={handleLinkClick}>Projects</NavLink>
        <NavLink href="#certificates" onClick={handleLinkClick}>Certificates</NavLink>
        <NavLink href="#contact" onClick={handleLinkClick}>Contact</NavLink>
        <ToggleButton
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {themeMode === 'light' ? <FaMoon /> : <FaSun />}
        </ToggleButton>
      </NavLinksContainer>
    </Nav>
  );
};

export default Navbar;