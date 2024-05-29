"use client";
import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
export default function DarkModeSys() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currenttheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => setMounted(true), []);
  return (
    <div>
      {mounted && currenttheme === "dark" ? (
        <MdDarkMode
          onClick={() => setTheme("light")}
          className="text-xl cursor-pointer hover:text-amber-500 "
        />
      ) : (
        <MdLightMode
          onClick={() => setTheme("dark")}
          className="text-xl cursor-pointer hover:text-amber-500 "
        />
      )}
    </div>
  );
}
