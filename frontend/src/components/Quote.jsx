import React from 'react'
import QuoteImg from '../assets/bandr5.avif'

function Quote() {
  return (
    <div className="w-full py-8 px-4 grid md:grid-cols-2 ">
      <div className=" py-8 mx-4   ">
        <p className="font-bold md:text-xl">
          “This space is perfect for your favorite quote that inspires you.”
        </p>
        <p className="py-8"> -Name Surname</p>
      </div>
      <div className="mx-auto ">
        <img src={QuoteImg} alt="QuoteImg" />
      </div>
    </div>
  )
}

export default Quote
