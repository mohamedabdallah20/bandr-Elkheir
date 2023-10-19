import React from 'react'
import ReadMoreImg from '../assets/bandr2.avif'

function ReadMore() {
  return (
    <div className="w-full py-8 px-4 grid md:grid-cols-2 ">
      <div className="mx-auto ">
        <img src={ReadMoreImg} alt="ReadMoreImg" />
      </div>
      <div className="font-bold py-8 mx-4 md:text-xl  ">
        <p>
          Communicate your brand’s values and missions on this page. You can get
          personal with the reader, too, by explaining the motivation behind
          your brand.
        </p>
        <div className="btn btn-primary my-8"> Read More</div>
      </div>
    </div>
  )
}

export default ReadMore
