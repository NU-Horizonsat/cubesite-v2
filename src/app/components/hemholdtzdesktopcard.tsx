import React from 'react'
import Image from 'next/image'

function Hemholdtz() {
  return (
    <div className="transition-opacity max-w-screen-xl card text-white card-side bg-gradient-to-t from-black to-gray-950 shadow-xl">
      <figure className="max-w-screen-xl"><img src="https://scx2.b-cdn.net/gfx/news/2021/satellite-2.jpg" alt="CubeSat"/></figure>
      <figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-red-700">HEMHOLDTZ CAGE</h2>
        <p>This cage was made for the purposes of testing our Cubesat satellite. we aim to complete it well before launching Cubesat. Projected completion: Q4 2023. </p>
      </div>
      </figure>
      
    </div>
  )
}

export default Hemholdtz