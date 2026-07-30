import { AboutUs } from "@/components/AboutUs/AboutUs";
import { ContactFormLazy } from "@/components/ContactForm/ContactFormLazy";
import { ContactFormSection } from "@/components/ContactFormSection/ContactFormSection";
import { Faq } from "@/components/Faq/Faq";
import { FaqJsonLd } from "@/components/Faq/FaqJsonLd";
import { Footer } from "@/components/Layouts/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Header } from "@/components/Layouts/Header/Header";
import { NextStep } from "@/components/NextStep/NextStep";
import { SeoBlock } from "@/components/SeoBlock/SeoBlock";
import { Services } from "@/components/Services/Services";
import { Solutions } from "@/components/Solutions/Solutions";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { prisma } from "@/lib/prisma";

export const revalidate = 300;

async function getTestimonials() {
  try {
    return await prisma.testimonials.findMany({
      orderBy: {
        position: "asc",
      },
    });
  } catch (error) {
    console.error("Failed to load testimonials", error);
    return [];
  }
}

export default async function Home() {
  const testimonials = await getTestimonials();
  return (
    <>
      <ContactFormLazy />
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Solutions />
      <Testimonials testimonials={testimonials} />
      <Faq />
      <FaqJsonLd />
      <NextStep />
      <ContactFormSection />
      <SeoBlock />
      <Footer />
    </>
  );
}
