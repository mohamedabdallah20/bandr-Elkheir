import React, { useState } from 'react'

function NewsLetter() {
  const [email, setEmail] = useState('')
  return (
    <div className="w-full py-8 px-4 md:mt-32 mt-32 bg-primary-content">
      <div className="py-8 mx-4 text-center md:text-xl text-base-100 ">
        <p className="font-bold text-4xl">Get our weekly newsletter</p>
        <p className="text-lg py-8">
          Sign up for our newsletter and never miss the newest blog post.
        </p>
        <div className="text-black">
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="btn btn-primary my-8"> Submit</div>
      </div>
    </div>
  )
}

export default NewsLetter
