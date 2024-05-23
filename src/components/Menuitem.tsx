import React from 'react'
import Link from 'next/link'
export default function MenuItem({title,adress,Icon}:any) {
  return (
      <Link className='hover:text-amber-400' href={adress}>
        <Icon className='sm:hidden text-2xl'/>
        <p className='text-2x hidden sm:inline text-sm uppercase'>{title}</p>  
      </Link>
  )
}
