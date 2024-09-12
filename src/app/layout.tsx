import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pure Cinema!",
  description: "A TMDB Clone",
};

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSansPro.className}`}>
        <Navbar />

        <div className="w-3/6 mx-auto">{children}</div>
      </body>
    </html>
  );
}
