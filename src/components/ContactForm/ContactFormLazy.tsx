"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useIsOpenForm } from "@/Zustand/isOpenForm";

const ContactForm = dynamic(
  () => import("./ContactForm").then((m) => m.ContactForm),
  { ssr: false },
);

export function ContactFormLazy() {
  const { isOpenContactForm } = useIsOpenForm();
  const [wasOpened, setWasOpened] = useState(false);

  if (isOpenContactForm && !wasOpened) {
    setWasOpened(true);
  }

  if (!wasOpened) return null;

  return <ContactForm />;
}
