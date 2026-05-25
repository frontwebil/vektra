"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target as HTMLElement;

      if (target.closest("[data-cursor='hover']")) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovered ? "hovered" : ""}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <Image
        src={hovered ? "/cursor-hover.webp" : "/cursor.webp"}
        alt="cursor"
        width={100}
        height={100}
        priority
      />
    </div>
  );
}
