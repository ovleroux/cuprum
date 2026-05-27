import type { Metadata } from "next";
import Sandvik_Sans  from "next/font/local";
// import Sandvik_Sans_Headline from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { Variable } from "lucide-react";

const sandvikText = Sandvik_Sans({
  src: [
    {
      path: './fonts/sandvik-sans/SandvikSansText-Light.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/sandvik-sans/SandvikSansText-LightItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/sandvik-sans/SandvikSansText-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/sandvik-sans/SandvikSansText-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: "--sandvik-sans",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cuprum",
  description: "Freight & Compliance Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sandvikText.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
