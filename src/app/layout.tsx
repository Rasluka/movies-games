import type { Metadata } from "next";
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "PureCinema!",
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
        {/* <Navbar /> */}
        <Navbar />

        <div className="lg:w-3/6 lg:mx-auto">{children}</div>
      </body>
    </html>
  );
}
