'use client';

import { useRef, useState } from 'react';

/**
 * Wraps the card in a 3D scene: the panel tilts toward the pointer and its
 * contents sit at different depths. All motion collapses under
 * prefers-reduced-motion (the handler checks it, and CSS gates the bob).
 */
export function FloatCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number } | null>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 9, y: px * 11 });
  };

  const onLeave = () => setTilt(null);

  return (
    <div className="float-scene" onPointerMove={onMove} onPointerLeave={onLeave}>
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
          <div className="float-body">{children}</div>
        </div>
        <div className="float-shadow" aria-hidden="true" />
      </div>
    </div>
  );
}
