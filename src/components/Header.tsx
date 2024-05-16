import React from 'react';
import Menuitem from './Menuitem';
import { AiFillHome } from 'react-icons/ai';
import { BsInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import Darkmodesys from './Darkmodesys';



export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex gap-4'>
        <Menuitem title='home' adress='/' Icon={AiFillHome}/>
        <Menuitem title='about' adress='/about' Icon={BsInfoCircleFill}/>
      </div>

    <div className='flex gap-2 items-center'>
        <Darkmodesys/>
    <Link href={"/"} className='flex gap-1 items-center'>
        <span className='bg-amber-500 font-bold rounded-lg py-1 px-2 text-2xl'>
            IMDB
        </span>
        <span className='text-xl hidden sm:inline '>
            Clone
        </span>
      </Link>
    </div>

      
    </div>
  )
}

