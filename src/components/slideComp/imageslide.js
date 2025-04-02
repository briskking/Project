import React from 'react'

const Imageslide = ({heading, text, imgLink, reverse}) => {
  return (
    <>
    <div className='relative top-0 mx-auto mt-12'>

<div className='clip-trianglee bg-purple-950 w-145 h-80 text-clip text-left py-1 absolute z-0 right-20'>

<h1 className='text-3xl font-bold text-yellow-700 pb-2'>{heading}</h1>

<div className='mx-20'>
<p className='text-[14px] text-center leading-6'>{text}</p>

</div>

</div>

<div className='clip-trianglee bg-purple-950 w-145 h-80 text-clip text-left py-1 absolute z-10 top-8 left-20'>

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