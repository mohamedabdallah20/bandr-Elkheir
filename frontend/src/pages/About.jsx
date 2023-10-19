import React from 'react'
import AboutImg from '../assets/bandrAbout.avif'
import { TypeAnimation } from 'react-type-animation'

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
        <div className="px-3">
          <p className="my-8 text-2xl">
            Landline:&nbsp;&nbsp;&nbsp;&nbsp;+971 4 333 9896{' '}
          </p>
          <p className="my-8 text-2xl">
            Mobile:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+971 54 773 0717{' '}
          </p>
          <p className="my-8 text-2xl">
            Address:&nbsp;&nbsp;&nbsp;&nbsp; Office 20B-03 BC Resi 1072 Tower Al
            Muteena, Dubai, UAE.{' '}
          </p>
          <p className="my-8 text-2xl">
            P.O.Box:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11863{' '}
          </p>
          <p className="my-8 text-2xl">
            Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Info@rokalkayan.com{' '}
          </p>
        </div>
      </div>
      <figure className=" mx-auto my-8">
        <img className="pb-32 w-50% h-50%" src={AboutImg} alt="AboutImg" />
      </figure>
    </div>
  )
}

export default About
