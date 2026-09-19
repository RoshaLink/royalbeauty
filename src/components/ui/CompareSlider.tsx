"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

interface CompareSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  label?: string;
}

export function CompareSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  label,
}: CompareSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={containerRef}
        className="relative aspect-[4/5] w-full select-none overflow-hidden rounded-sm bg-emerald-900 sm:aspect-[16/10]"
        onPointerDown={(e) => {
          draggingRef.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          updateFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (draggingRef.current) updateFromClientX(e.clientX);
        }}
        onPointerUp={() => {
          draggingRef.current = false;
        }}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="pointer-events-none object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-4 top-4 flex justify-between text-[0.65rem] font-medium uppercase tracking-widest2 text-ivory-50">
          <span className="rounded-full bg-charcoal-950/50 px-3 py-1">Before</span>
          <span className="rounded-full bg-charcoal-950/50 px-3 py-1">After</span>
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-ivory-50"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory-50 text-emerald-950 shadow-lg">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
              <path
                d="M9 6L3 12L9 18M15 6L21 12L15 18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <label className="flex flex-col gap-2 text-xs text-charcoal-800/60">
        {label}
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`${label ?? "Before and after"} comparison slider`}
          className="h-1 w-full cursor-pointer appearance-none rounded-full bg-emerald-950/15 accent-emerald-700"
        />
      </label>
    </div>
  );
}
