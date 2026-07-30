"use client";

import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";
import { useIsOpenForm } from "@/Zustand/isOpenForm";
import { useScreenWidth } from "@/useFunc/useScreenWidth";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openContactForm } = useIsOpenForm();
  const width = useScreenWidth();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY >= 100);
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  return (
    <header className={isScrolled ? "header--on-about" : undefined}>
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
          <p>/</p>
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
          </div>
        </nav>
        {width > 1100 && (
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
        )}
        {width <= 1100 && (
          <div className="header-buttons-mobile">
            {width > 540 && (
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
            )}

            <div
              className="burger-bg"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <button
                type="button"
                className={`burger ${isOpen ? "open" : ""}`}
                aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
                aria-expanded={isOpen}
              >
                <span />
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className={`burger-menu ${isOpen ? "open" : ""}`}>
        <div className="burger-menu-container">
          <nav className="header-burger-nav">
            <Link
              href={""}
              onClick={() => setIsOpen(false)}
              className="header-nav-link"
              data-cursor="hover"
            >
              Про нас.
            </Link>
            <Link
              href={""}
              onClick={() => setIsOpen(false)}
              className="header-nav-link"
              data-cursor="hover"
            >
              Послуги.
            </Link>
            <Link
              href={""}
              onClick={() => setIsOpen(false)}
              className="header-nav-link"
              data-cursor="hover"
            >
              Кейси.
            </Link>
            <Link
              href={""}
              onClick={() => setIsOpen(false)}
              className="header-nav-link"
              data-cursor="hover"
            >
              Відгуки.
            </Link>
            <Link
              href={""}
              onClick={() => setIsOpen(false)}
              className="header-nav-link"
              data-cursor="hover"
            >
              Контакти.
            </Link>
            <div className="header-nav-languague-switcher">
              <button
                className="header-nav-languague-switcher-button"
                data-cursor="hover"
              >
                UA
              </button>
              <button className="header-nav-languague-switcher-button">
                /
              </button>
              <button
                className="header-nav-languague-switcher-button"
                data-cursor="hover"
              >
                ENG
              </button>
            </div>
            {width <= 540 && (
              <div
                onClick={() => {
                  setIsOpen(false);
                  openContactForm();
                }}
                className={`header-button ${isOpen ? "menu-open" : ""}`}
                data-cursor="hover"
              >
                <div className="header-button-text">Зв’язатись з нами</div>
                <div className="header-button-icon">
                  <GoArrowUpRight />
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
