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

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 p-32 min-h[500px]'>
{images.map((jpeg, index) => (
        <div key={index} className="relative z-0 w-full h-85 transition-transform duration-300 hover:scale-105 overflow-hidden">
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