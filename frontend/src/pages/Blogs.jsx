import React from 'react'
import RecentPosts from '../components/RecentPosts'
import img1 from '../assets/blogs1.webp'
import img2 from '../assets/blogs2.webp'
import img3 from '../assets/blogs3.webp'
import img4 from '../assets/blogs4.webp'

function Blogs() {
  return (
    <>
      <div className=" grid lg:grid-cols-2 mt-20 mx-auto p-8 md:p-32 ">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold p">
          Tell your visitors what your blog is all about. You want to make sure
          that you’re not too general in your body copy.
        </h1>
        <p className="lg:text-3xl md:text-1xl text-lg mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <RecentPosts img1={img1} img2={img2} blogs={true} />
        <RecentPosts img1={img3} img2={img4} blogs={true} />
      </div>
    </>
  )
}

export default Blogs
