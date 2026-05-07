import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maranathamc.com"),
  title: "Iglesia Maranatha | Iglesia Cristiana en Montería, Córdoba",
  description:
    "Iglesia Maranatha en Montería, Córdoba. Somos una iglesia cristiana de fe, amor y poder. Únete a nuestros servicios los domingos a las 10:00 a.m.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Iglesia Maranatha | Iglesia Cristiana en Montería, Córdoba",
    description:
      "Somos una iglesia cristiana de fe, amor y poder en Montería, Córdoba. Únete a nuestros servicios los domingos a las 10:00 a.m.",
    url: "https://www.maranathamc.com",
    siteName: "Iglesia Maranatha",
    images: [
      {
        url: "/images/logoMaranatha.png",
        width: 800,
        height: 800,
        alt: "Logo de Iglesia Maranatha",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iglesia Maranatha | Iglesia Cristiana en Montería, Córdoba",
    description:
      "Somos una iglesia cristiana de fe, amor y poder en Montería, Córdoba. Únete a nuestros servicios los domingos a las 10:00 a.m.",
    images: ["/images/logoMaranatha.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/images/logoMaranatha.png",
    apple: "/images/logoMaranatha.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://w.behold.so" />
      </head>
      <body className={`antialiased ${playfairDisplay.variable}`} suppressHydrationWarning>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
