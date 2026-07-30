"use client";

import { useEffect, useState } from "react";

type ConnectionLike = {
  saveData?: boolean;
  effectiveType?: string;
};

function shouldLoadVideo() {
  if (typeof window === "undefined") return false;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }

  const connection = (
    navigator as Navigator & { connection?: ConnectionLike }
  ).connection;

  if (connection?.saveData) return false;
  if (
    connection?.effectiveType &&
    ["slow-2g", "2g", "3g"].includes(connection.effectiveType)
  ) {
    return false;
  }

  return true;
}

/**
 * The hero background: a lightweight poster image paints immediately (good LCP
 * on mobile) and the looping video is attached only after the page has loaded,
 * so it never competes with the critical render.
 */
export function HeroBackground() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const attachVideo = () => {
      if (cancelled || !shouldLoadVideo()) return;

      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      setVideoSrc(isMobile ? "/Hero/bg-mobile.webm" : "/Hero/bg.webm");
    };

    const schedule = () => {
      const idle = (
        window as unknown as {
          requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        }
      ).requestIdleCallback;

      if (typeof idle === "function") {
        idle(attachVideo, { timeout: 2500 });
      } else {
        window.setTimeout(attachVideo, 1200);
      }
    };

    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
    };
  }, []);

  return (
    <div className="hero-bg" aria-hidden>
      {videoSrc && (
        <video
          className="hero-bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/Hero/bg-poster.webp"
          src={videoSrc}
        />
      )}
      <div className="hero-bg-overlay" />
    </div>
  );
}
