import Moviecard from '@/components/Moviecard'
import React from 'react'
import movieCollection from "@/data"

const MoviesPage = () => {
  return (
    <div className="mx-auto max-w-5xl py-4">
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {movieCollection.map(movie => (
          
          <Moviecard key={movie.id} movie={movie}/>
        ))

        }
      </div>
    </div>
  )
}

export default MoviesPage