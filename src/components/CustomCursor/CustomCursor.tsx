"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const pathname = usePathname();

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovered, setHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");

    const updateDevice = () => {
      setIsTouchDevice(mediaQuery.matches);
    };

    updateDevice();

    mediaQuery.addEventListener("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

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
        width={100}
        height={100}
        priority
      />
    </div>
  );
}
