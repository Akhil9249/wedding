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

    // Events that indicate initial scroll or interaction
    const SCROLL_AND_INTERACTION_EVENTS = [
      'scroll',
      'wheel',
      'touchmove',
      'touchstart',
      'pointerdown',
      'click',
      'keydown'
    ];

    const removeScrollListeners = () => {
      SCROLL_AND_INTERACTION_EVENTS.forEach((eventName) => {
        window.removeEventListener(eventName, handleInitialScroll, true);
        document.removeEventListener(eventName, handleInitialScroll, true);
      });
    };

    const handleInitialScroll = (e) => {
      // Ignore clicks/touches on the music button itself to avoid double-toggling
      if (e && e.target && e.target.closest && e.target.closest('.music-player-fab')) {
        return;
      }

      if (!audio) return;
      if (userMutedRef.current) {
        removeScrollListeners();
        return;
      }

      // Automatically unmute audio when user starts scrolling or interacting with the page
      audio.muted = false;
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsMuted(false);
            setIsPlaying(true);
            removeScrollListeners();
          })
          .catch(() => {
            // If browser blocks unmuted playback on desktop mouse-wheel,
            // keep audio playing in muted mode and wait for first tap/click
            audio.muted = true;
            audio.play().catch(() => {});
          });
      } else {
        setIsMuted(false);
        setIsPlaying(true);
        removeScrollListeners();
      }
    };

    // Attach scroll and interaction listeners
    SCROLL_AND_INTERACTION_EVENTS.forEach((eventName) => {
      window.addEventListener(eventName, handleInitialScroll, { capture: true, passive: true });
      document.addEventListener(eventName, handleInitialScroll, { capture: true, passive: true });
    });

    // Native audio event sync
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onVolumeChange = () => {
      setIsMuted(audio.muted || audio.volume === 0);
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('volumechange', onVolumeChange);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('volumechange', onVolumeChange);
      removeScrollListeners();
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
      // User explicitly clicked unmute
      userMutedRef.current = false;
      audio.muted = false;
      audio.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
      }).catch((err) => {
        console.warn('Playback error:', err);
      });
    }
  }, []);

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
          {isAudible ? 'Mute Music' : 'Unmute Music'}
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
