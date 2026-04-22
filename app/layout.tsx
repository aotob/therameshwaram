import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: "The Rameshwaram | Luxury Wedding Planner in Bhopal",
    template: "%s | The Rameshwaram",
  },
  description: "Premium wedding and event planning services in Bhopal, Madhya Pradesh. We specialize in luxury weddings, corporate events, and exquisite decorations.",
  keywords: ["wedding planner in Bhopal", "event planner in Bhopal", "wedding decoration services Bhopal", "catering services in Bhopal"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-cream text-gray-900 font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
