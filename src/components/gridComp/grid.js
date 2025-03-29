import React from 'react'
import Image from 'next/image'

const images = [


    "/gridimages/5.avif",
    "/gridimages/6.jpg",
    "/gridimages/2.jpg",
    "/gridimages/4.jpg",
    '/gridimages/9.jpg',
    '/gridimages/12.avif',
    '/gridimages/13.jpg',
    '/gridimages/14.avif',
    
        ]


export function Grid() {


  return (

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 p-32'>
{images.map((jpeg, index) => (
        <div key={index} className="relative w-full h-85 overflow-hidden transition-transform duration-300 hover:scale-105">
          <Image
            src={jpeg}
            alt={`Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
      ))}

    </div>
  )
}

export default Grid