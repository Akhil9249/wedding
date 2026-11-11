import { useEffect } from 'react';

export function useScrollReveal(selector = '.scroll-reveal', threshold = 0.08) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else if (entry.boundingClientRect.top > (window.innerHeight || document.documentElement.clientHeight)) {
            // When element scrolls back below the viewport, allow it to animate again on next scroll
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { 
        threshold,
        rootMargin: '0px 0px -20px 0px'
      }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, threshold]);
}

