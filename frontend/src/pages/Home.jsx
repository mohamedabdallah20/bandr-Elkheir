import React from 'react'
import ReadBlog from '../components/ReadBlog'
import Hero from '../components/Hero'
import ReadMore from '../components/ReadMore'
import RecentPosts from '../components/RecentPosts'
import Quote from '../components/Quote'
import NewsLetter from '../components/NewsLetter'

function Home() {
  return (
    <div>
      <Hero />
      <ReadBlog />
      <ReadMore />
      <RecentPosts />
      <Quote />
      <NewsLetter />
    </div>
  )
}

export default Home
