import React from 'react';
import styled from 'styled-components';
// 1. Impor ikon yang akan kita gunakan
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactContainer = styled.section`
  text-align: center;
  padding: 100px 8%;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary-color);
  margin: 0 auto 2.5rem auto;
`;

const EmailButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
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

// 2. Buat container untuk link sosial media
const SocialLinks = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  a {
    color: var(--text-secondary-color);
    font-size: 2rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: var(--primary-color);
      transform: translateY(-3px);
    }
  }
`;


const ContactSection = () => {
  return (
    <ContactContainer>
      <Title>Hubungi Saya</Title>
      <Subtitle>
        Saya selalu terbuka untuk diskusi, kolaborasi, atau peluang baru.
        Jangan ragu untuk mengirim email dan menyapa!
      </Subtitle>
      <EmailButton href="mailto:ajangirhas@gmail.com">
        Kirim Email
      </EmailButton>

      {/* 3. Tambahkan link di sini */}
      <SocialLinks>
        <a href="https://github.com/ajangirhas313" target="_blank" rel="noopener noreferrer" aria-label="GitHub"> 
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/ajang-irhas-rifai-115789291" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> 
          <FaLinkedin />
        </a>
      </SocialLinks>

    </ContactContainer>
  );
};

export default ContactSection;