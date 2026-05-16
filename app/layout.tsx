import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinanceFlow — Master Your Money",
  description:
    "Learn personal finance, track SIP investments, and build lasting financial habits with interactive quizzes and powerful tools. Free for everyone.",
  keywords: ["personal finance", "SIP calculator", "financial literacy", "budgeting", "investing"],
  openGraph: {
    title: "FinanceFlow — Master Your Money",
    description:
      "Learn personal finance, track SIP investments, and build lasting financial habits with interactive quizzes and powerful tools.",
    url: "https://finnanceflow.buildwithyash.com",
    siteName: "FinanceFlow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinanceFlow — Master Your Money",
    description:
      "Learn personal finance, track SIP investments, and build lasting financial habits.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
