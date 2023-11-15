import React from 'react'
import Image from 'next/image'

function Cubesat() {
  return (
    <div className="transition-opacity max-w-screen-xl card card-side text-white bg-gradient-to-t from-black to-gray-950 shadow-xl">
      <figure className="max-w-screen-xl"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Ncube2.jpg" alt="CubeSat"/></figure>
      <div className="card-body">
        <h2 className="card-title text-red-700 font-bold">CUBESAT</h2>
        <p>This is the satellite we are launching in 2024! We have been making this bad boy for a while.</p>
      </div>
    </div>
  )
}

export default Cubesat