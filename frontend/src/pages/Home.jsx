import React from 'react'
import ReadBlog from '../components/ReadBlog'
import Hero from '../components/Hero'
import ReadMore from '../components/ReadMore'
import RecentPosts from '../components/RecentPosts'
import Quote from '../components/Quote'

function Home() {
  return (
    <div>
      <Hero />
      <ReadBlog />
      <ReadMore />
      <RecentPosts />
      <Quote />
    </div>
  )
}

export default Home
