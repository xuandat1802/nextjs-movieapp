'use client'
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
export default function Navbaritem({title,param}:any) {
    const searchparam= useSearchParams();
    const pm=searchparam.get(param);
  return (
   <div>
    <Link
    className={'hover:text-amber-500'}
    href= {`/?genre=${param}`}>
    {title}
    </Link>
   </div>
  )
}
