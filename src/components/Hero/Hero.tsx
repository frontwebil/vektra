"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import "./style.css";
import "./layout.css";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;

    const rect = hero.getBoundingClientRect();
    glow.style.left = `${e.clientX - rect.left}px`;
    glow.style.top = `${e.clientY - rect.top}px`;
    glow.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    const glow = glowRef.current;
    if (!glow) return;
    glow.style.opacity = "0";
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={glowRef} className="hero-cursor-glow" aria-hidden />      <div className="hero-layout">
        <div className="hero-layout-first-column">
          <div className="first"></div>
          <div></div>
          <div>
            <Image
              src={"/Hero/star-1.svg"}
              className="star-1"
              width={50}
              height={50}
              alt="."
            />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="hero-layout-main-column">
          <div className="first"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>
            <Image
              src={"/Hero/star-2.svg"}
              className="star-2"
              width={50}
              height={50}
              alt="."
            />
          </div>
        </div>
        <div className="hero-layout-main-column">
          <div className="first"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="hero-layout-main-column">
          <div className="first"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="hero-layout-main-column">
          <div className="first"></div>
          <div>
            <Image
              src={"/Hero/star-3.svg"}
              className="star-3"
              width={50}
              height={50}
              alt="."
            />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="hero-layout-last-column">
          <div className="first"></div>
          <div></div>
          <div></div>
          <div>
            <Image
              src={"/Hero/star-4.svg"}
              className="star-4"
              width={50}
              height={50}
              alt="."
            />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="container">
        <div className="hero-top">
          <div className="hero-absolute-text-card hero-top-1">Дизайн</div>
          <div className="hero-absolute-text-card hero-top-2">Розробка</div>
          <Image
            src={"/Hero/shape.png"}
            width={180}
            height={180}
            alt=""
            className="hero-top-img"
          />
        </div>
        <div className="hero-main-content">
          <h1>
            Створюємо <span className="hero-main-content-span-1"></span> <br />
            <span className="hero-main-content-span-2"></span> цифрові продукти{" "}
            <br />
            які{" "}
            <span className="hero-main-content-italic">задають напрямок</span>
          </h1>
          <h2>Дизайн, розробка та SEO як єдина система росту бізнесу</h2>
          <div className="hero-main-content-buttons">
            <button className="hero-main-content-button-learn-more">
              Дізнатись більше
            </button>
            <button className="hero-main-content-button-learn-services">
              Ознайомитись із послугами
            </button>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-absolute-text-card hero-bottom-1">Зростання</div>
          <div className="hero-absolute-text-card hero-bottom-2">
            Масштабування
          </div>
          <Image
            src={"/Hero/shape-2.png"}
            width={180}
            height={180}
            alt=""
            className="hero-bottom-img"
          />
        </div>
      </div>
    </section>
  );
}
