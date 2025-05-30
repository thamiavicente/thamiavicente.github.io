import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/components/00-style/globals.scss";
import Header from "@/components/03-organisms/header/header";
import Footer from "@/components/03-organisms/footer/footer";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thamiris Vicente - Portfolio",
  description: "Know about Thamiris Vicente's work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
