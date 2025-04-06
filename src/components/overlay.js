import React from 'react'
import Image from 'next/image'

// const images = [
// '/gridimages/51.jpg',
// '/gridimages/photo-grid.png',
// ,
// '/gridimages/3.avif',
// ]

export const Overlay = ({mirror, text}) => {
  return (

    <div className='relative w-[300px] h-[200px] flex items-center justify-center'>
       <Image
       src={mirror}
       width={300}
       height={200}
       className='object-cover w-full h-full absolute top-0 left-0 scale-x-[-1] opacity-35'
       /> 

<div className='absolute text-purple-50 text-lg font-bold text-center px-6'>
<h4>{text}</h4>

</div>

    </div>
  )
}

export default Overlay