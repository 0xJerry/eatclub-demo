import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import NavBar from "@/components/NavBar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EatClub demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
