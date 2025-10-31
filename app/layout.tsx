import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { ThemeProvider } from "@/components/theme-provider";
import IntlClientProvider from "@/components/IntlClientProvider";
import "styles/globals.css";

import frMessages from "../locales/fr.json";
import enMessages from "../locales/en.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fluxyte - Agence de Développement Web et Mobile",
  description:
    "Fluxyte est une agence spécialisée dans le développement web, mobile, le design et le marketing digital.",
  keywords:
    "développement web, applications mobiles, design, marketing digital, React, Next.js",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  const locale = params?.locale || "fr";
  const messages = locale === "en" ? enMessages : frMessages;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <IntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className="relative z-0">{children}</main>
            <FloatingActions locale={locale} />
            <Footer />
          </IntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
