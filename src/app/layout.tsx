import type { Metadata, Viewport } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rahul M K | UI/UX Designer & Front-End Developer Portfolio",
  description: "Explore the creative portfolio of Rahul M K, a UI/UX Designer and Front-End Developer specialized in interactive 3D web experiences, design systems, and responsive applications.",
  keywords: ["Rahul M K", "UI/UX Design", "Front-End Developer", "Three.js", "React Three Fiber", "Next.js Portfolio", "Figma Design", "Framer Motion", "GSAP"],
  authors: [{ name: "Rahul M K" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#000000] text-[#F8FAFC]">
        {children}
      </body>
    </html>
  );
}
