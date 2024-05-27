import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { HiHeart } from "react-icons/hi";
import Link from "next/link";
import DarkModeSys from "./DarkModeSys";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" adress="/" Icon={AiFillHome} />
        <MenuItem title="about" adress="/about" Icon={BsInfoCircleFill} />
        <MenuItem title="favorite" adress="/favorites" Icon={HiHeart} />
      </div>

      <div className="flex gap-2 items-center">
        <DarkModeSys />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="bg-amber-500 font-bold rounded-lg py-1 px-2 text-2xl">
            IMDB
          </span>
          <span className="text-xl hidden sm:inline ">Clone</span>
        </Link>
      </div>
    </div>
  );
}
