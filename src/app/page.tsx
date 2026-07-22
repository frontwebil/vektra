import { AboutUs } from "@/components/AboutUs/AboutUs";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { ContactFormSection } from "@/components/ContactFormSection/ContactFormSection";
import { Faq } from "@/components/Faq/Faq";
import { Footer } from "@/components/Layouts/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Header } from "@/components/Layouts/Header/Header";
import { NextStep } from "@/components/NextStep/NextStep";
import { SeoBlock } from "@/components/SeoBlock/SeoBlock";
import { Services } from "@/components/Services/Services";
import { Solutions } from "@/components/Solutions/Solutions";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const testimonials = await prisma.testimonials.findMany({
    orderBy: {
      position: "asc",
    },
  });
  return (
    <>
      <ContactForm />
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <AboutUs /> */}
      {/* <Services /> */}
      {/* <Solutions /> */}
      {/* <Testimonials testimonials={testimonials} /> */}
      <Faq />
      <NextStep />
      <ContactFormSection />
      <SeoBlock />
      <Footer />
    </>
  );
}
