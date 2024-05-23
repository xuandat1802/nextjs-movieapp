import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex gap-x-6 p-5 bg-amber-300 dark:bg-slate-400 text-center justify-center">
      <NavbarItem title="Trending" param="fetchtrending" />
      <NavbarItem title="Top Rating" param="fetchrarting" />
    </div>
  );
}
