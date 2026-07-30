"use client";

import dynamic from "next/dynamic";

const Toaster = dynamic(() => import("sonner").then((m) => m.Toaster), {
  ssr: false,
});

export function ToasterClient() {
  return (
    <Toaster
      position="top-right"
      theme="dark"
      toastOptions={{
        style: {
          background: "#0E1022",
          color: "#fff",
          border: "1px solid rgba(25, 61, 235, 0.35)",
          borderRadius: "14px",
          boxShadow: "0 10px 30px rgba(25, 61, 235, 0.2)",
        },
      }}
      richColors
      duration={5000}
    />
  );
}
