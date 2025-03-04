import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Theme } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import { Providers } from "@/providers";
import { Navbar } from "@/components/ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eastown Hookah Lounge | Blaze Hookah Lounges",
  description: "Grand Rapids' premiere hookah experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <Providers>
            <Theme appearance="dark">
              <Navbar />
              {children}
            </Theme>
          </Providers>
        </Provider>
      </body>
    </html>
  );
}


/* TO DO:
Components needed: 
[]  SplitSection (Half image, half text block, hard split, no overlay)
[]  ContactForm (Simple dummy contact form)
[]  ParaBlock (Block for large swaths of text ie About Us)
[]  EventBlock (Calendar style display of weekly events)

Components needing refinement:
[x]  Footer (Switch hours to unordered list, add map, add company details)
[]  NavBar (Add colors for different link states)

Pages needed:
[]  Menu
[]  Events
[]  About
[]  Contact

Styling:
[x]  Adjust sizing for responsivity
[]  Finalize typography

Deploy
*/