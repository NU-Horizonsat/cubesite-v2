'use client';
import React from 'react'
import Link from 'next/link'
import { TypeAnimation
 } from 'react-type-animation'

const Hero = () => {
  return (
    <div className="hero  min-w-screen h-screen bg-hero-image backdrop-blur-sm">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <div className="flex flex-col items-center justify-center text-4xl text-red-600 font-bold py-6">
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'THIS-SAT',
        5000, // wait 1s before replacing "Mice" with "Hamsters"
        'TeraHertz',
        500,
        'In Space',
        500,
        'SATellite',
        500,
        'THIS-SAT',
        500,
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={2}
    />
    <p></p>
        </div>
    
    <p className="mb-5 text-2xl text-white">Northeastern's first in-house developed satellite. 
    </p>
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