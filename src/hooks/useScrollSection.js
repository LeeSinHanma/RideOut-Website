import { useEffect, useState } from 'react';

export function getScrollSection(elements, readingLine) {
  const index = elements.findLastIndex(element => element && element.getBoundingClientRect().top <= readingLine);
  return Math.max(0, index);
}

export default function useScrollSection(selectors) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const elements = selectors.map(selector => document.querySelector(selector));
    let frame;
    const update = () => {
      frame = undefined;
      // Use the same reading line for sticky cards, feature screens, and Ryder.
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      const readingLine = atBottom ? window.innerHeight : window.innerHeight * 0.45;
      setActiveIndex(getScrollSection(elements, readingLine));
    };
    const schedule = () => {
      if (frame === undefined) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    schedule();
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [selectors]);

  return activeIndex;
}
