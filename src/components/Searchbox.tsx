'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
export default function Searchbox() {
    const[Search,setsearch] = useState<any>('');
    const Router=useRouter();

    const handlesumit =(e:any)=>
        {
            e.preventDefault();
            Router.push(`/search/${Search}`)
        };
  return (
    <form className='flex justify-between max-w-6xl px-5 mx-auto' onSubmit={handlesumit} >

      <input type='text' placeholder='Search keyword .....'
       className='w-full h-14 flex-1 rounded-md placeholder-gray-500 outline-none bg-transparent'
       value={Search}
       onChange={(e)=>setsearch(e.target.value)}
       >
       </input>
       <button className='disabled:text-gray-500 text-amber-500' disabled={Search===''}>Search</button>
    </form>
  )
}
