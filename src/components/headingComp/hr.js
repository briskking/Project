import React from 'react'

export const Horiz = ({caption}) => {
  return (
    <div>
<div>
        <h1 className='text-5xl text-yellow-50 items-center justify-center flex flex-col gap-2'>{caption}</h1>
        
        <hr className='h-1 border-none bg-yellow-700 w-30 items-center mx-auto mt-3' />

      </div>

    </div>
  )
}

export default Horiz