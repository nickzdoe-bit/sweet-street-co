import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sweet Street Co | Meeker, OK",
  description: "Dirty sodas, real coffee, and croffles in Meeker, Oklahoma. Every drink honors a woman who changed the world. Next to PD on Carl Hubbell Blvd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-zinc-200 px-6 py-4 flex justify-center gap-8 text-sm font-semibold text-zinc-700">
          <a href="#menu" className="hover:text-red-600 transition">Menu</a>
          <a href="#story" className="hover:text-red-600 transition">Our Story</a>
          <a href="#visit" className="hover:text-red-600 transition">Visit</a>
          </nav>
          {children}
      </body>
    </html>
  );
}
