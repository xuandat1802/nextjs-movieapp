'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { FiThumbsUp } from 'react-icons/fi';
import axios from 'axios';
export default function Moviepage({params}:any) {
  const movieid= params.id;
  const [movie,setmovie]=useState<any>([]);
  useEffect(()=>
  {
    const FetchMovie=async()=>
      {
        try{
          const res= await axios.get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=7a29864549f0bc60b5bad88abb41ea99`);
       
          setmovie(res.data);
          
        }
        catch(err)
        {
          console.error('fail to loading data',err);
        }
  

      };FetchMovie()
  },[movieid]);
    

  return (
    <div className='w-full'>
     <div className='flex gap-5 md:pt-8 flex-col md:flex-row max-w-6xl p4 content-center mx-auto sm:m-x-6'>
      <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path||movie.backdrop_path}`}  
      alt='img' 
      width={500}
       height={300}
       className='w-76 h-96 rounded-lg'
       >
      </Image>

      <div>
        <p className='font-bold'>{movie.name||movie.original_title}</p>
        <p>{movie.overview}</p>
        <p className='font-semibold'>{movie.release_date}</p>
        <div className='flex gap-2 items-center'>
        <FiThumbsUp/>
        <p>{movie. vote_count}</p>
        </div>
      </div>
      </div>
    </div>
  )
}
