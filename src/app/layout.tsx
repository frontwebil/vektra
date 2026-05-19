import localFont from "next/font/local";
import type { Metadata } from "next";
import { Montserrat, Ubuntu } from "next/font/google";
import "./globals.css";
import "./reset.css";

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
  ],
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
      className={`${montserrat.className} ${ubuntu.className} ${nyghtSerif.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
