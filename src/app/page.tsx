'use client'
import React from 'react'
import axios from 'axios'
import Results from '@/components/Results';
import { useState,useEffect } from 'react';
export default  function Home({searchParams}:any) {
  const API_KEY = process.env.API_KEY;
  const genre = searchParams.genre || 'fetchtrending';
  const [results,setresult]=useState();
  useEffect(()=>
    {
      const callapi =async ()=>
        {
          try{
            const res= await axios.get(`https://api.themoviedb.org/3${genre==='fetchrarting'? '/movie/top_rated':
            '/trending/all/week'}?api_key=7a29864549f0bc60b5bad88abb41ea99&language=en-US&page=1`);
        
          
          setresult(res.data.results);
          console.log('fetch data success');
          }
          catch(error)
          {
            console.error('fail to fetch data',error);
          }
          
          
        };
        callapi()
    },[genre]  );
  

  

    // useEffect(() => {
    //     const fetchMovies = async () => {
           

    //         const endpoint = genre === 'fetchrarting'
    //             ? 'https://api.themoviedb.org/3/movie/top_rated'
    //             : 'https://api.themoviedb.org/3/trending/all/week';

    //         try {
    //             const response = await axios.get(`${endpoint}?api_key=7a29864549f0bc60b5bad88abb41ea99&language=en-US&page=1`);
    //             setresult(response.data.results);
    //         } catch (err) {
    //             console.log("fail",err);
    //         } 
    //     };

    //     fetchMovies();
    // }, [genre]);

  return (
    <div>
       <Results results={results}/> 
    </div>
  )
}
