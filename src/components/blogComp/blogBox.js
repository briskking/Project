import React from 'react'
import Image from 'next/image'

function BlogBox({img, caption, text }) {
  return (
    <>
    <div className='w-134 h-110 bg-transparent border-0 rounded-2xl border-transparent flex-col items-end'>

       <div> 
        <Image
        src={img}
        width={300}
        height={200}
        objectFit='cover'
        className='w-135 h-85 hover:to-gray-700'
        />
        </div>

        <div className='w-134 h-30 bg-black/50 border-2 rounded-b-2xl border-transparent flex-col items-center justify-center mx-auto p-4'>

        <a href='' target='_blank' rel='noreferrer noopener'><h4 className='hover:text-yellow-700 text-gray-200'>{caption}</h4></a>
        <p className='pt-2 text-gray-400'>{text}</p>

        </div>
    </div>
    </>
  )
}

export default BlogBox