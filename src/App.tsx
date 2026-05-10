import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import ProjectPage from './components/ProjectPage';
import NotFound from './components/NotFound';
import { ProfileProvider } from './context/ProfileContext';
import './index.scss';

interface ModeProps {
  mode: string;
  modeChange: () => void;
}

function Home({ mode, modeChange }: ModeProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Navigation parentToChild={{ mode }} modeChange={modeChange} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Timeline />
        <Project />
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

function AppContent() {
  const [mode, setMode] = useState<string>('dark');

  const handleModeChange = () => {
    setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || '/'}>
      <Routes>
        <Route path="/" element={<Home mode={mode} modeChange={handleModeChange} />} />
        <Route
          path="/projects/:slug"
          element={<ProjectPage mode={mode} modeChange={handleModeChange} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <ProfileProvider>
      <AppContent />
    </ProfileProvider>
  );
}

export default App;
