import React from 'react'

export default function Results({results}:any) {
  return (
    <div>
      {
        results.map((result:any)=>(
            <div key={result.id}>
                <p>{result.original_title}</p>
            </div>
        ))
      }
    </div>
  )
}
