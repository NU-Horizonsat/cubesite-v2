import React from 'react'
import Image from 'next/image'

function Cubesat() {
  return (
    <div className="transition-opacity max-w-screen-xl glass card card-side text-white bg-black shadow-xl bg-opacity-70">
      <figure className="max-w-screen-xl"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Ncube2.jpg" alt="CubeSat"/></figure>
      <div className="card-body">
        <h2 className="card-title">CubeSat</h2>
        <p>launching in 2024!</p>
      </div>
    </div>
  )
}

export default Cubesat