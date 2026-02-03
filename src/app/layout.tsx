import type { Metadata } from "next";
import "./globals.css";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
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
    <html lang="ro" className={`${dmSans.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>

    </html>
  );
}
