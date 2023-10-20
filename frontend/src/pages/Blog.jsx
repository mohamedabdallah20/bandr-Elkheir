import React from 'react'
import img1 from '../assets/blog1.jpg'
import img2 from '../assets/blog2.jpg'
import { useParams } from 'react-router-dom'

function Blog() {
  const blogId = useParams().blogId
  return (
    <div className="justify-start p-12">
      <h1 className="lg:text-3xl md:text-2xl text-xl font-bold my-4">
        Your Post title
      </h1>
      <p className="my-4">A short description of your blog post goes here</p>
      <p className="my-4">7/20/20211 min read</p>
      <figure>
        <img src={blogId == 1 ? img1 : img2} alt="img" />
      </figure>
      <p className="my-12">
        When it comes to blogs, you want to make sure that you’re not too
        general in your body copy. If you’re thinking about a content marketing
        strategy, the better you tailor your content to your audience, the
        better engagement you will get. Having a niche helps, because that way
        you can really narrow down not just your content, but also your own
        expertise. This will make it easier to brand your business and yourself.
        How you’re marketing your blog is another thing that’s important to
        remember when you’re starting out with your blog.{' '}
      </p>
    </div>
  )
}

export default Blog
