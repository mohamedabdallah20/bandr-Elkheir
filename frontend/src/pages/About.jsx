import React from 'react'
import AboutImg from '../assets/bandrAbout.avif'
import { TypeAnimation } from 'react-type-animation'
import Info from '../components/Info'

function About() {
  return (
    <div className="flex flex-col justify-start">
      <div className="grid md:grid-cols-2 mt-20 pb-8">
        <div>
          <h1 className="text-left md:text-7xl text-5xl mx-20 ">
            WE ARE HAPPY TO ANSWER AND HELP...&nbsp;&nbsp;
          </h1>
          <TypeAnimation
            sequence={['', 200, 'y', 200, 'yo', 200, 'you', 200, 'you !', 200]}
            // wrapper="span"
            speed={50}
            wrapper="span"
            preRenderFirstString={true}
            className=" text-left md:text-7xl text-5xl mx-20 text-[#9eac9f]"
            repeat={Infinity}
          ></TypeAnimation>
        </div>
        <Info />
      </div>
      <figure className=" mx-auto my-8">
        <img className="pb-32 w-50% h-50%" src={AboutImg} alt="AboutImg" />
      </figure>
    </div>
  )
}

export default About
