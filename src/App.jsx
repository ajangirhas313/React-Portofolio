import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import AnimatedSection from './components/AnimatedSection';
import GlobalStyles from './GlobalStyles';


const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem('themeMode');
    return savedTheme || 'dark'; // Default ke dark mode
  });

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return [themeMode, toggleTheme];
};


function App() {
  const [themeMode, toggleTheme] = useThemeMode();
  
  const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Navbar toggleTheme={toggleTheme} themeMode={themeMode} />
      <main>
        <div id="home"><HeroSection /></div>
        <div id="about"><AnimatedSection><AboutSection /></AnimatedSection></div>
        <div id="projects"><AnimatedSection><ProjectsSection /></AnimatedSection></div>
        <div id="certificates"><CertificatesSection /></div>
        <div id="contact"><AnimatedSection><ContactSection /></AnimatedSection></div>
      </main>
    </ThemeProvider>
  );
}

export default App;