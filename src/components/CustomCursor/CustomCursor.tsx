"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

const COARSE_POINTER = "(pointer: coarse)";

function subscribeToPointer(onChange: () => void) {
  const mediaQuery = window.matchMedia(COARSE_POINTER);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function isCoarsePointer() {
  return window.matchMedia(COARSE_POINTER).matches;
}

export default function CustomCursor() {
  const pathname = usePathname();

  // `true` while rendering on the server, so touch devices never download the
  // cursor images.
  const isTouchDevice = useSyncExternalStore(
    subscribeToPointer,
    isCoarsePointer,
    () => true,
  );

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target as HTMLElement;

      setHovered(!!target.closest("[data-cursor='hover']"));
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isTouchDevice]);

  if (pathname.startsWith("/admin") || isTouchDevice) {
    return null;
  }

  return (
    <div
      className={`custom-cursor ${hovered ? "hovered" : ""}`}
      style={{
        transform: `translate(${position.x - 20}px, ${position.y}px)`,
      }}
    >
      <Image
        src={hovered ? "/cursor-hover.webp" : "/cursor.webp"}
        alt=""
        width={120}
        height={67}
        aria-hidden="true"
      />
    </div>
  );
}
