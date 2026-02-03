import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});


export const metadata: Metadata = {
  title: "Akkert",
  description: "Green oasis in the city.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "AKKERT",
    description: "Green oasis in the city.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "AKKERT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AKKERT",
    description: "Green oasis in the city.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}>
      <body className="antialiased">
        <Header />
        <main style={{ paddingTop: 96, minHeight: "100vh" }}>
          {children}
        </main>
        <Footer />
      </body>

    </html>
  );
}
