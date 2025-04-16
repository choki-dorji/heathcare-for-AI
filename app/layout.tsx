'use client' // Make layout a client component to use hooks

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/sidebar"
import { Chatbot } from "@/components/chat-bot"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { usePathname } from 'next/navigation' // Import usePathname
import { cn } from "@/lib/utils"

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] })

// Note: Metadata should ideally be defined in a server component parent or directly here if static
// export const metadata: Metadata = {
//   title: "Cancer Survivor Care Dashboard",
//   description: "Personalized care plans for cancer survivors",
//     generator: 'v0.dev'
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname() // Get current path
  const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/register') // Check if it's an auth page

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light">
          <div className="flex h-screen">
            {!isAuthPage && <Sidebar />} {/* Conditionally render Sidebar */}
            <main className={cn("flex-1 overflow-auto bg-slate-50", isAuthPage ? "w-full" : "")}>
              {children}
            </main>
            {!isAuthPage && <Chatbot />} {/* Conditionally render Chatbot */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'