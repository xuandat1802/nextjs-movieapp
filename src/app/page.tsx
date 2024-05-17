
import React from 'react'
import axios from 'axios'
import { error } from 'console';
import Results from '@/components/Results';
const API_KEY = process.env.API_KEY;
export default async function Home({searchParams}:any) {
  const genre = searchParams.genre || 'fetchtrending';
  const respone= await fetch(`https://api.themoviedb.org/3${genre==='fetchrarting'? `/movie/top_rated`:`/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`,{next:{revalidate:100000}});
  const data=await respone.json();
  if(!respone.ok)
    {
     throw new Error('fail to fetch data');
    }
     const results = data.results;
     console.log(results);
 
  return (
    <div>
      <Results results={results}/>
    </div>
  )
}
