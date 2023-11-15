import React from 'react'

const Hero = () => {
  return (
    <div className="hero  min-w-screen h-screen bg-hero-image bg-white bg-opacity-10">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <div className="flex flex-col items-center justify-center">
      <p className="inline text-7xl text-red-600 font-bold">THIS-SAT</p>
        </div>
    <p className="mb-5 text-2xl text-white">Northeastern's first in-house developed satellite. 
    </p>
      <button className=" bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded">
        Meet The Team
      </button>
    </div>
  </div>
</div>
        
  )
}

export default Hero