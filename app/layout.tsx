import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "RAQZ* - Music Creator & Developer",
  description: "Portfolio showcasing music releases and technical projects. Crafting immersive soundscapes and building innovative digital experiences.",
  keywords: ["music", "developer", "portfolio", "projects", "audio", "web development", "RAQZ"],
  authors: [{ name: "RAQZ*" }],
  creator: "RAQZ*",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "RAQZ* - Music Creator & Developer",
    description: "Portfolio showcasing music releases and technical projects",
    siteName: "RAQZ* Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAQZ* - Music Creator & Developer",
    description: "Portfolio showcasing music releases and technical projects",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-helvetica antialiased">
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
