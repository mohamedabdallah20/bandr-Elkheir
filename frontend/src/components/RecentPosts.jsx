import React from 'react'
import { Link } from 'react-router-dom'

function RecentPosts({ img1, img2, blogs }) {
  return (
    <div className="card mt-16 bg-primary-content">
      {!blogs && (
        <div className="card-body text-base-100">
          <h1 className="card-title py-4 text-3xl  ">Recent Posts</h1>
          <p className="py-4 text-xl">
            {' '}
            Use this space to encourage visitors to read your most recent blog
            posts by telling them a bit about your blog in general.
          </p>
        </div>
      )}
      <div className="grid md:grid-cols-2 text-base-200 ">
        <div className="p-20">
          <figure>
            <Link to="/blogs/1">
              <img src={img1} alt="RecentImg1" />
            </Link>
          </figure>
          <p className="py-8  text-3xl">Your Post Title</p>
          <p>A short description of your blog post goes here</p>
          <p className="pt-2">7/20/2021 - 1 min read</p>
        </div>
        <div className="p-20">
          <figure>
            <Link to="/blogs/2">
              <img src={img2} alt="RecentImg2" />
            </Link>
          </figure>
          <p className="py-8  text-3xl">Your Post Title</p>
          <p>A short description of your blog post goes here</p>
          <p className="pt-2">7/20/2021 - 1 min read</p>
        </div>
      </div>
    </div>
  )
}

export default RecentPosts
