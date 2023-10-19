import React from 'react'
import ReadMoreImg from '../assets/bandr2.avif'

function ReadMore() {
  return (
    <div className="card grid md:grid-cols-2 mt-16 ">
      <figure>
        <img src={ReadMoreImg} alt="ReadMoreImg" />
      </figure>
      <div className="card-body">
        <p className="md:p-52 md:text-4xl  text-xl p-8 ">
          Communicate your brand’s values and missions on this page. You can get
          personal with the reader, too, by explaining the motivation behind
          your brand.
        </p>
        <div className="card-actions justify-end md:items-center">
          <button className="btn btn-primary w-52 ">Read More</button>
        </div>
      </div>
    </div>
  )
}

export default ReadMore
