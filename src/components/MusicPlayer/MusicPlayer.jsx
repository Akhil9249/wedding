import React, { useState, useRef, useEffect, useCallback } from 'react';
import './MusicPlayer.css';
import bgMusic from '../../assets/audio/music.mpeg';

export default function MusicPlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);
  const userMutedRef = useRef(false);
  const isAudibleRef = useRef(false);

  // Play and unmute music
  const triggerAudioPlayback = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || userMutedRef.current) return false;

    // Unlock Web Audio context for mobile browsers (iOS Safari / Chrome)
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        if (!window.__weddingAudioCtx) {
          window.__weddingAudioCtx = new AudioCtx();
        }
        if (window.__weddingAudioCtx.state === 'suspended') {
          window.__weddingAudioCtx.resume().catch(() => {});
        }
      }
    } catch (_) {}

    try {
      audio.muted = false;
      audio.volume = 0.8;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        await playPromise;
        setIsPlaying(true);
        setIsMuted(false);
        isAudibleRef.current = true;
        return true;
      }
    } catch (error) {
      // If browser Autoplay policy blocks audible play, keep playing muted in background
      // so audio keeps buffering, and wait for the next scroll/gesture
      audio.muted = true;
      audio.play().catch(() => {});
      setIsMuted(true);
      isAudibleRef.current = false;
      return false;
    }
    return false;
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let mounted = true;
    audio.loop = true;
    audio.volume = 0.8;
    audio.muted = true;

    // Start silent playback immediately on load so it buffers and is ready
    audio.play()
      .then(() => {
        if (!mounted) return;
        setIsPlaying(true);
        setIsMuted(true);
      })
      .catch(() => {
        // Silent autoplay blocked or deferred
      });

    let listenersAttached = false;

    const SCROLL_EVENTS = [
      'scroll',
      'wheel',
      'touchmove',
      'touchstart',
      'touchend',
      'pointerdown',
      'pointerup',
      'keydown'
    ];

    const handleInitialScroll = async (e) => {
      // Don't trigger if interacting with the music player button directly
      if (e?.target?.closest?.('.music-player-fab')) return;
      if (userMutedRef.current || isAudibleRef.current) {
        removeScrollListeners();
        return;
      }

      const success = await triggerAudioPlayback();
      if (success) {
        removeScrollListeners();
      }
    };

    const attachScrollListeners = () => {
      if (listenersAttached) return;
      listenersAttached = true;
      SCROLL_EVENTS.forEach((evt) => {
        window.addEventListener(evt, handleInitialScroll, { capture: true, passive: true });
        document.addEventListener(evt, handleInitialScroll, { capture: true, passive: true });
      });
    };

    const removeScrollListeners = () => {
      if (!listenersAttached) return;
      listenersAttached = false;
      SCROLL_EVENTS.forEach((evt) => {
        window.removeEventListener(evt, handleInitialScroll, true);
        document.removeEventListener(evt, handleInitialScroll, true);
      });
    };

    // Attach listeners immediately
    attachScrollListeners();

    // If page is already scrolled on mount (e.g. reload), trigger immediately on any first tick
    if (window.scrollY > 0 || document.documentElement.scrollTop > 0) {
      handleInitialScroll();
    }

    // Native audio state synchronization
    const onPlay = () => { if (mounted) setIsPlaying(true); };
    const onPause = () => { if (mounted && userMutedRef.current) setIsPlaying(false); };
    const onVolumeChange = () => {
      if (!mounted) return;
      const audible = !audio.muted && audio.volume > 0 && !audio.paused;
      setIsMuted(!audible);
      isAudibleRef.current = audible;
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('volumechange', onVolumeChange);

    return () => {
      mounted = false;
      removeScrollListeners();
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('volumechange', onVolumeChange);
    };
  }, [triggerAudioPlayback]);

  // Manual toggle by user
  const toggleMusic = useCallback(async (e) => {
    e.stopPropagation();
    e.preventDefault();

    const audio = audioRef.current;
    if (!audio) return;

    const isCurrentlyAudible = !audio.paused && !audio.muted;

    if (isCurrentlyAudible) {
      // User explicitly clicked mute
      userMutedRef.current = true;
      isAudibleRef.current = false;
      audio.muted = true;
      setIsMuted(true);
    } else {
      // User explicitly clicked unmute / play
      userMutedRef.current = false;
      await triggerAudioPlayback();
    }
  }, [triggerAudioPlayback]);

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
              width="24"
              height="24"
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
            /* Muted speaker with cross */
            <svg
              width="24"
              height="24"
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
      </button>

      <audio
        ref={audioRef}
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="/music/background-music.mp3" type="audio/mpeg" />
        <source src={bgMusic} type="audio/mpeg" />
      </audio>
    </div>
  );
}
