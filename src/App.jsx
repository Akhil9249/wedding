import React from 'react';
import './App.css';
import bgImg from './assets/images/bg.png';
import { weddingData } from './data/weddingData';
import { useScrollReveal } from './hooks/useScrollReveal';

import Header from './components/Header/Header';
import Reception from './components/Reception/Reception';
import Footer from './components/Footer/Footer';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import FallingPetals from './components/FallingPetals/FallingPetals';

function App() {
  useScrollReveal('.scroll-reveal');

  return (
    <div className="wedding-app-wrapper">
      {/* Floating Falling Petals Everywhere */}
      <FallingPetals />

      <main 
        className="invitation-container" 
        style={{ backgroundImage: `url(${bgImg})` }}
        aria-label="Digital Wedding Invitation"
      >
        {/* Floating Background Music Player */}
        <MusicPlayer />

        {/* 1. Header with Auspicious Blessings */}
        <Header data={weddingData.header} couple={weddingData.couple} />

        {/* 2. The Beginning of Always (Wedding Reception) */}
        <Reception data={weddingData.reception} />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
