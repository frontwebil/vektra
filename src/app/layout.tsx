import localFont from "next/font/local";
import type { Metadata } from "next";
import { Montserrat, Ubuntu } from "next/font/google";
import "./globals.css";
import "./reset.css";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import { Toaster } from "sonner";

const montserrat = Montserrat({ subsets: ["latin"] });
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
const nyghtSerif = localFont({
  src: [
    {
      path: "./fonts/NyghtSerif-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/NyghtSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NyghtSerif-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NyghtSerif-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-nyght-serif",
});

export const metadata: Metadata = {
  title: "Vektra ",
  description:
    "Vektra — digital IT агенція, що спеціалізується на стратегії бренду, брендингу, UX/UI дизайні, редизайні та full-stack розробці. Створюємо сучасні digital-рішення для бізнесу.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.className} ${ubuntu.className} ${nyghtSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
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
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
