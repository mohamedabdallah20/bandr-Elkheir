import React from 'react'
import ReadBlogImg from '../assets/bandr1.avif'

function ReadBlog() {
  return (
    <div className="w-full py-8 px-4 md:mt-32 mt-32 grid md:grid-cols-2 bg-primary-content">
      <div className="font-bold py-8 mx-4 md:text-xl text-base-100 ">
        <p>
          This space is used to briefly communicate your brand’s main selling
          points to the visitor and giving them reasons to stay on your site.
          You can prompt them to navigate to another page by placing a button
          with a link under this text.
        </p>
        <div className="btn btn-primary my-8"> Read Blog</div>
      </div>
      <div className="mx-auto ">
        <img src={ReadBlogImg} alt="ReadBlogImg" />
      </div>
    </div>
  )
}

export default ReadBlog
