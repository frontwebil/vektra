"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useIsOpenForm } from "@/Zustand/isOpenForm";

const ContactForm = dynamic(
  () => import("./ContactForm").then((m) => m.ContactForm),
  { ssr: false },
);

/**
 * The contact modal is only needed once the user asks for it, so its JS and CSS
 * are fetched on the first open instead of on every page load.
 */
export function ContactFormLazy() {
  const { isOpenContactForm } = useIsOpenForm();
  const [wasOpened, setWasOpened] = useState(false);

  // Render-phase update: remember the first open so the modal stays mounted.
  if (isOpenContactForm && !wasOpened) {
    setWasOpened(true);
  }

  if (!wasOpened) return null;

  return <ContactForm />;
}
