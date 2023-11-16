import Image from 'next/image'
import Hero from './components/Hero'
import Devsat from './components/devsatdesktopcard'
import Cubesat from './components/cubesatdesktopcard'
import Hemholdtz from './components/hemholdtzdesktopcard'

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
      
        <Cubesat />
        <Devsat />
        <Hemholdtz />
        <p></p>
        <p></p>
        <p className="text-white">Copyright 2023 - Project Horizon</p>
        <p></p>
      </div>
      
    </main>
  )
}
