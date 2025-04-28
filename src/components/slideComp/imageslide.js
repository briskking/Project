import React from 'react'
import Image from 'next/image'
import { Link } from 'lucide-react'
// import { useEffect, useState } from 'react'


const images = [

 '/gridimages/40.jpg',
 '/gridimages/41.jpg',
'/gridimages/43.jpg',
'/gridimages/45.jpg',

]

const Imageslide = ({heading, text, reverse}) => {

  return (
    <>
    <div className={`relative top-0 mx-auto mt-12 flex ${reverse ? "flex-row-reverse" : "flex-row"}`}>

    <div className='clip-triangule bg-purple-950 w-145 h-80 text-clip text-left absolute z-10 top-8 left-[-5px] overflow-hidden'>
<div className='h-full w-full animate-slide flex'>
{[...images, ...images].map((jpg, index) => (
  <div key={index} className='w-full flex-shrink-0'>
<Image
src={jpg}
width={700}
height={250}
className='object-cover h-full w-full'


/>
</div>

))}



{/* <p className='text-[14px] text-center leading-6'>{text}</p> */}
{/* <h1 className='text-3xl font-bold text-yellow-700 pb-2'>{heading}</h1> */}


</div>

</div>


<div className='clip-trianglee bg-purple-950 w-145 h-80 text-clip text-left py-1 absolute z-0 right-[-5px]'>

<h1 className='text-3xl font-bold text-yellow-700 pb-2'>{heading}</h1>

<div className='mx-20'>
<p className='text-[14px] text-center leading-6'>{text}</p>

</div>

</div>
    
</div>
    </>
    
  )
}

export default Imageslide