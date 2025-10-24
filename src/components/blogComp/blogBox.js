import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function BlogBox({img, caption, text, slug }) {

  // if(!slug) {
  //   return null; // Return null if slug is not provided
  // }
 
  return (
    <>
    <div className='md:w-134 w-100 h-110 bg-transparent border-0 rounded-2xl border-transparent flex-col items-end'>

       <div> 
        <Image
        src={img}
        width={300}
        height={200}
        alt={caption || 'Blog image'}
        style={{ objectFit: 'cover' }}
        className='w-135 h-85 hover:brightness-75'
        />
        </div>

        <div className='md:w-134 w-105 h-30 bg-black/50 border-2 rounded-b-2xl border-transparent flex-col items-center justify-center mx-auto p-4'>
        {/* <Image src={img} /> */}
        <Link href={`/blogs/${slug}`}><h4 className='hover:text-yellow-700 text-gray-200'>{caption}</h4></Link>
        <p className='pt-2 text-gray-400'>{text}</p>

        </div>
    </div>
    </>
  )
}

export default BlogBox