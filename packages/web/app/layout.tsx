import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

const cfont = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gitemo",
  description:
    "A simple, fast, and lightweight CLI tool for creating your production level commits with emojis."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
        <link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>
        </head>
        <body className={cfont.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
