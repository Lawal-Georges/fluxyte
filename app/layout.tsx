// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import "styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fluxyte - Agence de Développement Web et Mobile",
  description:
    "Fluxyte est une agence spécialisée dans le développement web, mobile, le design et le marketing digital.",
  keywords:
    "développement web, applications mobiles, design, marketing digital, React, Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        {/* ✅ Mettre ThemeProvider au plus haut niveau et ajouter attribute="class" */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="relative z-0">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
