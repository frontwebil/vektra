"use client";

import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";
import { useIsOpenForm } from "@/Zustand/isOpenForm";

export function Header() {
  const [isOnAbout, setIsOnAbout] = useState(false);
  const { openContactForm } = useIsOpenForm();

  useEffect(() => {
    const aboutSection = document.getElementById("about-us");
    if (!aboutSection) return;

    const updateHeader = () => {
      const headerOffset = 84;
      setIsOnAbout(aboutSection.getBoundingClientRect().top <= headerOffset);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  return (
    <header className={isOnAbout ? "header--on-about" : undefined}>
      <div className="container">
        <div className="header-logo" data-cursor="hover">
          <Image
            src={"/Logo/Vektra-white.svg"}
            width={235}
            height={100}
            alt="Vektra"
          />
          <p className="header-logo-text">agency</p>
        </div>
        <nav className="header-nav">
          <Link href={""} className="header-nav-link" data-cursor="hover">
            Про нас.
          </Link>
          <Link href={""} className="header-nav-link" data-cursor="hover">
            Послуги.
          </Link>
          <Link href={""} className="header-nav-link" data-cursor="hover">
            Кейси.
          </Link>
          <Link href={""} className="header-nav-link" data-cursor="hover">
            Відгуки.
          </Link>
          <Link href={""} className="header-nav-link" data-cursor="hover">
            Контакти.
          </Link>
          {/* <p>/</p>
          <div className="header-nav-languague-switcher">
            <button
              className="header-nav-languague-switcher-button"
              data-cursor="hover"
            >
              UA
            </button>
            <button
              className="header-nav-languague-switcher-button"
              data-cursor="hover"
            >
              ENG
            </button>
          </div> */}
        </nav>
        <div
          onClick={() => openContactForm()}
          className="header-button"
          data-cursor="hover"
        >
          <div className="header-button-text">Зв’язатись з нами</div>
          <div className="header-button-icon">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </header>
  );
}
