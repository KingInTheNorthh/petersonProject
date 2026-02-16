import type { Metadata } from "next";
import { Jersey_25 } from "next/font/google";
import "./globals.css";

const jersey = Jersey_25({
  weight: "400",
  variable: "--font-jersey",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Peterson Project",
  description: "Tech blog and personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jersey.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
