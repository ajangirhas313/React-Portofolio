import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Variabel ini sekarang akan diisi oleh ThemeProvider */
    --primary-color: ${({ theme }) => theme.primary};
    --background-color: ${({ theme }) => theme.background};
    --surface-color: ${({ theme }) => theme.surface};
    --text-color: ${({ theme }) => theme.text};
    --text-secondary-color: ${({ theme }) => theme.textSecondary};
    --glow-effect: ${({ theme }) => theme.glow};
    --card-shadow: ${({ theme }) => theme.cardShadow};
    --card-hover-shadow: ${({ theme }) => theme.cardHoverShadow};
    --tag-background: ${({ theme }) => theme.tagBackground};
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--background-color);
    color: var(--text-color);
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: var(--text-color);
  }
  
  section {
    padding: 100px 8%;
    overflow: hidden; 
  }
`;

export default GlobalStyles;