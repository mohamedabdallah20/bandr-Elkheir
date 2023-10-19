import React from 'react'
import ReadBlogImg from '../assets/bandr1.avif'

function ReadBlog() {
  return (
    <div className="card grid md:grid-cols-2 mt-16 bg-primary-content ">
      <div className="card-body text-base-100 ">
        <p className="md:p-52 md:text-4xl  text-xl p-8 ">
          This space is used to briefly communicate your brand’s main selling
          points to the visitor and giving them reasons to stay on your site.
          You can prompt them to navigate to another page by placing a button
          with a link under this text.
        </p>
        <div className="card-actions justify-end md:items-center">
          <button className="btn btn-primary w-52">Read Blog</button>
        </div>
      </div>
      <figure>
        <img src={ReadBlogImg} alt="ReadBlogImg" />
      </figure>
    </div>
  )
}

export default ReadBlog
