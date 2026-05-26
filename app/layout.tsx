import type { Metadata } from "next";
import { Geist, Geist_Mono,Quicksand,Playwrite_MX } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cafetería | Menú",
  description: "Cafetería",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className={`min-h-full flex flex-col ${quicksand.className}`}>{children}<div id="modal-root"/></body>
    </html>
  );
}
