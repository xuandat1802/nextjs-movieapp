"use client";
import React, { createContext } from "react";
import { ThemeProvider } from "next-themes";
export default function Providers({ children }: any) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-white dark:text-black dark:bg-white  select-none min-h-screen duration-300 transition-colors">
        {children}
      </div>
    </ThemeProvider>
  );
}
