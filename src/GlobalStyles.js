import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #4A90E2; // Biru yang cerah sebagai aksen
    --background-color: #121212; // Latar belakang gelap
    --surface-color: #1E1E1E;   // Warna untuk card/permukaan
    --text-color: #EAEAEA;
    --text-secondary-color: #B3B3B3;
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
  }

  h1, h2, h3, h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: var(--text-color);
  }
  
  section {
    padding: 100px 8%;
    overflow: hidden; // Mencegah scrollbar horizontal dari animasi slide
  }
`;

export default GlobalStyles;