import { ThemeProvider } from "@/app/providers/theme-provider"
import { ThemeToggle } from "./components/theme-toggle"
import "./globals.css"
import React from "react";

export default function RootLayout({
                                       children,
                                   }: { children: React.ReactNode })
{
    return (
        <html lang="fr" suppressHydrationWarning>
        <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <ThemeToggle />
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}

