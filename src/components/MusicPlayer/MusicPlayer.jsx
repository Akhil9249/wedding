import React, { useState, useRef, useEffect, useCallback } from 'react';
import './MusicPlayer.css';
import bgMusic from '../../assets/audio/music.mpeg';

const AUDIO_SRC = '/music/background-music.mp3';

export default function MusicPlayer() {
  // Icon and audio are muted initially on page load
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const userMutedRef = useRef(false);

  // Play music function
  const playMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (userMutedRef.current) return;

    audio.muted = false;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setIsMuted(false);
        })
        .catch(() => {
          // Playback deferred until user interaction
        });
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.8;
    audio.muted = true; // Start muted so all browsers permit instant background autoplay

    // 1. Start muted playback immediately on load
    audio.play().then(() => {
      setIsPlaying(true);
      setIsMuted(true);
    }).catch(() => {
      setIsPlaying(false);
      setIsMuted(true);
    });

    // Handle scroll and page interaction to trigger music playback
    const handleScrollOrInteraction = (e) => {
      // Do not trigger if interacting with the music button directly
      if (e && e.target && e.target.closest && e.target.closest('.music-player-fab')) {
        return;
      }
      if (userMutedRef.current) return;

      // When user scrolls or interacts, unmute and play music
      if (audio.muted || audio.paused) {
        audio.muted = false;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setIsMuted(false);
            })
            .catch(() => {
              // Browser Autoplay Policy requires a user gesture (click/tap) before allowing sound.
              // Revert to muted playback silently so audio keeps buffering/playing in background.
              audio.muted = true;
              audio.play().catch(() => {});
            });
        }
      }
    };

    const SCROLL_EVENTS = [
      'scroll',
      'wheel',
      'touchmove',
      'touchstart',
      'pointerdown',
      'click',
      'keydown'
    ];

    SCROLL_EVENTS.forEach((eventName) => {
      window.addEventListener(eventName, handleScrollOrInteraction, { capture: true, passive: true });
      document.addEventListener(eventName, handleScrollOrInteraction, { capture: true, passive: true });
    });

    // Native audio event sync
    const onPlay = () => setIsPlaying(true);
    const onPause = () => {
      if (userMutedRef.current) setIsPlaying(false);
    };
    const onVolumeChange = () => {
      setIsMuted(audio.muted || audio.volume === 0);
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('volumechange', onVolumeChange);

    return () => {
      SCROLL_EVENTS.forEach((eventName) => {
        window.removeEventListener(eventName, handleScrollOrInteraction, true);
        document.removeEventListener(eventName, handleScrollOrInteraction, true);
      });
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('volumechange', onVolumeChange);
    };
  }, []);

  const toggleMusic = useCallback((e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const audio = audioRef.current;
    if (!audio) return;

    // Check if currently audible
    const isCurrentlyAudible = !audio.paused && !audio.muted;

    if (isCurrentlyAudible) {
      // User explicitly clicked mute
      userMutedRef.current = true;
      audio.muted = true;
      setIsMuted(true);
    } else {
      // User explicitly clicked unmute / play
      userMutedRef.current = false;
      playMusic();
    }
  }, [playMusic]);

  const isAudible = isPlaying && !isMuted;

  return (
    <div className="music-player-fab">
      <button
        type="button"
        className={`music-btn ${isAudible ? 'playing' : 'muted'}`}
        onClick={toggleMusic}
        aria-label={isAudible ? 'Mute background music' : 'Unmute background music'}
        title={isAudible ? 'Click to Mute' : 'Click to Unmute'}
      >
        <span className="music-icon-wrap">
          {isAudible ? (
            /* Speaker with sound waves (Unmuted / Playing) */
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          ) : (
            /* Muted speaker with cross (Muted initially) */
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          )}
        </span>
        <span className="music-tooltip">
          {isAudible ? 'Mute Music' : 'Play Music'}
        </span>
      </button>

      <audio
        ref={audioRef}
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src={AUDIO_SRC} type="audio/mpeg" />
        <source src={bgMusic} type="audio/mpeg" />
      </audio>
    </div>
  );
}
