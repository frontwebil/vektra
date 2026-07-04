"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Testimonials } from "../../../generated/prisma/client";
import { IoIosArrowDown } from "react-icons/io";

const COLLAPSED_HEIGHT = 72; // ~4 lines

export function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonials;
}) {
  const [expanded, setExpanded] = useState(false);
  const [needsToggle, setNeedsToggle] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const [fullHeight, setFullHeight] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      const scrollH = textRef.current.scrollHeight;
      setFullHeight(scrollH);
      setNeedsToggle(scrollH > COLLAPSED_HEIGHT);
    }
  }, [testimonial.text]);

  return (
    <div className="testimonials-card">
      <div className="testimonials-card-top">
        <div className="testimonials-card-img">
          <Image
            src={testimonial.avatarUrl || "/Testimonials/placeholder.png"}
            alt="avatar"
            width={120}
            height={120}
          />
        </div>
        <div className="testimonials-card-top-text">
          <h2 className="testimonials-card-top-name">{testimonial.name}</h2>
          <span className="testimonials-card-top-category">
            {testimonial.category}
          </span>
        </div>
      </div>

      <div
        ref={textRef}
        className={`testimonials-card-text ${!expanded && needsToggle ? "testimonials-card-text--clamped" : ""}`}
        style={{
          maxHeight: expanded ? `${fullHeight}px` : `${COLLAPSED_HEIGHT}px`,
        }}
      >
        {testimonial.text}
      </div>

      {needsToggle && (
        <button
          className="testimonials-card-text-more"
          onClick={() => setExpanded(!expanded)}
          data-cursor="hover"
        >
          <p>{expanded ? "Згорнути" : "Розгорнути"}</p>
          <IoIosArrowDown
            className={`testimonials-card-arrow ${expanded ? "testimonials-card-arrow--up" : ""}`}
          />
        </button>
      )}
    </div>
  );
}
