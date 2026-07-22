"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useScreenWidth } from "@/useFunc/useScreenWidth";

export default function CustomCursor() {
  const width = useScreenWidth();
  const pathname = usePathname();

  // Не показуємо кастомний курсор в адмінці
  if (pathname.startsWith("/admin")) {
    return null;
  }

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

      setHovered(!!target.closest("[data-cursor='hover']"));
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  if (width <= 1024) return;

  return (
    <div
      className={`custom-cursor ${hovered ? "hovered" : ""}`}
      style={{
        transform: `translate(${position.x - 20}px, ${position.y}px)`,
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
