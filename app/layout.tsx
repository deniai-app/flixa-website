import type { Metadata } from "next";
import { Geist, Geist_Mono,Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flixa — AI Coding Agent for VS Code, Cursor & More",
  description:
    "Supercharge your development workflow with Flixa, an AI-powered coding agent. Context-aware completions, instant refactoring, and natural language commands. Powered by Deni AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans tracking-tight antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
