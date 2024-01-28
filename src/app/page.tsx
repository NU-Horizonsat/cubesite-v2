'use client';
import Hero from './components/Hero'
import TileProject from './components/tile_projects'

export default function Home() {
  return (
    <main>
      <div className="space-y-6">
        <Hero />
      </div>
      <div className="pt-48 pb-3 pl-48">
      </div>
       
      <div className="flex flex-col space-y-8 items-center">
      <h1 className=" text-white text-5xl text-left">Projects</h1>    
      
        <TileProject
          name="TeraHertz In Space SATellite (THIS-SAT)"
          description="THIS-Sat is a satellite for testing terahertz-frequency low-earth orbit RF communication. It aims to be the first THz test platform to demonstrate and better understand this form of communication for uplink, downlink, and inter-satellite link in LEO."
        />
        <TileProject
          name="DevSat-1"
          description=" DevSat-1 is Project Horizon’s first in-house small satellite. It aims to provide flight heritage to novel technologies that Project Horizon hopes to utilize in future satellite launches."
        />
        <TileProject
          name="Merrit Coil Cubesat Attitude Test System"
          description="Helmholtz is an apparatus that will be used to simulate the magnetic field in low earth orbit. It will be used in testing and calibrating the attitude control system of our furture satellites."
        />
        <p></p>
        <p></p>
        <p className="text-white">Copyright 2023 - Project Horizon</p>
        <p></p>
      </div>
      
    </main>
  )
}
