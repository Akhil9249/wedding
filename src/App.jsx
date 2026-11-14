import React from 'react';
import './App.css';
import bgImg from './assets/images/bg.png';
import { weddingData } from './data/weddingData';
import { useScrollReveal } from './hooks/useScrollReveal';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Couple from './components/Couple/Couple';
import WelcomeDinner from './components/WelcomeDinner/WelcomeDinner';
import Events from './components/Events/Events';
import Countdown from './components/Countdown/Countdown';
import Venue from './components/Venue/Venue';
import RSVP from './components/RSVP/RSVP';
import Reception from './components/Reception/Reception';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

function App() {
  useScrollReveal('.scroll-reveal');

  return (
    <div className="wedding-app-wrapper">
      <main 
        className="invitation-container" 
        style={{ backgroundImage: `url(${bgImg})` }}
        aria-label="Digital Wedding Invitation"
      >
        {/* Floating Background Music Player */}
        {/* <MusicPlayer /> */}

        {/* 1. Header with Auspicious Blessings */}
        <Header data={weddingData.header} couple={weddingData.couple} />

        {/* 2. Hero Section with Monogram and Names */}
        {/* <Hero couple={weddingData.couple} dates={weddingData.dates} /> */}

        {/* 3. Couple Section with Bride & Groom Details */}
        <Couple couple={weddingData.couple} />

        {/* 3.5 The First Toast (Welcome Dinner) */}
        <WelcomeDinner data={weddingData.welcomeDinner} />

        {/* 4. Wedding Itinerary & Event Timeline */}
        <Events events={weddingData.events} />

        {/* 5. Shaam e Sangeet Event */}
        <Countdown data={weddingData.sangeet} />

        {/* 6. Mangala Darshanam Event */}
        <Venue data={weddingData.mangalaDarshanam} />

        {/* 7. Varmala (Wedding) Event */}
        <RSVP data={weddingData.varmala} />

        {/* 8. The Beginning of Always (Wedding Reception) */}
        <Reception data={weddingData.reception} />

        {/* Footer */}
   
      </main>
    </div>
  );
}

export default App;
