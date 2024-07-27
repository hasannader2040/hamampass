import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const locales = ["en", "tr"];

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}