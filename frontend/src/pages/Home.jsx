import React from 'react'
import ReadBlog from '../components/ReadBlog'
import Hero from '../components/Hero'
import ReadMore from '../components/ReadMore'
import RecentPosts from '../components/RecentPosts'
import Quote from '../components/Quote'
import NewsLetter from '../components/NewsLetter'
import ReadBlogImg from '../assets/bandr1.avif'
import RecentImg1 from '../assets/bandr3.avif'
import RecentImg2 from '../assets/bandr4.avif'

function Home() {
  return (
    <div>
      <Hero />
      <ReadBlog img={ReadBlogImg} />
      <ReadMore />
      <RecentPosts img1={RecentImg1} img2={RecentImg2} />
      <Quote />
      <NewsLetter />
    </div>
  )
}

export default Home
