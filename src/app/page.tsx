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
          name="CubeSat"
          description="CubeSat is a 1U CubeSat that is being developed by Project Horizon. It is our first satellite and is currently in the design phase."
          imagesrc="/nasa.png"
        />
        <TileProject
          name="DevSat"
          description="DevSat is a 3U CubeSat that is being developed by Project Horizon. It is our second satellite and is currently in the design phase."
          imagesrc="/nasa.png"
        />
        <TileProject
          name="Hemholdtz"
          description="Hemholdtz is a 6U CubeSat that is being developed by Project Horizon. It is our third satellite and is currently in the design phase."
          imagesrc="/nasa.png"
        />
        <p></p>
        <p></p>
        <p className="text-white">Copyright 2023 - Project Horizon</p>
        <p></p>
      </div>
      
    </main>
  )
}
