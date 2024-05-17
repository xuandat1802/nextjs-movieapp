import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FiThumbsUp } from 'react-icons/fi'
export default function Card({result}:any) {
  return (
    <div className='group p-1 cursor-pointer sm:hover:shadow-slate-500 sm:shadow-md sm:border sm:border-slate-500 rounded-lg sm:m-2 transition-shadow duration-200'>
      <Link href={`/movie/${result.id}`}>
        <Image src={`https://image.tmdb.org/t/p/original/${result.poster_path||result.backdrop_path}`}  
        alt='img'
       width={500}
       height={300}
         className='sm:rounded-t-lg group-hover:opacity-70  w-66 h-40 '
         />
    <div className='line-clamp-2 text-md'>
        {result.overview}
    </div>
    <div className='font-bold truncate text-lg'>
        {result.original_title||result.name}
    </div>
    <div className='flex items-center gap-x-1'>
    <p>
        {result.release_date||result.first_air_date}
    </p>
    <FiThumbsUp/> {result.vote_count}
    </div>
   
      </Link>
    </div>
  )
}
