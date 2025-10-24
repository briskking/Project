import React from 'react'
import Image from 'next/image'

// const images = [
// '/gridimages/51.jpg',
// '/gridimages/photo-grid.png',
// ,
// '/gridimages/3.avif',
// ]

export const Overlay = ({mirror, mirrorI, mirrorII, text, wording, words, wordsII, first, second}) => {

  return (
<>
   { ( first ? (<div className='relative w-[300px] h-[200px] flex items-center justify-center'>
       <Image
       src={mirror}
       width={300}
       height={200}
       className='object-cover w-full h-full absolute top-0 left-0 scale-x-[-1] opacity-35 transition-transform duration-300 hover:scale-105 overflow-hidden'
       /> 

<div className='absolute text-purple-50 text-lg font-bold text-center px-6'>
<h4>{text}</h4>

</div>

</div>

) : ( second ) ? ( <div className='relative w-[400px] h-[250px] flex items-center justify-center'>
       <Image
       src={mirrorI}
       width={300}
       height={200}
       className='object-cover w-full h-full absolute top-0 left-0 scale-x-[-1] opacity-45 transition-transform duration-300 hover:scale-102 overflow-hidden'
       /> 

<div className='absolute text-purple-50 text-lg font-bold text-center px-6'>
<h4>{wording}</h4>

</div>

    </div>


) : ( <div className='relative w-[350px] h-[300px] flex items-center justify-center'>
  <Image
  src={mirrorII}
  width={300}
  height={200}
  className='object-cover w-full h-full absolute top-0 left-0 scale-x-[-1] opacity-15 transition-transform duration-300 hover:scale-100 overflow-hidden'
  /> 

<div className="text-center flex-col text-yellow-100 text-4xl">
            <h1 className="font-bold">{words}</h1>
            <h4 className="font-bold text-[7.5px]">{wordsII}</h4>
          </div>




</div>

))} 

 


</>
  )
}

export default Overlay