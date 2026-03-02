import React from 'react'
import { Card, CardTitle } from './ui/card'
import Image from 'next/image'

const Moviecard = ({movie}) => {
    const {title, epilogue, dateReleased, category, type, actors, trailer, rating, keywords, kind, image} = movie
  return (
    <Card>

        <div>
            <Image src={image} width="500" height="500" alt=""/>
           
        </div>
        <CardTitle>{title}</CardTitle>
        <p>
            {category}
        </p>
        <p>
            {dateReleased}
        </p>
    </Card>
  )
}

export default Moviecard