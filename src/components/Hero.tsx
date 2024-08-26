'use client';
import React from 'react'
import Link from 'next/link'
import {
  TypeAnimation
} from 'react-type-animation'

const Hero = () => {
  return (
    <div className="hero min-w-screen h-96 md:h-screen bg-hero-image ">
      {/* i just blured the image like the file */}
      <div className="hero-content text-center ">
        <div className="w-auto">
          <div className="flex flex-col items-center justify-center  text-red-600 font-bold py-6 sm:text-md md:text-3xl">
            <TypeAnimation
              sequence={[
                'Project Horizon',
              ]}
              wrapper="span"
              speed={30}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={2}
            />
            <p></p>
          </div>

            <p className="mb-5 text-2xl text-white">Northeastern&apos;s First In-House Cubesat Program.</p>
          <Link href="/team">
            <button className=" bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded">
              Meet The Team
            </button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Hero