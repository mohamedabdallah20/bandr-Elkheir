import React from 'react'
import RecentImg1 from '../assets/bandr3.avif'
import RecentImg2 from '../assets/bandr4.avif'

function RecentPosts() {
  return (
    <div className="w-full py-8 px-4 bg-primary-content">
      <div className="font-bold py-8 mx-4 md:text-xl text-base-100">
        <h1 className="py-4 text-3xl  ">Recent Posts</h1>
        <p className="py-4">
          {' '}
          Use this space to encourage visitors to read your most recent blog
          posts by telling them a bit about your blog in general.
        </p>
      </div>
      <div className="grid md:grid-cols-2 text-base-200">
        <div className="mx-auto px-8 py-6">
          <img src={RecentImg1} alt="RecentImg1" />
          <p className="py-8  text-3xl">Your Post Title</p>
          <p>A short description of your blog post goes here</p>
          <p className="pt-2">7/20/2021 - 1 min read</p>
        </div>
        <div className="mx-auto px-8 py-6">
          <img src={RecentImg2} alt="RecentImg2" />
          <p className="py-8  text-3xl">Your Post Title</p>
          <p>A short description of your blog post goes here</p>
          <p className="pt-2">7/20/2021 - 1 min read</p>
        </div>
      </div>
    </div>
  )
}

export default RecentPosts
