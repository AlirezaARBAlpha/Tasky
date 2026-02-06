"use client"

import { useAppSelector } from "@/hooks/hooks"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect } from "react"

export function ThemeLayoutWrapper({ children }: { children: React.ReactNode }) {
  const { lang, dir } = useAppSelector((state) => state.auth)

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div 
        className={lang === "fa" ? "font-vazir min-h-screen" : "font-sans min-h-screen"}
      >
        {children}
      </div>
    </NextThemesProvider>
  )
}