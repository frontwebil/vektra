"use client";

import { AboutUs } from "@/components/AboutUs/AboutUs";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { Hero } from "@/components/Hero/Hero";
import { Header } from "@/components/Layouts/Header/Header";
import { Services } from "@/components/Services/Services";
import { Solutions } from "@/components/Solutions/Solutions";

export default function Home() {
  return (
    <>
      <ContactForm />
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Solutions />
    </>
  );
}
