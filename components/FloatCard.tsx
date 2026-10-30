'use client';

import { useRef, useState } from 'react';

/**
 * Floating, flippable business card. The panel tilts toward the pointer,
 * idles on a bob, and flips front-to-back on click / Enter / Space.
 * All motion collapses under prefers-reduced-motion.
 */
export function FloatCard({
  front,
  back,
}: {
  front: React.ReactNode;
  back: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number } | null>(null);
  const [flipped, setFlipped] = useState(false);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 8, y: px * 10 });
  };

  const onLeave = () => setTilt(null);
  const toggle = () => setFlipped((f) => !f);

  return (
    <div className="flip-scene" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div
        ref={ref}
        className={`float-card${tilt ? ' is-tilting' : ''}`}
        style={
          tilt
            ? { transform: `rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg)` }
            : undefined
        }
      >
        <div className="float-bob">
          <div
            className={`flip-inner${flipped ? ' is-flipped' : ''}`}
            role="button"
            tabIndex={0}
            aria-pressed={flipped}
            aria-label="Business card. Activate to flip to the contact side."
            onClick={toggle}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle();
              }
            }}
          >
            <div className="card-face card-front">{front}</div>
            <div className="card-face card-back">{back}</div>
          </div>
        </div>
        <div className="float-shadow" aria-hidden="true" />
      </div>
    </div>
  );
}
