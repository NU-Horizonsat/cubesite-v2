import React from 'react'
import Image from 'next/image'

function Devsat() {
  return (
    <div className="transition-opacity max-w-screen-xl card text-white card-side bg-gradient-to-t from-black to-gray-950 shadow-xl">
      <figure className="max-w-screen-xl"><img src="https://scx2.b-cdn.net/gfx/news/2021/satellite-2.jpg" alt="CubeSat"/></figure>
      <figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-red-700">DEVSAT</h2>
        <p>This is the satellite we are launching in 2026 in collaboration with UN Lab! We have been making this bad boy for a while, and Cubesat is a precursor to this.</p>
      </div>
      </figure>
      
    </div>
  )
}

export default Devsat