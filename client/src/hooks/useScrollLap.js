import { useEffect, useState } from 'react';

/**
 * Returns the current lap (1-based) based on which section's center
 * intersects the viewport center via IntersectionObserver.
 * @param {string[]} sectionIds - e.g. ['#hero', '#pipeline', ...] or ['hero', 'pipeline']
 */
export default function useScrollLap(sectionIds = []) {
  const [lap, setLap] = useState(1);
  const total = sectionIds.length || 1;

  useEffect(() => {
    if (!sectionIds.length) return undefined;

    const elements = sectionIds
      .map((id) => {
        const cleaned = id.startsWith('#') ? id.slice(1) : id;
        return { id: cleaned, el: document.getElementById(cleaned) };
      })
      .filter((item) => item.el);

    if (!elements.length) return undefined;

    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId = null;
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId) {
          const index = elements.findIndex((item) => item.id === bestId);
          if (index >= 0) setLap(index + 1);
        }
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: [0, 0.01, 0.25, 0.5, 1],
      },
    );

    elements.forEach(({ el }) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  const label = `${String(lap).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

  return { lap, total, label };
}
