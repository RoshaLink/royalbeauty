"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useReducedMotion } from "@/lib/useReducedMotion";

let registered = false;

function ensureScrollTriggerRegistered() {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

/**
 * Runs a GSAP setup function scoped to `scope`, wired into ScrollTrigger,
 * and tears it down on unmount. No-ops entirely under reduced-motion.
 */
export function useGsapScrollTrigger(
  scope: RefObject<HTMLElement>,
  setup: (context: { gsap: typeof gsap }) => void,
  deps: unknown[] = [],
) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !scope.current) return;

    ensureScrollTriggerRegistered();

    const ctx = gsap.context(() => setup({ gsap }), scope);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion, ...deps]);
}
