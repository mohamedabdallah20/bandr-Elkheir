import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function Hero() {
  return (
    <div className=" ">
      <div className="md:flex">
        <h1 className="text-left font-bold mt-3 ml-5 md:text-7xl text-3xl pt-6 text-base-content">
          BANDER
        </h1>
        <TypeAnimation
          sequence={[
            'E',

            'EL',

            'EL-',

            'EL-K',

            'EL-KH',

            'EL-KHE',

            'EL-KHEI',

            'EL-KHEIR ...',
            1000,
            'EL-KHEIR . ..',
            1000,
            'EL-KHEIR . . .',
            1000,
          ]}
          // wrapper="span"
          speed={50}
          preRenderFirstString={true}
          className="text-left font-bold mt-3 ml-5 md:text-7xl text-3xl pt-6 text-[#9eac9f]"
          repeat={Infinity}
        ></TypeAnimation>
      </div>
    </div>
  )
}

export default Hero
