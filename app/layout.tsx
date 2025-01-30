import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/module/Header/Header";
import { GlobalContext } from "@/context/Context";
import { QueryProvider } from "@/query/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashyo store",
  description: "Ashyo store generated from N13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        <GlobalContext>
          <QueryProvider>
          <Header />
          {children}
          </QueryProvider>
        </GlobalContext>
      </body>
    </html>
  );
}
