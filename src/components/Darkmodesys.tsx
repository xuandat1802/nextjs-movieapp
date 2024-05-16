'use client'
import React from 'react'
import { MdLightMode,MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'
import { useState,useEffect } from 'react'
export default function Darkmodesys() {
    const {theme,setTheme,systemTheme}= useTheme();
    const currenttheme = theme ==='system' ? systemTheme:theme;
   const [mounted,setmounted] = useState<boolean>(false);
   useEffect(()=>setmounted(true),[]);
  return (
    <div>
        {mounted&&

            currenttheme ==='dark'?<MdLightMode onClick={()=>setTheme('light')} className='text-xl cursor-pointer hover:text-amber-500 '/>:
            <MdDarkMode onClick={()=>setTheme('dark')}   className='text-xl cursor-pointer hover:text-amber-500 '/>
        }
    </div>
  )
}
