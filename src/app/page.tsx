"use client";

import { AboutUs } from "@/components/AboutUs/AboutUs";
import { Hero } from "@/components/Hero/Hero";
import { Header } from "@/components/Layouts/Header/Header";
import { Services } from "@/components/Services/Services";
import { Solutions } from "@/components/Solutions/Solutions";
import { useEffect, useState } from "react";

export default function Home() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Solutions />
    </>
  );
}
