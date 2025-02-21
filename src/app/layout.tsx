import React from "react";
import {ThemeProvider} from "@/app/providers/theme-provider";
import {ThemeToggle} from "./components/theme-toggle";
import "./globals.css";

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
    return (
        <html lang="fr" suppressHydrationWarning>
        <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <ThemeToggle/>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}

