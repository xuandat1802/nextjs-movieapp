import React from 'react'
import Navbaritem from './Navbaritem'

export default function Navbar() {
  return (
    <div className='flex gap-x-6 p-5 bg-amber-300 dark:bg-slate-400 text-center justify-center'>
      <Navbaritem title='Trending' param='fetchtrending'/>
      <Navbaritem title='Top Rating' param='fetchrarting'/>

    </div>
  )
}
