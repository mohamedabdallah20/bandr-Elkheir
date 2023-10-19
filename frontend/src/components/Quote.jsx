import React from 'react'
import QuoteImg from '../assets/bandr5.avif'

function Quote() {
  return (
    <div className="card grid md:grid-cols-2 mt-16 ">
      <div className="card-body">
        <p className="md:p-52 md:text-4xl  text-xl p-8">
          “This space is perfect for your favorite quote that inspires you.”
        </p>
        <p className="md:p-52 md:pt-0 md:text-xl  text-sm p-8">
          {' '}
          -Name Surname
        </p>
      </div>
      <figure>
        <img src={QuoteImg} alt="QuoteImg" />
      </figure>
    </div>
  )
}

export default Quote
