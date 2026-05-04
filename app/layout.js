import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import LoadingWrapper from "@/components/LoadingWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Shyam E-Commerce | Divine Shopping Experience",
  description: "Shop premium products with the blessings of Krishna.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <LoadingWrapper>
          {children}
        </LoadingWrapper>
      </body>
    </html>
  );
}
