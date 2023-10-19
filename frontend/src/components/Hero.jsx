import React from 'react'
import Typed from 'react-typed'

function Hero() {
  return (
    <div className=" ">
      <div className="md:flex">
        <h1 className="text-left font-bold mt-3 ml-5 md:text-7xl text-3xl pt-6 text-base-content">
          BANDER
        </h1>
        <Typed
          className="text-left font-bold mt-3 ml-5 md:text-7xl text-3xl pt-6 text-[#9eac9f]"
          strings={['EL-KHEIR ...', 'EL-KHEIR . ..', 'EL-KHEIR . . .']}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
    </div>
  )
}

export default Hero
