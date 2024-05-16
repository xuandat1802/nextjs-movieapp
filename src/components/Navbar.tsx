import React from 'react'
import Navbaritem from './Navbaritem'

export default function Navbar() {
  return (
    <div className='flex gap-x-6 p-5 bg-amber-300 dark:bg-amber-100 text-center justify-center'>
      <Navbaritem title='top trending' param='fetchtrending'/>
      <Navbaritem title='top rating' param='fetchrarting'/>

    </div>
  )
}
