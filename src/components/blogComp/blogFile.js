import { useRouter } from 'next/router'
import React from 'react'


const blogData = [
    {
      slug: "blog-post-1",
      title: "Blog Post 1",
      content: "This is the content of blog post 1.",
    },
    {
      slug: "blog-post-2",
      title: "Blog Post 2",
      content: "This is the content of blog post 2.",
    },
    {
      slug: "blog-post-3",
      title: "Blog Post 3",
      content: "This is the content of blog post 3.",
    },
  
  ]


export function BlogFile() {

const router = useRouter()
const { slug } = router.query // Get the slug from the URL       
const blogPost = blogData.find((post) => post.slug === slug)

if (!post) return <div>Loading...</div>
//  

  return (
    
    <div>
        <div className='flex justify-center items-center min-h-screen min-w-screen bg-[url("/herovide.gif")] bg-cover bg-center'>
    <div className='bg-white w-1/2 h-1/2 rounded-lg shadow-lg p-4'>
      <h1 className='text-2xl font-bold mb-4'>{post.title}</h1>
      <p className='text-gray-700'>{post.content}</p>
    </div>
    </div>
    </div>
  )
}

export default BlogFile