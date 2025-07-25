import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  transition: all 0.3s ease-in-out;
  
  background-color: ${({ $scrolled }) => $scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
  -webkit-backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ $scrolled }) => $scrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' : 'none'};
`;

const NavLogo = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: var(--text-secondary-color);
  text-decoration: none;
  font-weight: 600;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav
      $scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <NavLogo href="#home">Portofolio</NavLogo>
      <NavLinks>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#certificates">Certificates</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;