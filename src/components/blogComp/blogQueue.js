import React from "react";
import BlogBox from "./blogBox";

export function BlogQueue() {

  const list = [
    {
      img: "/blog1.jpg",
      caption: "Blog 1",
      text: "This is the first blog",
      slug: "blog-1",
    },
    {
      img: "/blog2.jpg",
      caption: "Blog 2",
      text: "This is the second blog",
      slug: "blog-2",
    },
    {
      img: "/blog3.jpg",
      caption: "Blog 3",
      text: "This is the third blog",
      slug: "blog-3",
    },
    {
      img: "/blog4.jpg",
      caption: "Blog 4",
      text: "This is the fourth blog",
      slug: "blog-4",
    },
    {
      img: "/blog5.jpg",
      caption: "Blog 5",
      text: "This is the fifth blog",
      slug: "blog-5",
    },
    {
      img: "/blog6.jpg",
      caption: "Blog 6",
      text: "This is the sixth blog",
      slug: "blog-6",
    },
  ];



  return (

    <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 min-h-[500px]">
      {list.map((blogs) => (
        <BlogBox
          key={blogs.slug}  
          img={blogs.img}
          caption={blogs.caption}
          text={blogs.text}
          slug={blogs.slug}
        />
      ))}
    </div>
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-[url('/herovide.gif')] bg-cover bg-center">
      <div className="bg-white w-1/2 h-1/2 rounded-lg shadow-lg p-4">
        <h1 className="text-2xl font-bold mb-4">Blog Title</h1>
        <p className="text-gray-700">This is a sample blog post content.</p>
      </div> 
  </div>
    </div>
  )
}


export default BlogQueue;
