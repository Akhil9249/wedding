import React, { useState, useRef } from 'react';
import './MusicPlayer.css';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn('Playback blocked or no audio source available', e);
      });
    }
  };

  return (
    <div className="music-player-fab" title={isPlaying ? 'Pause Music' : 'Play Music'}>
      <button
        type="button"
        className={`music-btn ${isPlaying ? 'playing' : ''}`}
        onClick={togglePlay}
        aria-label="Toggle background music"
      >
        <span className="music-icon">{isPlaying ? '🔊' : '🎵'}</span>
        <span className="music-tooltip">{isPlaying ? 'Sound On' : 'Play Music'}</span>
      </button>
      <audio
        ref={audioRef}
        loop
        src="https://actions.google.com/sounds/v1/ambiences/soft_indian_flute.ogg"
      />
    </div>
  );
}

