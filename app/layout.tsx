import type { Metadata } from "next";
import { Poppins, Bona_Nova } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import { siteConfig } from "@/config/site";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const bonaNova = Bona_Nova({
  weight: ["400", "700", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-bona-nova",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    url: "https://www.kitfest.co.ke",
    siteName: "KITFest",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${bonaNova.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
